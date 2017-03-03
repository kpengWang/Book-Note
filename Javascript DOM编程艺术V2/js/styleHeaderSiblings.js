/**
 * Created by Kaiser on 16/6/8.
 */
addLoadEvent(styleHeaderSiblings);


//根据元素在节点树里的未知设置样式
function styleHeaderSiblings() {
    var headers = document.getElementsByTagName('h1');
    var elem;
    for (var i = 0; i < headers.length; i++) {
        elem = getNextElement(headers[i].nextSibling);
        elem.style.fontWeight = 'bold';
        elem.style.fontSize = '0.8em';
        elem.style.color='#fff';
    }
}

function getNextElement(node) {
    if (node.nodeType == 1) {
        return node;
    }
    if (node.nextSibling) {
        return getNextElement(node.nextSibling);
    }
    return null;
}
