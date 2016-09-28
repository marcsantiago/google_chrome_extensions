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
        {from: 'popup', subject: 'DOMInfo', data:data},
        function(response) {
          console.log('jere')
          console.log(response)
          document.getElementById('msg').innerHTML = response.popup_msg;
        }
      );
    });
  }, false);
}, false);


//http://stackoverflow.com/questions/6108906/chrome-extension-message-passing-from-popup-to-content-script
//http://stackoverflow.com/questions/20019958/chrome-extension-how-to-send-data-from-content-script-to-popup-html