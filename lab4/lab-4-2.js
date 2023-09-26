//#### LAB 4 - FUNCTIONS ####
//PART 2:  AN AVERAGE FUNCTION
var htt5110=95;
var http5111=86;
var http5112=70;
var http5114=90;
var ixd5106=80;

//################## CREATE YOUR AVERAGE FUNCTION
//This function takes five numbers and returns their average to one decimal place.
function averageNumfun(num1,num2,num3,num4,num5){
    var totalAverage= (num1+num2+num3+num4+num5)/5;
    return totalAverage.toFixed(1);
}


//################## LOGIC THAT OUTPUTS MESSAGES BASED ON FUNCTION RESULTS
if(averageNumfun(htt5110,http5111,http5112,http5114,ixd5106)>=70)
{
    alert("You passed the course");
}
else{
    alert("Review required");
}
//var output= averageNumfun(5,10,15,20,25);
//console.log(output);