var ctx = document.getElementById("walk").getContext('2d');

var beginX = 200;
var beginY = 200;

var clearScreen = function() {
  ctx.fillStyle = "hsla(0,10%,100%,0.6)";
  ctx.fillRect(0,0,600,600)
};
var drawDot = function (x, y) {
  clearScreen();
  var size = 100;
  ctx.fillStyle = "DarkGray"
  ctx.strokeStyle = ''
  ctx.beginPath();
  ctx.arc(beginX,beginY,10,0,2*Math.PI);
  beginX = beginX + 50;
  if(beginX > 500) {
    beginX = 0;
    beginY = beginY + 50;
  }
  if (beginY > 500) {
    beginY = 0;
  }
  ctx.fill();
};

setInterval(drawDot, 100);
