var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".5"; 
navigator.geolocation.getCurrentPosition(on_position_success,on_position_failure);

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
var speech = new webkitSpeechRecognition();
//speech.maxAlternatives = 5;
speech.onresult = on_speech_results;
speech.onspeechend = on_speech_end;
speech.lang="en-US";
//$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
function recognize()
{
	speech.start();
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
	on_position_success();
}
//#########################################

function on_position_success(e)
{  if(document.getElementById("id_speech").innerHTML="")
	{
	  var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=400x300"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  e.coords.latitude  + "," + e.coords.longitude 
	  ;
document.getElementById("id_img").src=map_str;
	}else{
		var map_str="https://maps.googleapis.com/maps/api/staticmap?center="+
	  e.coords.latitude + "," + e.coords.longitude + "&zoom=15"+"&size=400x300"+
"&key=AIzaSyDvoY0i_x0wXeE7vAOztYvmCzDIfEtzAR0"+
"&markers=color:blue|label:Z|"+
	  e.coords.latitude  + "," + e.coords.longitude + 
	  "&path=color:red|" + e.coords.latitude + "," + e.coords.longitude + "|" + document.getElementById("id_speech").innerHTML
	  ;
document.getElementById("id_img").src=map_str;
		
	}
}
//#########################################


function on_position_failure(e)
{
	
	alert("I'm lost!");
	
}
