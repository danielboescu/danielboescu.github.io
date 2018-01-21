var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 

var speech = new webkitSpeechRecognition();
speech.maxAlternatives = 5;
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
	for(var i= 0; i<speech.maxAlternatives; i++)
	{
	document.getElementById("id_speech").innerHTML+=e.results[0][i].transcript + " "  + e.results[0][i].confidence +"<br>";
	}
}