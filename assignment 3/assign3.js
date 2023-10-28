
var cooking={          // Object creation
    incredients:5,     
    utensils:2,
    technique:"baking",
    cuisine:"indian",    // four properties of cooking
    update_value:function(value){  // a function named "updated_value" of cooking object
        this.incredients=value;    // updating the value of incredients through the function calling
        alert("The updated incredients value are : " + this.incredients);   // popup to the screen showing updated incredients
    }
}
console.log(cooking);   // output to the console of cooking object

var ask_utensils=prompt("Enter the utensils you require","2");  // prompt to user to ask utensils they need
cooking.utensils= parseInt(ask_utensils);  // updating the value of utensils through the user input
console.log("The updated utensils are: "+cooking.utensils);  // output to the console showing updated utensils

var ask_technique=prompt("Enter the technique you require","baking");  // prompt to user to ask technique they require
cooking.technique= ask_technique;   // updating the value of technique through the user input
console.log("The updated technique are: "+cooking.technique);  // output to the console showing updated technique

cooking.update_value(6);  // calling function by passing the parameter(incredients) 

console.log(cooking);   // output to the console of cooking object