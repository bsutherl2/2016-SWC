var canvas = document.getElementById('canvas1');
var ctx = canvas.getContext('2d');


var getColor = function(hue, saturation, lightness, alpha) {
  var colorString = "hsla(" +
    hue + ", "
    + saturation + "%,"
    + lightness  + "%,"
    + alpha + ")";
  return colorString;
};

var random = 0;
var randomColor = 0;


for (var x = 50 ; x <= 950; x = x + 6) {
    random = Math.random() * 500;
    randomColor = Math.random() * 100
    var y = 100 + x/200*random

    randomColor =  Math.random() * 0;
    ctx.strokeStyle = getColor(randomColor,100,randomColor,0.8);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(5,y+450);
    ctx.stroke();
    ctx.lineWidth = x/(y*10.5);
}
