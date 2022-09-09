console.log("The extension is up and running")

var s = document.createElement('script');
// s.src = chrome.runtime.getURL('modified_index_old.js');
s.src = chrome.runtime.getURL('modified_index.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);
