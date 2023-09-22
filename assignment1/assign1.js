
//variable declaration
var teamnumber = 5;
var inputteam;

//popup box for asking user which team memeber they belong to 
inputteam = prompt("Which team number you belong to?");

//if condition to check inputteam is not a number
if (isNaN(inputteam)) {
    alert("Access denied!.. Sorry its not a number"); // a denied message when user enter not a number value

}

//else if condition to check inputteam is null or empty
else if (inputteam === "" || inputteam === null) {
    alert("Access denied!.. Sorry no team entered"); // a denied message when user enter null value or leaves empty
}

//else if condition to check inputteam value is equal to the teamnumber
else if (parseInt(inputteam) == teamnumber) {
    //popup box for asking user their firstname
    var firstname = prompt("Enter your first name");

    //if condition to check firstname is null or empty
    if (firstname === "" || firstname === null) {
        alert("Access denied!.. no name entered"); // a denied message when user enter null value or leaves empty
    }

    // else condition to check firstname matches to any of the teammembers using switch
    else {
        switch (firstname.toLowerCase()) {
            case "lovepreet":
                alert("Welcome " + firstname + " singh");
                break;
            case "saloni":
                alert("Welcome " + firstname + " pawar");
                break;
            case "khusi":
                alert("Welcome " + firstname + " patel");
                break;
            case "kyle":
                alert("Welcome " + firstname + " scott");
                break;
            default:
                alert("Access denied!.. Sorry You don't belong to this team"); // a denied message when user enter incorrect firstname  
                break;
        }
    }

}
// else condition runs when user enters invalid team number
else {
    alert("Access denied!.. Sorry Invalid team number"); // a denied message when user enter incorrect team number
}