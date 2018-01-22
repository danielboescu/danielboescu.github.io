var d = new Date();
document.getElementById("id_business_version").innerHTML = "Business version = " + d.getFullYear() + "." + (d.getMonth()+1) + "." + d.getDate() + ".1"; 
//_______________________________________________###____________________________________________
var constraints={audio: true,video: { facingMode: { exact: "environment" } }};
navigator.mediaDevices.getUserMedia(constraints).then(on_cam).catch(on_error);
var video = document.getElementById("id_video");

//^^^^^^^^^^^^^^^^
function on_cam(stream)
{
	video.srcObject=stream;
}
//^^^^^^^^^^^^^^^^6
function on_error(e)
{
	alert("ERROR!: cannot connect to camera!");
}
//^^^^^^^^^^^^^^^^6