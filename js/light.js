var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
//_______________________________________________###____________________________________________
var sensor = new AmbientLightSensor();
sensor.onreading = on_light_reading;
sensor.onerror = on_light_error;
sensor.start();

function on_light_reading()
{
	document.getElementById("id_light").innerHTML = sensor.illuminance;
}

funtion on_light_error()
{
	alert("canot read light sensor");
}
