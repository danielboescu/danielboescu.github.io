var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".0"; 
//_______________________________________________###____________________________________________
var constraints=(audio:true,video:true);
navigator.MediaDevices.getUserMedia(constraints).then(on_cam()).catch(on_error());
var video = document.getElementById("id_video");

//^^^^^^^^^^^^^^^^6
function on_cam(stream)
{
	video.srObject=stream;
}
//^^^^^^^^^^^^^^^^6
function on_error(e)
{
	alert("ERROR!: cannot connect to camera!");
}
//^^^^^^^^^^^^^^^^6