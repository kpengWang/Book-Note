/**
 * Created by Kaiser on 16/6/6.
 */

function getNewContent() {
  var request = getHTTPObject();
  if (request) {
    request.open('get', 'example.txt', true);
    request.onreadystatechange = function () {
      //处理响应
      if (request.readyState == 4) {
        var para = document.createElement('p');
        var txt = document.createTextNode(request.responseText);
        para.appendChild(txt);
        document.getElementById('new').appendChild(para);
      }
    };
    request.send(null);
  } else {
    alert("sorry, your browser dosen\'t support XMLHttpRequest");
  }
  alert('Function Done');
}
addLoadEvent(getNewContent);