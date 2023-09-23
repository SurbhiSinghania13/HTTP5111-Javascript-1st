//variable declaration
var movie1="Harry Potter";
var movie2="Money Heist";
var movie3="Manifest";
var movie4="The Haunted House";
var movie5="Titanic";
var movie6="The Dark Knight";
var movie7="Forrest Gump";

var movie_ask;
var movie_arr;


//array that contains all the variables of movie names
movie_arr=[movie1,movie2,movie3,movie4,movie5,movie6,movie7];
console.log(movie_arr); //displaying all movies on console

//loop to re-ask the user if they didn't input valid data
while (true) {
    movie_ask = prompt("Which top 7 movie would you like?"," Pick a number: 1-7"); //popup to ask user a movie number they like
    var userChoice = parseInt(movie_ask); // converting the userinput into integer

    if (!isNaN(userChoice) && userChoice >= 1 && userChoice <= 7) {  //if condition to validate the user input
        alert("Number " + userChoice + " on the list is: " + movie_arr[userChoice - 1]); // output containing exact userinput number with matching movie name
        break; // Exit the loop when valid input is provided
    } else { 
        alert("Please enter a number between 1 and 7!"); // this runs if user enter anything rather than a number between 1-7
    }
}

//for loop which go through the array elememts of movies
for(var i=0;i<movie_arr.length;i++)
{
    console.log("Movie "+(i+1)+": "+movie_arr[i]); // output which display movie names with exact number in every new line
}


