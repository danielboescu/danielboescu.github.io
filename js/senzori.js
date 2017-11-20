//document.getElementById("id_x").innerHTML = "Salut";hghghgg
window.addEventListener("deviceorientation",on_device_orientation);
window.addEventListener("devicemotion",on_device_motion);
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML ="z " + e.alpha;
	document.getElementById("id_y").innerHTML ="y " + e.gamma;
	document.getElementById("id_x").innerHTML ="x " + e.beta;
}

function on_device_motion(e)
{
	document.getElementById("id_acc_x").innerHTML="acc x =" + e.acceleration.x;
	document.getElementById("id_acc_y").innerHTML="acc y =" + e.acceleration.y;
	document.getElementById("id_acc_z").innerHTML="acc z ="+e.acceleration.z;
	document.getElementById("id_acc_g_x").innerHTML="acc g x ="+e.accelerationIncludingGravity.x;
	document.getElementById("id_acc_g_y").innerHTML="acc g y ="+e.accelerationIncludingGravity.y;
	document.getElementById("id_acc_g_z").innerHTML="acc g z ="+e.accelerationIncludingGravity.z;
}