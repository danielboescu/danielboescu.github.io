document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.20.1";
window.addEventListener("deviceorientation",on_device_orientation);
window.addEventListener("devicemotion",on_device_motion);
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML ="z " + Math.round(e.alpha * 100)/100;
	document.getElementById("id_y").innerHTML ="y " + Math.round(e.gamma * 100)/100;
	document.getElementById("id_x").innerHTML ="x " + Math.round(e.beta * 100)/100;
}

function on_device_motion(e)
{
	document.getElementById("id_acc_x").innerHTML="acc x =" + Math.round(e.acceleration.x * 100)/100;
	document.getElementById("id_acc_y").innerHTML="acc y =" + Math.round(e.acceleration.y * 100)/100;
	document.getElementById("id_acc_z").innerHTML="acc z =" + Math.round(e.acceleration.z * 100)/100;
	
	document.getElementById("id_acc_g_x").innerHTML="acc g x =" + Math.round(e.accelerationIncludingGravity.x * 100)/100;
	document.getElementById("id_acc_g_y").innerHTML="acc g y =" + Math.round(e.accelerationIncludingGravity.y * 100)/100;
	document.getElementById("id_acc_g_z").innerHTML="acc g z =" + Math.round(e.accelerationIncludingGravity.z * 100)/100;
	var beta = Math.atan(e.accelerationIncludingGravity.x/e.accelerationIncludingGravity.z)*180/Math.PI;
	var gamma = Math.atan(e.accelerationIncludingGravity.y/e.accelerationIncludingGravity.z)*180/Math.PI;
	document.getElementById("id_rot_x").innerHTML="rot x =" + Math.round(beta* 100)/100;
	document.getElementById("id_rot_y").innerHTML="rot y =" + Math.round(gamma* 100)/100;
}