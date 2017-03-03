/**
 * Created by Kaiser on 16/6/14.
 */

function createVideoControls() {
    //找到所有video元素,然后对它们分别使用addControls函数
    var vids = document.getElementsByTagName('video');
    for (var i = 0; i < vids.length; i++) {
        addControls(vids[i]);
    }
}

function addControls(vid) {
    //清除掉原生controls内置控件
    vid.removeAttribute('controls');


    vid.height = vid.videoHeight;
    vid.width = vid.videoWidth;

    vid.parentNode.style.height = vid.videoHeight + 'px';
    vid.parentNode.style.width = vid.videoWidth + 'px';

    //自定义几个DOM对象充当play/pause按钮
    var controls = document.createElement('div');
    controls.setAttribute('class', 'controls');

    var play = document.createElement('button');
    play.setAttribute('title', 'play');
    play.innerHTML = '&#x25BA';
    //play.innerHTML = 'PLAY';

    controls.appendChild(play);

    vid.parentNode.insertBefore(controls, vid);

    //单击播放影片
    play.onclick = function () {
        if (vid.ended) {
            vid.currentTime = 0;
        }
        if (vid.paused) {
            vid.play();
        } else {
            vid.pause();
        }
    };


    //利用play,pause和ended事件来修改Play按钮状态,默认是暂停状态
    vid.addEventListener('play', function () {
        play.innerHTML = '&#x2590;&#x2590;';
        //play.innerHTML = 'PAUSE';
        play.setAttribute('paused', true);
    }, false);

    vid.addEventListener('pause', function () {
        play.removeAttribute('paused');
        play.innerHTML = '&#x25BA';
        //play.innerHTML = 'PLAY';
    }, false);

    vid.addEventListener('ended', function () {
        vid.pause();
    }, false);
}
window.onload = function () {
    createVideoControls();
}