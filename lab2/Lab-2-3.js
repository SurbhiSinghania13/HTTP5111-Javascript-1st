//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE
//==== VARIABLES =========



//==== LOGIC =============
var input=confirm("Do you want to join my mailing list");

if(input===true)
{
    var email=prompt("Enter your email","me@example.com");
    if(email === "" || email === null || email === "me@example.com")
    {
        alert("Thank you, but your email was not valid.");
    }
    else
    {
        alert("Thank you,our next newsletter will be sent to " + email);
    }
}
else
{
    alert("Thank you,we will not bother you again");
}
