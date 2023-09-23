# HTTP5111-Javascript-1st

![banner](img/javascript-img.png)

A repo of course 5111 which contains the code of javascript.

- [Repo Link](https://github.com/SurbhiSinghania13/HTTP5111-Javascript-1st)

- Samples of code
  
  ```
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
