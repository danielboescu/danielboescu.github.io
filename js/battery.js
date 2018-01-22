var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".2"; 
//_______________________________________________###____________________________________________
navigator.getBattery().then(on_battery).catch(on_battery_error);


function on_battery(b)
{
document.getElementById("id_battery").innerHTML = b.level + " " + b.charging;	
	1
}
function on_battery_error()
{
	
	alert("cannot read battery!");
}