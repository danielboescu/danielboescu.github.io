var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".1"; 

var speech = new webkitSpeechRecognition();
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
	document.getElementById("id_speech")=e.results.item[0].item[0].transcript;
	
}