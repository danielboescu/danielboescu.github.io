document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.27.2";

var canvas = document.getElementById("id_canvas");
var ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.arc(100,100,20,0,Math.PI/2,true);
ctx.stroke();