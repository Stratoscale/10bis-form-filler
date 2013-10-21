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

        var parenthesis = content.indexOf("(");
        if (parenthesis != -1) {
                content = content.substring(0, parenthesis);
        }

        content = $.trim(content);

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
                content === "נבטים" ||
                maybe(content === "קרוטונים", 0.5) ||
                content === "תיבול בזיליקום")
                should_click = true;
        }

        if (personName === "Maor Vanmak") {
            if (content === "חסה" ||
                content === "מלפפון חמוץ" ||
                content === "פלפל אדום" ||
                content === "עגבניות שרי" ||
                content === "עגבניה"||
                content === "תירס" ||
                content === "תיבול לימון" ||
                content === "גרעיני חמנייה" ||
                content === "זיתים שחורים"||
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
                content === "כדורי מוצרלה" ||
                content === "זעתר" ||
                content === "ויניגרט הדרים" ||
                content === "תיבול זעתר" ||
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
                content === "ביצה קשה" ||
                content === "תיבול שמן זית" ||
                content === "עשבי תיבול"
                )
                should_click = true;
        }

        if (personName === "ליעז קמפר ") { // the space there is intentional
            if (content === "עגבניה" ||
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

        if (personName === "דורון גיל") {
            if (content === "מלפפון" ||
                content === "גזר" ||
                content === "תירס" ||
                content === "כרוב אדום" ||
                content === "כרוב לבן" ||
                content === "נבטים" ||
                content === "נבטי חמנייה" ||
                content === "שעועית ירוקה" ||
                content === "מלפפון חמוץ" ||
                content === "חמוציות" ||
                content === "עגבניות שרי" ||
                content === "פטריות" ||
                content === "זיתים שחורים" ||
                content === "גרעיני חומוס" ||
                content === "גרעיני חמנייה" ||
                content === "גבינת עיזים" ||
                content === "טונה" ||
                content === "תיבול לימון" ||
                content === "וינגריט בלסמי")
                should_click = true;
        }

        if (personName === "חן שמלה"  ||
            personName === "איתי בוגנר") {
            if (content === "מלפפון" ||
                content === "גזר" ||
                content === "אפונה ירוקה" ||
                content === "תירס" ||
                content === "פלפל צהוב קלוי בתנור" ||
                content === "פלפל אדום" ||
                content === "תפוח אדמה" ||
                content === "קרוטונים" ||
                content === "עגבניות שרי" ||
                content === "קישואים בתנור" ||
                content === "ביצה קשה" ||
                content === "פטרוזיליה" ||
                content === "תיבול לימון" ||
                content === "טחינה" ||
                content === "חרדל ודבש")
                should_click = true;
        }

        if (personName === "סימון גרינברג") {
            if (content === "עלי בייבי" ||
                content === "מלפפון" ||
                content === "פלפל אדום" ||
                content === "פלפל ירוק" ||
                content === "נבטי חמנייה" ||
                content === "אפונה ירוקה" ||
                content === "סלק אדום מגורד" ||
                content === "עדשים שחורים" ||
                content === "עגבניות שרי" ||
                content === "גרעיני חומוס" ||
                content === "עירית" ||
                content === "פטרוזיליה" ||
                content === "כדורי מוצרלה" ||
                content === "תיבול בזיליקום" ||
                content === "איטלקי חריף"
               )
                should_click = true;
        }

        if (personName === "זיוון עורי") {
            if (content === "חסה" ||
                content === "מלפפון" ||
                content === "עגבניה" ||
                content === "עלי בייבי" ||
                content === "פלפל אדום" ||
                content === "נבטים" ||
                content === "סלק אדום מגורד" ||
                content === "עדשים שחורים" ||
                content === "תפוח אדמה" ||
                content === "שעועית ירוקה" ||
                content === "בצל ירוק" ||
                content === "פטריות" ||
                content === "גרעיני חמנייה" ||
                content === "נבטי חמנייה" ||

                content === "בורגול" ||
                content === "גבינת עיזים" ||

                content === "תיבול שמן זית" ||
                content === "וינגריט בלסמי" ||
                content === "איטלקי חריף"
                // Unsupported yet: content === "פריגת תפוזים" ||
               )
                should_click = true;
        }

        if (personName === "פבל פוקס") {
            if (content === "חסה" ||
                content === "עלי בייבי" ||
                content === "עגבניה" ||
                content === "גזר" ||
                content === "פסטה" ||
                content === "תירס" ||
                content === "פלפל אדום" ||
                content === "נבטים" ||
                content === "נבטי חמנייה" ||
                content === "בצל סגול" ||
                content === "עגבניות שרי" ||
                content === "חציל בתנור" ||
                content === "גרעיני חמנייה" ||
                content === "עירית" ||
                content === "בצל ירוק" ||
                content === "פטרוזיליה" ||
                content === "בולגרית" ||
                content === "תיבול זעתר" ||
                content === "וינגריט בלסמי"
               )
                should_click = true;
        }

        if (should_click) {
            var input = item.parentElement.parentElement.getElementsByTagName("input")[0];
            input.click();
        }
    }
}
