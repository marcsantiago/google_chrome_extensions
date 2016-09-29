// check the page first and change the icon
var markup = document.documentElement.innerHTML;
var m = markup.indexOf("tags.pubgears.com");
if (m > -1) {
  chrome.runtime.sendMessage({"newIconPath" : "found.png"});
} else {
  chrome.runtime.sendMessage({"newIconPath": "not_found.png"});
}


// Inform the background page that 
// this tab should have a page-action
chrome.runtime.sendMessage({
  from:    'content',
  subject: 'showPageAction'
});



// Listen for messages from the popup
chrome.runtime.onMessage.addListener(function (msg, sender, response) {
  // First, validate the message's structure
  if ((msg.from === 'popup') && (msg.subject === 'DOMInfo')) {
    var data = msg.data;
    var pat = "tags.pubgears.com\/" + data['slug'] + "\/[^\/]+\/" + data['adsize'];
    var m = new RegExp(pat).test(markup);
    if (m) {
      chrome.runtime.sendMessage({"newIconPath" : "found.png"});
    } else {
      chrome.runtime.sendMessage({"newIconPath": "not_found.png"});
    }
  }
});


