//LAB 9-DATA STORAGE: PRODUCTS PAGE
window.onload = pageReady;

function pageReady() {

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


		

}
        
        



    