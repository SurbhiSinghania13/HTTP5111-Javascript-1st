//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		var username="dart";
		// Correct password
		var password="vader";
		// user name input
		
		// password input
	




//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
var inputname=prompt("Enter your name");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(inputname);

//5. CREATE POPUP BOX FOR PASSWORD
var inputpwd=prompt("Enter your password");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(inputpwd);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(inputname===username && inputpwd===password)
{
	alert("Welcome back " + username );
	console.log("Login successfull");
}
else{
	alert("Invalid username/password");
	console.log("Login Fail");

}

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE



//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE