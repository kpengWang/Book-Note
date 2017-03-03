/**
 * Created by Kaiser on 16/6/14.
 */

function prepareSlideShow() {
    var preview = document.getElementById('preview');

    var list = document.getElementById('linkList');
    var links = list.getElementsByTagName('a');

    //为链接元素的onmouseover事件添加动画效果

    links[0].onmouseover = function () {
        moveElement('preview', -100, 0, 10);
    }
    links[1].onmouseover = function () {
        moveElement('preview', -200, 0, 10);
    }
    links[2].onmouseover = function () {
        moveElement('preview', -300, 0, 10);
    }

    list.onmouseout = function () {
        moveElement('preview', 0, 0, 10);
    }


}