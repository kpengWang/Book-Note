/*
 * wong v0.0.1
 * By Kaiser, https://github.com/antaresWong
 * 2016/06/03
 */

// 兼容性检测事件
function supportBrowser() {
    var suportted = document.getElementsByTagName && document.getElementById;
    if (!suportted)  return false;
}

//这将把需要执行的函数创建为一个队列
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    }
    else {
        window.onload = function () {
            oldonload();
            func();
        }
    }
}

//  与inserBefore函数相反
function inserAfter(newElement, targetElement) {
    var parent = targetElement.parentNode;
    if (parent.lastChild == targetElement) {
        parent.appendChild(newElement);
    } else {
        parent.insertBefore(newElement, targetElement.nextSibling);
    }
}

//追加clasName
function addClass(element, value) {
    var newClassName;
    if (!element.className) {
        element.className = value;
    } else {
        newClassName = element.className;
        newClassName += '';
        newClassName += value;
        element.className = newClassName;
    }
}

//追加样式属性
function styleHeaderSiblings(tag, theClass) {
    var elems = document.getElementsByTagName(tag);
    var elem;
    for (var i = 0; i < elems.length; i++) {
        elem = getNextElement(elems[i].nextSibling);
        addClass(elem, theClass);
    }
}


//检测表单类型
function inputSupportsTyle(type) {
    if (!document.createElement) return false;

    var input = document.createElement('input');
    input.setAttribute('type', type);
    if (input.type == 'text' && type != 'text') {
        return false;
    }
    else {
        return true;
    }
}

//检测特定表单属性
function elementSupportsAttribute(elementName, attribute) {
    if (!document.createElement) return false;
    var temp = document.createElement(elementName);
    return (attribute in temp);
}

//placeHolder实现方法
