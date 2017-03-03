//全局可以让定时器清除干净,配合递归(放在函数内)
var animationElem = 0;


function moveElement(elementID, final_x, final_y, interval) {
    //var movement;
    var elem = document.getElementById(elementID);

    //清除动作
    clearTimeout(animationElem);

    //防止未设置默认位置
    if (!elem.style.top) {
        elem.style.top = '0px'
    }
    if (!elem.style.left) {
        elem.style.left = '0px'
    }

    if (!elem.style.top || !elem.style.left) {
        return false;
    }
    var xpos = parseInt(elem.style.left);
    var ypos = parseInt(elem.style.top);
    var dist = 0;

    if (xpos == final_x && ypos == final_y) return true;

    //离得越远,动画移动越快
    if (xpos < final_x) {
        dist = Math.ceil((final_x - xpos) / 10);
        xpos = xpos + dist;
    }
    if (xpos > final_x) {
        dist = Math.ceil((xpos - final_x) / 10);
        xpos = xpos - dist;
    }
    if (ypos < final_y) {
        dist = Math.ceil((final_y - ypos) / 10);
        ypos = ypos + dist;
    }
    if (ypos > final_y) {
        dist = Math.ceil((ypos - final_y) / 10);
        ypos = ypos - dist;
    }
    elem.style.left = xpos + 'px';
    elem.style.top = ypos + 'px';
    animationElem = setTimeout(function () {
        moveElement(elementID, final_x, final_y, interval)
    }, interval)
}