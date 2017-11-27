document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.1";

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 100);
ctx.lineTo(120, 50);
ctx.closePath();
ctx.stroke();