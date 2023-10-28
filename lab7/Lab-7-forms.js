/* LAB 7 - SHIPPING FORM */
window.onload = pageReady;
function pageReady() {
	var formHandle = document.forms.form_ship;
	console.log(formHandle);
	formHandle.onsubmit= processForm;

	function processForm(){
		

		var nameValue = formHandle.f_Name;
		console.log(nameValue);

		var idValue = formHandle.f_Id;
		console.log(idValue);

		var delValue = formHandle.f_speed;
		console.log(delValue);

		var pCodeValue = formHandle.f_pc;
		console.log(pCodeValue);

		var nameInput=nameValue.value;
		var idInput =idValue.value;
		thanksCustomer.innerHTML=nameInput+"(#"+ idInput + ")";

		var delInput =delValue.options[delValue.selectedIndex].text;
		thanksSpeed.innerHTML = delInput;

		var costInput =delValue.value;
		thanksCost.innerHTML = costInput;

		var pCodeInput = pCodeValue.value;
		thanksPC.innerHTML = pCodeInput;

		if (delValue.value == 0 ){
			delValue.style.background = "red";
			delValue.focus();
			return false;
		}

		if (nameValue.value === "" ){
			nameValue.style.background = "red";
			nameValue.focus();
			return false;
		}
		 if (idValue.value === ""){
			idValue.style.background = "red";
			idValue.focus();
			return false;
		}
		 if (pCodeValue.value === ""){
			pCodeValue.style.background = "red";
			pCodeValue.focus();
			return false;
		}
	
		//else{
			formHandle.style.display = "none";
		thanks_msg.style.display = "block";
		//}


		return false;
	}

}


//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)
// var shipInfo = {
// 	cid: 0,
// 	name: "",
// 	pc: "",
// 	speed: "",
// 	cost: 0
// };



