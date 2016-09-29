document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, function (tabs) {
      var data = {};
      data['slug'] = document.getElementById('slug').value;
      data['adsize'] = document.getElementById('adsize').value;
      chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'DOMInfo', data:data}
      );
    });
  }, false);
}, false);



chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.newIconPath == "found.png") {
      document.getElementById('msg').innerHTML = 'The item was found';
    } else {
      document.getElementById('msg').innerHTML = 'The item was Not found';
    }
});

//http://stackoverflow.com/questions/6108906/chrome-extension-message-passing-from-popup-to-content-script
//http://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html
//http://stackoverflow.com/questions/32003799/sending-message-from-background-js-to-popup-js-without-listener