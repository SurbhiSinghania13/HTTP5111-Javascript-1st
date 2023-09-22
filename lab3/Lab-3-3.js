//LAB 3 - ARRAYS & LOOPS - PART 3

//PART 3 - SHOPPING CART SHIPPING
//==== VARIABLES ========
var price_arr=[];
//var price=0;
var total=0;
var intnumber;
var numbers;

//==== LOGIC ========
//CHECK FOR ITEMS UNTIL THRESHOLD IS MET.
while(total<35)
{
	 numbers=prompt("Enter the numbers");
	 intnumber=parseInt(numbers);
     total=intnumber + total;
     price_arr.push(intnumber);
	//console.log(price);
	//price++; 
	//total_price[price].	
}
alert("Your shipping for this order will be free!");
console.log("Item prices" + price_arr.join(" | "));
alert("total value of the purchases is "+ total);

// for(var i=1;i<=total_price.length;i++)
// {
// 	alert("Item prices:" + total_price )
//     //console.log("is # " + i + " "+ team_member[i]);

// }



// for(var i=0;i<35;i++)
// {
// 	
// }
	//GET ITEM COST FROM USER
	
	
	//CONVERT USER INPUT TO A NUMBER
	
	
	//ADD ITEM COST TO RUNNING TOTAL VARIABLE
	
	
	//PUSH ITEM COST TO CART ARRAY
	
	
	


//SEND POPUP MESSAGE TO USER


//SEND OUTPUT TO CONSOLE

