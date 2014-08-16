chrome.browserAction.onClicked.addListener(function(tab) {
  var tabId = tab.id
  chrome.tabs.executeScript(tabId, {file: "injected.js"}, function() {
    chrome.tabs.executeScript(tabId, {code: "autofill();"})
  })
})