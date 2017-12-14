document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.14.0";

navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

//#########################################
function on_position_success(e)
{
	 document.getElementById("id_lat").innerHTML =e.coords.latitude;
	 document.getElementById("id_long").innerHTML =e.coords.longitude;
	
}
//#########################################
function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}