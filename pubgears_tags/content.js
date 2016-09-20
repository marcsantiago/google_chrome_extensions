var markup = document.documentElement.innerHTML;
var m = markup.indexOf("tags.pubgears.com");
if (m > -1) {
  chrome.runtime.sendMessage({"newIconPath" : "found.png"});
} else {
  chrome.runtime.sendMessage({"newIconPath": "not_found.png"});
}
