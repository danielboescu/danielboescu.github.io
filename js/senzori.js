//document.getElementById("id_x").innerHTML = "Salut";
function on_device_orientation(e)
{
	document.getElementById("id_z").innerHTML = e.alpha;
	document.getElementById("id_y").innerHTML = e.gama;
	document.getElementById("id_x").innerHTML = e.beta;
}
window.addEventListener("deviceorientation",on_device_orientation);
