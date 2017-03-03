/**
 * Created by Kaiser on 16/6/7.
 */

function displayAccessKeys() {
    var links = document.getElementsByTagName('a');
    var akeys = new Array();

    for (var i = 0; i < links.length; i++) {
        var current_link = links[i];
        var key = current_link.getAttribute('accesskey');
        var text = current_link.lastChild.nodeValue;

        if (!key) continue;
        current_link.setAttribute('target', '_blank');

        akeys[key] = text;

        console.log(key);
    }

    var list = document.createElement('ul');

    for (key in akeys) {
        var text = akeys[key];
        var str = key + ':' + text;

        var item = document.createElement('li');
        var item_text = document.createTextNode(str);
        item.appendChild(item_text);

        list.appendChild(item);
    }

    var header = document.createElement('h3');
    var header_text = document.createTextNode('Accesskeys');

    document.body.appendChild(header);
    document.body.appendChild(list);

}
addLoadEvent(displayAccessKeys);