 document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.04.16";
 //window.addEventListener("deviceorientation",on_device_orientation);// sa nu se deseneze de 2 ori cercul ---- Tot apare 
 window.addEventListener("devicemotion",on_device_motion);

 //---------------------------------------------------------------
 function deseneaza_cerc(u)
 {
	var canvas = document.getElementById("id_canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,400,400);
    //ctx.rect(0,0,400,400);
	//ctx.stroke();
	ctx.strokeRect(0,0,400,400);
	ctx.beginPath();
	ctx.arc(200 + u.beta*200/90,200 + u.gamma*200/90,20,0,2*Math.PI,true);
	ctx.fillStyle="#FF0000";//se umple cercul cu culoarea este rosu
	//ctx.fill();
	ctx.strokeStyle="#00FF00";
	ctx.lineWidth=5;
	ctx.stroke(); 
 }

 var unghiuri={gamma:0,beta:0};
 setInterval(deseneaza_cerc,40,unghiuri);
 //----------------------------------------------------------------
 function on_device_motion(e)
{
	 unghiuri.beta = - Math.atan(e.accelerationIncludingGravity.x/e.accelerationIncludingGravity.z)*180/Math.PI;
	 unghiuri.gamma = Math.atan(e.accelerationIncludingGravity.y/e.accelerationIncludingGravity.z)*180/Math.PI;
	
	//deseneaza_cerc(beta,gamma);  //nu mai am nevoie de a desena cercul pt ca apelez functia de setInterval
	
}
 //--------------------------------------------
 function on_device_orientation(e)
{
	deseneaza_cerc(e.gamma,e.beta);
	
}


//