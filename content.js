function onload() {
}

if (document.baseURI.indexOf("http://www.10bis.co.il") === 0) {
    var scriptURL = '2file:///home/dan/var/chrome/ext/10bis/10bis-form-filler/injected.js',
    scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = chrome.extension.getURL("injected.js");
    scriptTag.onload = onload;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(scriptTag);
}
