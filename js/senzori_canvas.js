 document.getElementById("id_business_version").innerHTML = "Business version = 2017.11.20.0";
 window.addEventListener("deviceorientation",on_device_orientation);

 //---------------------------------------------------------------
 function deseneaza_cerc(unghi1,unghi2)
 {
	var canvas = document.getElementById("id_canvas");
	var ctx = canvas.getContext("2d");

	ctx.beginPath();
	ctx.arc(200 + unghi1*200/90,200 + unghi2*200/90,20,0,2*Math.PI,true);
	ctx.fillStyle="#FF0000";//se umple cercul cu culoarea este rosu
	ctx.fill();
	ctx.strokeStyle="#00FF00";
	ctx.lineWidth=5;
	ctx.stroke(); 
 }
 
 //--------------------------------------------
 function on_device_orientation(e)
{
	deseneaza_cerc(e.beta,e.gamma);
}


//