var ctx = document.getElementById('canvas').getContext('2d');
var draw = function(x, y) {
  ctx.fillStyle="#A9A9A9";
  ctx.fillRect(x,y,500,500);

};

var mouseMoveHandler = function(event) {
  draw(event.pageX,event.pageY)
  $('#mouseInfo').text(event.pageX);
};

document.addEventListener('mousemove', mouseMoveHandler);
