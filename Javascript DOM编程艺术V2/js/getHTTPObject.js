/**
 * Created by Kaiser on 16/6/6.
 */

//兼容所有浏览器
function getHTTPObject() {
  if (typeof XMLHttpRequest == 'undefined')
    XMLHttpRequest = function () {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.6.0');
      }
      catch (e) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP.3.0');
      }
      catch (e) {
      }
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      }
      catch (e) {
      }
      return false;
    }
  return new XMLHttpRequest();
}