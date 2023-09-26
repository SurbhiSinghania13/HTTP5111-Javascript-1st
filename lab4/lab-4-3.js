//#### LAB 4 - FUNCTIONS ####
//PART 3:  WALKING THE DOG 


//################## CREATE YOUR checkTemp FUNCTION
//This function will check the current temperature and return true or false
function checkTemp(currentTemp){
    if(currentTemp>30 || currentTemp<-10){
        return false;
    }
    else{
        return true;
    }

}
//It expects to receive a temperature value in the prompt box
//It will return false if user input temperature greater than 30 or less than -10, otherwise true



//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
var askcurrentTemp = prompt("What is the current Temperature");
if(checkTemp(askcurrentTemp)==false){
    alert("Yikes!Too hot/cold for dog walking")
}
else{
    alert("You're good,have a nice walk");
}