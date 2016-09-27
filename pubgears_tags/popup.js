document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.getSelected(null, function(tab) {
      var markup = document.documentElement.innerHTML;
      var slug = document.getElementById('slug');
      var msg = document.getElementById('msg');
      var adsize = document.getElementById('adsize');
      var pat = "tags.pubgears.com\/" + slug + "\/[^\/]+\/" + adsize;
      var m = new RegExp(pat).test(markup);
      if (m) {
        chrome.runtime.sendMessage({"newIconPath" : "found.png"});
        msg.innerHTML = "Item was found";
      } else {
        chrome.runtime.sendMessage({"newIconPath": "not_found.png"});
        msg.innerHTML = "Item was not found";
      }
    });
  }, false);
}, false);
//http://stackoverflow.com/questions/6108906/chrome-extension-message-passing-from-popup-to-content-script
//http://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html