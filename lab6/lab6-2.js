//#### LAB 6 - DOM MANIPULATION ####
//PART 2: MYSTERY BOX

//LISTEN FOR load EVENT
//alert("hy");
window.onload = pageReady;
function pageReady() {
	

	var mystervar = document.getElementById("mysteryBox");
	mystervar.onmouseover = fucntion1;

	var buttonvar = document.getElementById("buttonBox");
	buttonvar.onclick = function2;

	function fucntion1() {
		//alert("hy");
		var userChoice = window.confirm("Do you want to see something?");
		//return userChoice;
		if (userChoice === true) {
			mystervar.style.display = "none";
			buttonvar.style.display = "block";
		}

	}

	function function2() {
		buttonvar.style.width = "600px";
		buttonvar.innerHTML = "<h2>SURPRISE!!</h2>";
		buttonvar.style.background = "orange";
	}

}
//'WRAPPER' FUNCTION FOR DOM LOGIC

//GET DOM ELEMENTS WE'LL NEED


//====CREATE THE FUNCTIONS WE'LL NEED====
//FUNCTION TO ASK USER


//FUNCTION TO CHANGE buttonBox


//SETUP LISTENERS


//END onload FUNCTION