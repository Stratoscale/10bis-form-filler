function onload() {
}

if (document.baseURI.indexOf("https://www.10bis.co.il") === 0  ||
    document.baseURI.indexOf("http://www.10bis.co.il") === 0) {
    scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = chrome.extension.getURL("injected.js");
    scriptTag.onload = onload;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(scriptTag);
}
