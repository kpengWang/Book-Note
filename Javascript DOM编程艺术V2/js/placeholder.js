
addLoadEvent(preparePlaceholder);
addLoadEvent(prepareGallery);

// 点击事件
function preparePlaceholder() {
    if (!supportBrowser)  return false;
//  创建图片元素节点
    var placeHolder = document.createElement('img');
//  创建文本元素节点
    var description = document.createElement('p');
//  创建文字内容
    var desctext = document.createTextNode('Choose an image');
//  获取容器ID
    var gallery = document.getElementById('imagegallery');
//  给图片元素创建id属性
    placeHolder.setAttribute('id', 'placeholder');
//  给图片元素创建相对路径
    placeHolder.setAttribute('src', '../images/placeholder.gif');
//  给图片元素创建说明属性
    placeHolder.setAttribute('alt', 'my image gallery');
//  给文本元素创建id属性
    description.setAttribute('id', 'description');
//  给文本元素创建id属性
    description.appendChild(desctext);
//  将图片节点后置于容器之后
    inserAfter(placeHolder, gallery);
//  将文本节点后置于图片之后
    inserAfter(description, placeHolder);
}


//遍历节点
function prepareGallery() {
    if (!supportBrowser)  return false;
    var gallery = document.getElementById('imagegallery');
    var links = gallery.getElementsByTagName('a');
    for (var i = 0; i < links.length; i++) {
        links[i].onclick = function () {
            return showPic(this);
        }
        links[i].onkeypress = links[i].onclick;
    }
}


// 图文替换事件
function showPic(whichPic) {
    if (!supportBrowser)  return false;
    var source = whichPic.getAttribute('href');
    var placeholder = document.getElementById('placeholder');
    var description = document.getElementById('description');
//  判断占位符标签是不是图片
    if (placeholder.nodeName != 'IMG') return false;
    placeholder.src = source;

    if (whichPic.getAttribute('title')) {
        var text = whichPic.getAttribute('title');
    } else {
        var text = '';
    }

    if (description.firstChild.nodeType == 3) {
        description.firstChild.nodeValue = text;
    }
    return false;
}


