document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.14.4";


var canvas = document.getElementById("id_canvas");
var context = canvas.getContext("2d");
var lista_culori=["#FF0000","#00FF00","#0000FF","#FFFF00","#FF00FF"];
canvas.addEventListener("touchstart",on_start_touch);
canvas.addEventListener("touchmove",on_move_touch);
//---------------------------------------
function on_start_touch(e)
{
var atingere = e.touches;
for(var i=0; i<atingere.length; i++)
{
	context.beginPath();
	context.arc(atingere.item(i).pageX,atingere.item(i).pageY,20,0,2*Math.PI);
	context.strokeStyle=lista_culori[i];
	context.lineWidth=5;
	context.stroke(); 
}
	
}
//---------------------------------------
function on_move_touch(e)
{
var atingere = e.touches;
for(var i=0; i<atingere.length; i++)
{
	context.beginPath();
	context.arc(atingere.item(i).pageX,atingere.item(i).pageY,20,0,2*Math.PI);
	context.strokeStyle=lista_culori[i];
	context.lineWidth=5;
	context.stroke(); 
}
	
}
//---------------------------------------