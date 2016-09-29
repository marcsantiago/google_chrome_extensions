chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.found) {
      chrome.browserAction.setIcon({
          path: request.newIconPath,
          tabId: sender.tab.id
      });
      sendResponse({done: true});
    } else {
      chrome.browserAction.setIcon({
          path: request.newIconPath,
          tabId: sender.tab.id
      });
      sendResponse({done: false});
    }
});