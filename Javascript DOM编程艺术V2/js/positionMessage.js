/**
 * Created by Kaiser on 16/6/13.
 */

addLoadEvent(positionMessage);

function positionMessage() {

    //方形元素动画
    var elem = document.getElementById('message');
    elem.style.position = 'absolute';
    elem.style.left = '10px';
    elem.style.top = '10px';
    moveElement('message', 125, 25, 20);

    //圆形元素动画
    var elem = document.getElementById('message2');
    elem.style.position = 'absolute';
    elem.style.left = '120px';
    elem.style.top = '120px';
    moveElement('message2', 200, 300, 15);


}
