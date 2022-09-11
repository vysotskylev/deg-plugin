/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * Connect to the background script and send initialization message.
 * This first message is needed to properly pair connection within
 * the background script relay logic.
 */
var port = chrome.runtime.connect(null, { name: "content" });
port.postMessage({});

let openDevtoolsMessage = (function() {
  var el = document.createElement("div");
  el.id = "openDevtoolsMessage";
  el.appendChild(document.createTextNode(
    "Пожалуйста, откройте Инструменты разработчика (Developer tools). " +
    "Для этого нажмите Shift + Ctrl + I (Windows/Linux) или Command + Option + I (Mac). " +
    "Без этого ничего не получится."
  ));
  el.style.fontSize = "20pt";
  el.style.position = "absolute";
  el.style.width = "600px";
  el.style.height = "350px";
  el.style.top = "50%";
  el.style.zIndex = 1000;
  el.style.left = "50%";
  el.style.margin = "-175px 0 0 -300px";
  el.style.padding = "20px";
  el.style.background = "red";
  document.body.appendChild(el);
  return el;
}());


function onDevtoolsLoaded() {
    openDevtoolsMessage.hidden = true;
}

let downloadResults = (function() {
  var el = document.createElement("button");
  el.id = "downloadResults";
  el.appendChild(document.createTextNode(
    "Нажмите на эту кнопку после окончания голосования, чтобы скачать ваш голос!!!"
  ));
  el.style.zIndex = 1000;
  el.style.fontSize = "12pt";
  el.style.position = "absolute";
  el.style.width = "250px";
  el.style.height = "130px";
  el.style.top = "10px";
  el.style.left = "10px";
  el.style.padding = "5px";
  el.style.background = "yellow";
  el.addEventListener('click', function() {
    port.postMessage({
      actionId: 42,
      action: "getHAR",
    });
  });
  document.body.appendChild(el);
  return el;
}());

/**
 * Listen for incoming messages from the devtools scope.
 */
function onMessage(message) {
  if (!message) {
    console.error("ERROR: message object doesn't exist!");
    return;
  }

  switch (message.action) {
    case "getHAR":
      onHarReceived(message);
      break;
    case "devtoolsLoaded":
      onDevtoolsLoaded();
  }
};

port.onMessage.addListener(onMessage);

/**
 * Listen for disconnect and clean up listeners.
 */
port.onDisconnect.addListener(function() {
  port.onMessage.removeListener(onMessage);
  port = null;
});

// Handle messages from the devtools scope.

/**
 * Receive HAR log from DevTools script, remove related
 * promise from `exportsInProgress` map and resolve it.
 */
function onHarReceived(message) {
  var info = {
    vars: message.vars,
    har: JSON.parse(message.har),
  };
  var element = document.createElement('a');
  element.setAttribute('href', 'data:application/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(info, null, 2)));
  element.setAttribute('download', "myvote.json");

  element.style.display = 'none';
  document.body.appendChild(element);

  element.click();

  document.body.removeChild(element);
}

window.addEventListener("unload", function(e) {
  let vars = JSON.parse(localStorage.getItem("vars"));
  port.postMessage({
    action: "saveVars",
    vars: vars,
  });
});

/**
 * Inject harapi.js file into the page automatically. Note that
 * `cloneInto` can't be used since it's only supported by Firefox,
 * and so let's inject a <script> tag pointing to the harapi.js file.
 */
(function(d, id){
  var js, fjs = d.head;
  if (d.getElementById(id)) { return; }
  js = d.createElement('script');
  js.id = id;
  js.src = chrome.runtime.getURL("/src/modified_index.js");
  fjs.parentNode.insertBefore(js, fjs);
}(document, "harapi_x123213"));

