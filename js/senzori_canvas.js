 document.getElementById("id_business_version").innerHTML = "Business version = 2017.12.04.10";
 //window.addEventListener("deviceorientation",on_device_orientation);// sa nu se deseneze de 2 ori cercul ---- Tot apare 
 window.addEventListener("devicemotion",on_device_motion);

 //---------------------------------------------------------------
 function deseneaza_cerc()//(unghi1,unghi2)
 {
	var canvas = document.getElementById("id_canvas");
	var ctx = canvas.getContext("2d");
	ctx.clearRect(0,0,400,400);
    ctx.rect(0,0,400,400);
	ctx.stroke();
	ctx.beginPath();
	ctx.arc(200 + unghi1*200/90,200 + unghi2*200/90,20,0,2*Math.PI,true);
	ctx.fillStyle="#FF0000";//se umple cercul cu culoarea este rosu
	//ctx.fill();
	ctx.strokeStyle="#00FF00";
	ctx.lineWidth=5;
	ctx.stroke(); 
 }
 var gamma = 0;
 var beta = 0;
 setInterval(deseneaza_cerc,40);//,gamma,beta)
 //----------------------------------------------------------------
 function on_device_motion(e)
{
	 beta = - Math.atan(e.accelerationIncludingGravity.x/e.accelerationIncludingGravity.z)*180/Math.PI;
	 gamma = Math.atan(e.accelerationIncludingGravity.y/e.accelerationIncludingGravity.z)*180/Math.PI;
	
	//deseneaza_cerc(beta,gamma);  //nu mai am nevoie de a desena cercul pt ca apelez functia de setInterval
	
}
 //--------------------------------------------
 function on_device_orientation(e)
{
	deseneaza_cerc(e.gamma,e.beta);
	
}


//