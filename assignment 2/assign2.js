//alert("hi");
var movie1="abc";
var movie2="def";
var movie3="ghi";
var movie4="jkl";
var movie5="mno";
var movie6="pqr";
var movie7="stu";

//var movie_ask;

var movie_arr=[movie1,movie2,movie3,movie4,movie5,movie6,movie7];
console.log(movie_arr);


while (true) {
    var userInput = prompt("Which top 7 movie would you like?"," Pick a number: 1-7");
    var userChoice = parseInt(userInput);

    if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= 7) {
        alert("Number " + userChoice + " on the list is: " + movie_arr[userChoice - 1]);
        break; // Exit the loop when valid input is provided
    } else {
        alert("Please enter a number between 1 and 7!");
    }
}
for(var i=0;i<movie_arr.length;i++)
{
    console.log("Movie "+(i+1)+": "+movie_arr[i]);
}


