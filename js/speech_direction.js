var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".11"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

var speech = new webkitSpeechRecognition();
var lat ;
var lon ; 
speech.onresult = on_speech_results;
speech.onspeechend = on_speech_end;
speech.lang="en-US";

//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function recognize()
{
	if(speech.start())
	{}//rezolvare eroare incercare multipla de pornire speech recognition
}

//####################################################

function on_speech_end()
{
		speech.stop();
	
}
//####################################################
function on_speech_results(e)
{
	document.getElementById("id_speech").innerHTML=e.results[0][0].transcript;
	line(); // functia care traseaza linia
}
//#########################################

function on_position_success(e) // functia care prezinta locatia utilizatorului
{ 
	lat = e.coords.latitude;
	lon = e.coords.longitude;

	  var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=600x500"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  e.coords.latitude  + "," + e.coords.longitude 
	  ;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_img").innerHTML="Afisarea locatiei utilizatorului.";
	
}
//#########################################
function line(e)
{
		var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  lat + "," + lon + "&zoom=15"+"&size=600x500"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  lat  + "," + lon + 
	  "&path=color:red|" + lat + "," + lon + "|" + document.getElementById("id_speech").innerHTML
	  ;
	document.getElementById("id_img").src=map_str;
	document.getElementById("id_img").innerHTML="Trasarea liniei de conectare intre pozitia curentare si cea recunoscuta";
		
	
}

function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}
