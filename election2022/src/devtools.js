/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

/**
 * Connect to the background script and send initialization message.
 * This first message is needed to properly pair connection within
 * the background script relay logic.
 */
var port = chrome.runtime.connect({ name: "devtools" });
port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId
});

setInterval(function() {
  if (port === null) {
    return;
  }
  port.postMessage({
    tabId: chrome.devtools.inspectedWindow.tabId,
    action: "devtoolsLoaded",
  });
}, 500);
port.postMessage({
  tabId: chrome.devtools.inspectedWindow.tabId,
  action: "devtoolsLoaded",
});


let vars = null;

/**
 * Listen for message sent from the content scope (they are relayed
 * by background script).
 */
function onMessage(message) {
  if (!message) {
    console.error("ERROR: message object doesn't exist!");
    return;
  }

  switch (message.action) {
    case "getHAR":
      onGetHAR(message);
      break;
    case "saveVars":
      console.log(`Saving vars ${JSON.stringify(message.vars)}`);
      vars = message.vars;
      break;
  }
}

port.onMessage.addListener(onMessage);

/**
 * Listen for disconnect and clean up listeners.
 */
port.onDisconnect.addListener(function() {
  port.onMessage.removeListener(onMessage);
  port = null;
});

let harEntries = [];




function onRequestFinished(entry) {
  entry.getContent(function(s, mime) {
    entry.response.content.mimeType = mime;
    entry.response.content.text = s;
    harEntries.push(entry);
  });
}

chrome.devtools.network.onRequestFinished.addListener(onRequestFinished);

function onGetHAR(message) {
  chrome.devtools.network.getHAR(function(harLog) {
    harLog.entries = harEntries;
    // loadContent(harLog).then(function() {
    port.postMessage({
      tabId: chrome.devtools.inspectedWindow.tabId,
      har: JSON.stringify({log: harLog}),
      vars: vars,
      action: "getHAR",
      actionId: message.actionId,
    });
  });
    // })
  // });
}
