var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
//_______________________________________________###____________________________________________
var image = document.getElementById("id_video");
image.addEventListener("touchstart",on_touch_img);
function on_touch_img(e){
window.navigator.vibrate(200);
}