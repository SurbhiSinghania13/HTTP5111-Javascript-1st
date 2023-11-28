//LAB 9-DATA STORAGE: INDEX PAGE
//window.onload
	window.onload = pageReady;

function pageReady() {
    var nameValue;
    var colorValue;
    var nameInput;
    var colorInput;

    //check for stored values
    
        //retrieve stored values
        var userName = localStorage.getItem("name")
        var userColor = localStorage.getItem("Color");

        //change welcome text to stored name
        var msgbox= document.getElementById("newMsgBox");
        //msgbox.innerHTML = "Welcome " + userName;


        if(userName){
            msgbox.innerHTML = "Welcome " + userName;

        }

        //change BG colour to stored colour
        document.body.style.background = userColor;

        


        var deleteButton= document.getElementById("btnDel");
        deleteButton.onclick= deletefunction;

        function deletefunction(){
            localStorage.clear();
            location.reload();
        }


		
//#####============== DO THIS PART FIRST! ===============		
    //get the form and set submit listener

	var formHandle = document.forms.infoForm;
	console.log(formHandle);
	formHandle.onsubmit= processForm;
	

	//onsubmit Function
    function processForm(){
       
    
        //get values from form
        nameValue = formHandle.f_name;

		colorValue = formHandle.f_color;
		
		//console.log the form values
        console.log(nameValue);
        console.log(colorValue);

        
        //store values
        nameInput=nameValue.value;
		colorInput =colorValue.value;
        localStorage.setItem("name",nameInput);
        localStorage.setItem("Color",colorInput);


       
        //location.reload();
        

        //return false;
        

    }
}
        
        



    