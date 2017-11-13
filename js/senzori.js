//document.getElementById("id_x").innerHTML = "Salut";hghghgg
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML ="z " + e.alpha;
	document.getElementById("id_y").innerHTML ="y " + e.gamma;
	document.getElementById("id_x").innerHTML ="x " + e.beta;
}
window.addEventListener("deviceorientation",on_device_orientation);
