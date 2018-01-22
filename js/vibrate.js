var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".2"; 
//_______________________________________________###____________________________________________
var image = document.getElementById("id_img");
image.addEventListener("touchstart",on_touch_start);
image.addEventListener("touchend",on_touch_end);

function on_touch_start(e)
{
setInterval(start_vibrate,100);

}
function start_vibrate()
{
	
	window.navigator.vibrate(100);
}