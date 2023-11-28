/* LAB 8-1 - FINAL COUNTDOWN!! */


//create page load listener
window.onload = pageReady;

//create page load function
function pageReady() {

	//create variables for required HTML elements
	var dateVar = new Date();
	console.log(dateVar);

	//var dueDateVar = new Date("November 6, 2023 18:00:00");
	var dueDateVar = new Date("December 15, 2022 18:00:00");
	
	//create variables for now date and due date
	var myDate;
	var dueDate;
	
	myDate= dateVar.toDateString();
	console.log(myDate)
	todayData.innerHTML=myDate;

	 dueDate= dueDateVar.toDateString();
	 console.log(dueDate);
	finalData.innerHTML= dueDate;
	//CONVERT TO UTC AND SUBTRACT TO GET TIME DIFFERENCE

	myDate=dateVar.getTime();
	dueDate=dueDateVar.getTime();

	var timeDiff = dueDate - myDate;
	console.log(timeDiff);
	var dayTillDueDate = timeDiff/86400000;
	var fullDays= Math.floor(dayTillDueDate);
	console.log(fullDays);

	dueData.innerHTML=fullDays;
	
	//CONVERT TIME DIFFERENCE TO WHOLE NUMBER OF DAYS

	if(myDate > dueDate){
		countMsg.innerHTML="The Deadline for the Final Assignment has passed!";
		//console.log(dueDate);
	}
	
	//OUTPUT NOW DATE & DUE DATE TO HTML PAGE
	
	
	//LOGIC TO CHECK IF DUE DATE HAS PASSED, AND OUPUT APPROPRIATE MESSAGE TO HTML PAGE
}