/**
 * Created by Kaiser on 16/6/7.
 */
function displayCitations() {
//      获取所有引用
    var quotes = document.getElementsByTagName('blockquote');
//      遍历引用
    for (var i = 0; i < quotes.length; i++) {
        var url = quotes[i].getAttribute('cite');
        if (!url) continue;
        var quoteChildren = quotes[i].getElementsByTagName('*');
        if (quoteChildren.length < 1) continue;
        var elem = quoteChildren[quoteChildren.length - 1];
        var links = document.createElement('a');
        var links_text = document.createTextNode('source');
        links.appendChild(links_text);

        links.setAttribute('href', url);
        links.setAttribute('title', url);
        links.setAttribute('target', '_blank');

        var superscript = document.createElement('sup');
        superscript.appendChild(links);
        elem.appendChild(superscript);
    }
}
addLoadEvent(displayCitations);
