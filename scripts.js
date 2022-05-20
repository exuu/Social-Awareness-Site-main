var clickId=null;
function onClickTitle() {
var elem = document.getElementById("skBtn");
var width = document.querySelector('.skillButton').clientWidth;
clearInterval(clickId);
clickId = setInterval(frame,10);
function frame() {
if(width == 0) {
 clearInterval(clickId);
}
else {
width--;
elem.style.width = width.toString() + "px";
}
}
}