var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".5"; 
//_______________________________________________###____________________________________________
var image = document.getElementById("id_img");
image.addEventListener("touchstart",on_touch_start);
image.addEventListener("touchend",on_touch_end);

function on_touch_start(e)
{
	e.preventDefault();
timer_id = setInterval(start_vibrate,100);

}
function start_vibrate()
{
	
	window.navigator.vibrate(150);
}
function on_touch_end(e)
{
	e.preventDefault();
	clearInterval(timer_id);
}