var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 

document.addEventListener("touchstart",speak);

var synth= window.speechSynthesis;

//_____________________________%%%%%_________________
function on_get_voices()
{
	var voci= synth.getVoices();

	for(i=0;i<voci.length;i++)
	{
		document.getElementById("id_voices").innerHTML += voci[i] + " " + voci[i].name +"<br>";
	}
	
}