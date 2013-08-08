function EXT10BIS_getTextNodesIn(node, includeWhitespaceNodes) {
    var textNodes = [], whitespace = /^\s*$/;

    function getTextNodes(node) {
        if (node.nodeType == 3) {
            if (includeWhitespaceNodes || !whitespace.test(node.nodeValue)) {
                textNodes.push(node);
            }
        } else {
            for (var i = 0, len = node.childNodes.length; i < len; ++i) {
                getTextNodes(node.childNodes[i]);
            }
        }
    }

    getTextNodes(node);
    return textNodes;
}

function autofill() {
    var i, item;

    var personName;
    var selects = document.getElementsByTagName("select");
    for (i = 0; i < selects.length; i++) {
        item = selects[i];
        if (item.getAttribute("data-dish-assigned-users-select")) {
            personName = item.getElementsByTagName("option")[item.selectedIndex].childNodes[0].data;
        }
    }

    var texts = EXT10BIS_getTextNodesIn(document);
    for (i = 0; i < texts.length; i++) {
        item = texts[i];
        var content = $.trim(item.data);
        var should_click = false;

        if (personName === "דן אלוני") {
            if (content === "חסה" ||
                content === "מלפפון" ||
                content === "גזר" ||
                content === "פסטה" ||
                content === "תירס" ||
                content === "כרוב לבן" ||
                content === "נבטים" ||
                content === "מלפפון חמוץ" ||
                content === "תיבול שמן זית" ||
                content === "ויניגרט בלסמי" ||
                content === "איטלקי חריף")
                should_click = true;
        }

        if (should_click) {
            var input = item.parentElement.parentElement.getElementsByTagName("input")[0];
            input.click();
        }
    }
}
