/**
 * Created by Kaiser on 16/6/7.
 */

function displayAbbreviations() {
    // 获取所有缩略词
    var abbreviations = document.getElementsByTagName('abbr');
    if (abbreviations.length < 1) return false;
    var defs = new Array();
    // 遍历所有缩略词
    for (var i = 0; i < abbreviations.length; i++) {
        var current_abbr = abbreviations[i];
        // 在IE不支持abbr标签,所以返回一直会是0(平稳退化)
        if (current_abbr.childNodes.length < 1) continue;
        // 保存每个abbr元素的title属性
        var definition = current_abbr.getAttribute('title');
        //  保存每个abbr元素包含的文本
        var key = current_abbr.lastChild.nodeValue;

        defs[key] = definition;
        //          definition[abbreviations[i].lastChild.nodeValue] = abbreviations[i].getAttribute('title');
    }
    //      创建自定义列表
    var dlist = document.createElement('dl');

    //      遍历定义列表
    for (key in defs) {
        var definition = defs[key];

        //      创建自定义标题
        var dtitle = document.createElement('dt');
        var dtitle_text = document.createTextNode(key);
        dtitle.appendChild(dtitle_text);

        //      创建自定义描述
        var ddesc = document.createElement('dd');
        var ddesc_text = document.createTextNode(definition);
        ddesc.appendChild(ddesc_text);

        //      将标题和描述添加到定义列表
        dlist.appendChild(dtitle);
        dlist.appendChild(ddesc);
    }
    if (dlist.childNodes.length < 1) return false;
    //      创建标题
    var header = document.createElement('h2');
    var header_text = document.createTextNode('Abbreviations');
    header.appendChild(header_text);

    //      将标题和列表添加到body
    document.body.appendChild(header);
    document.body.appendChild(dlist);
}


addLoadEvent(displayAbbreviations);