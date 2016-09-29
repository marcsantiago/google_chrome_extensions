chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.found) {
      chrome.browserAction.setIcon({
          path: request.newIconPath,
          tabId: sender.tab.id
      });
    } else {
      chrome.browserAction.setIcon({
          path: request.newIconPath,
          tabId: sender.tab.id
      });
    }
});