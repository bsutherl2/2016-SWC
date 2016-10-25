var myCanvas = document.getElementById('corpse');
var drawingPad = myCanvas.getContext('2d');
var circleDegrees = 2 * Math.PI;
var y0  = 0;
var y1 = 240;
var y2 = 480;
var height = y3 = 720;
var x0 = 0;
var x1 = 125; // left connection
var x2 = 275; // right connection
var width = x3 = 400;
var horizontalCenter = 200; // centerLine

var bsutherl2 = {};

var drawImage = function(filename, ctx, x, y) {
  var img = document.createElement("img");
  img.src = filename;
  img.addEventListener("load", function() {
    ctx.drawImage(img, x, y);
  });
}

bsutherl2.drawGrid = function(ctx) {
  ctx.beginPath();
  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x2,y0);
  ctx.lineTo(x2,y3);

  ctx.moveTo(x1,y0);
  ctx.lineTo(x1,y3);

  ctx.moveTo(x0,y1);
  ctx.lineTo(x3,y1);

  ctx.moveTo(x0,y2);
  ctx.lineTo(x3,y2);
  ctx.stroke();
}

bsutherl2.drawArm = function(ctx, left) {

};

bsutherl2.drawLeg = function(ctx, left) {

};


bsutherl2.drawTop = function(ctx) {

  drawImage('https://bsutherl2.github.io/2016-SWC/ps-06/head.jpg', ctx, 0, 0);
};

bsutherl2.drawMiddle = function(ctx) {
    drawImage('https://bsutherl2.github.io/2016-SWC/ps-06/body.jpg', ctx, 0, 240);


};

bsutherl2.drawBottom = function(ctx){
  drawImage('https://bsutherl2.github.io/2016-SWC/ps-06/legs.jpg', ctx, 0, 480);
};

bsutherl2.drawCorpse = function(ctx) {
  bsutherl2.drawTop(ctx);
  bsutherl2.drawMiddle(ctx);
  bsutherl2.drawBottom(ctx);
  bsutherl2.drawGrid(ctx);
};

window.bsutherl2 = bsutherl2;
