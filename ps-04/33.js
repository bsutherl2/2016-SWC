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

var random = 30;
var randomColor = 0;


for (var x = 40 ; x <= 396; x = x + 11) {
    random = Math.random() * 200;
    randomColor = Math.random() * 100
    var y = 10 + x/500*random

    randomColor =  Math.random() * 0;
    ctx.strokeStyle = getColor(randomColor,50,randomColor,0.8);
    ctx.beginPath();
    ctx.moveTo(x,y);
    ctx.lineTo(10,y+350);
    ctx.stroke();
    ctx.lineWidth = x/(y*10.5);
}
