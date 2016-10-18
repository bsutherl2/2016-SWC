var canvas = document.getElementById('canvas');
var drawingPad = canvas.getContext('2d');
drawingPad.fillStyle = "hsla(0,10%,10%,1)";
console.log("test");
for (var x = 0 ; x <= 800; x++) {
for (var y = 0 ; y <= 800; y++) {
drawingPad.fillStyle = "hsla(0,100%,0%,1)";
drawingPad.fillRect(x*10, y*10, 1, 1);
}
}

for (var x = 10 ; x <= 800; x++) {
for (var y = 10 ; y <= 800; y++) {
drawingPad.fillStyle = "hsla(0,100%,100%,0.5)";
drawingPad.fillRect(x*20, y*20, 4, 4);
}
}
