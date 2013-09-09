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

// Are you tired of eating the exact same salad every time? SALVATION!
function maybe(flag, probability) {
    return (Math.random() < probability) && flag;
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
                content === "וינגריט בלסמי" ||
                content === "איטלקי חריף")
                should_click = true;
        }

        if (personName === "Lior Segev") {
            if (content === "חסה" ||
                content === "עלי בייבי" ||
                content === "גזר" ||
                content === "תירס" ||
                content === "פלפל צהוב קלוי בתנור" ||
                content === "אפונה ירוקה" ||
                content === "עדשים שחורים" ||
                content === "חציל בתנור" ||
                content === "גרעיני חומוס" ||
                content === "קישואים בתנור" ||
                content === "עירית" ||
                content === "תיבול לימון" ||
                content === "טחינה")
                should_click = true;
        }

        if (personName === "Shahar Lev") {
            if (content === "עגבניה" ||
                content === "מלפפון" ||
                content === "חמוציות" ||
                content === "זיתים שחורים" ||
                maybe(content === "קרוטונים", 0.5) ||
                content === "תיבול בזיליקום")
                should_click = true;
        }

        if (personName === "Maor Vanmak") {
            if (content === "חסה" ||
                content === "עלי בייבי" ||
                content === "עזר" ||
                content === "פלפל אדום" ||
                content === "עגבניות שרי" ||
                content === "גרעיני חמנייה" ||
                content === "תיבול לימון" ||
                content === "טחינה" ||
                content === "איטלקי חריף")
                should_click = true;
        }

        if (personName === "אריאל מייסלוס") {
            if (content === "עלי בייבי" ||
                content === "תירס" ||
                content === "נבטים" ||
                content === "נבטי חמנייה" ||
                content === "אפונה ירוקה" ||
                content === "שעועית ירוקה" ||
                content === "בצל סגול" ||
                content === "סלק אדום מגורד" ||
                content === "עגבניות שרי" ||
                content === "חציל בתנור" ||
                content === "פטריות" ||
                content === "קישואים בתנור" ||
                content === "עלי בייבי" ||
                content === "כדורי מוצרלה (₪ 3.00)" ||
                content === "זעתר" ||
                content === "ויניגרט הדרים" ||
                content === "טחינה")
                should_click = true;
        }

        if (personName === "רותם דפני") {
            if (content === "מלפפון" ||
                content === "גזר" ||
                content === "תירס" ||
                content === "כרוב לבן" ||
                content === "פלפל אדום" ||
                content === "נבטי חמנייה" ||
                content === "בצל סגול" ||
                content === "מלפפון חמוץ" ||
                content === "עגבניות שרי" ||
                content === "זיתים ירוקים" ||
                content === "ביצה קשה (₪ 3.00)" ||
                content === "תיבול שמן זית" ||
                content === "עשבי תיבול"
                )
                should_click = true;
        }

        if (personName === "ליעז קמפר") {
            if (content === "עגבניות" ||
                content === "תירס" ||
                content === "נבטים" ||
                content === "אפונה ירוקה" ||
                content === "שעועית ירוקה" ||
                content === "סלק אדום מגורד" ||
                content === "עגבניות שרי" ||
                content === "חציל בתנור" ||
                content === "פלפל אדום" ||
                content === "מלפפון" ||
                content === "גזר" ||
                content === "פטריות" ||
                content === "כרוב לבן" ||
                content === "קישואים בתנור" ||
                content === "טחינה")
                should_click = true;
        }


        if (should_click) {
            var input = item.parentElement.parentElement.getElementsByTagName("input")[0];
            input.click();
        }
    }
}
