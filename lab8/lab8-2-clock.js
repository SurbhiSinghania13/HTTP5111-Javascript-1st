/* LAB 8.2 - STOP TIME */


//create page load listener
window.onload = pageReady;

//create page load function
function pageReady() {

	//create variables for required HTML elements
	var btn = document.getElementById("btnStart");
	var btn2 = document.getElementById("btnStop");
	
	//create time variable so all functions have access to it
	var hours;
	var minutes ;
	var seconds ;
	var ticktock;

	//CREATE FUNCTION THAT DISPLAYS THE TIME
	function displayTime(){
		dateVar = new Date();
		hours= dateVar.getHours();
		 minutes = dateVar.getMinutes();
		seconds = dateVar.getSeconds();
		hoursOut.innerHTML= hours + ":";
		minsOut.innerHTML=minutes.toString().padStart(2,'0')+":";
		secsOut.innerHTML=seconds.toString().padStart(2,'0');
		
	}

	//CREATE FUNCTION TO START THE CLOCK.
	function startCLock(){
		ticktock =   setInterval(displayTime,1000);
		
	}	

	//CREATE FUNCTION TO STOP THE CLOCK
	function stopClock(){
			clearInterval(ticktock);	
	}

	// SET EVENT LISTENERS
	btn.onclick = startCLock;
	btn2.onclick=stopClock;
}