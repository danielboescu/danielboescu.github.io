document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.0";

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
//ctx.moveTo(50, 50);
ctx.lineTo(100, 100);
ctx.stroke();