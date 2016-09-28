chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.found) {
      chrome.browserAction.setIcon({
          path: request.newIconPath,
          tabId: sender.tab.id
      });
      sendResponse({
        sender.tab.id,
         popup_msg: "The item was found!"
      });
    } else {
      chrome.browserAction.setIcon({
          path: request.newIconPath,
          tabId: sender.tab.id
      });
      sendResponse({
        sender.tab.id,
         popup_msg: 'The item was not found'
      });
    }
});