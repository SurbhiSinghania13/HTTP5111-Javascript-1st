// Function to be executed when the page loads
window.onload = pageReady;

// Function to set up event handlers and form validation
function pageReady() {

    // Get a reference to the form element with the name "ixdForm"
    var formHandle = document.forms.ixdForm;
    console.log(formHandle);
    // Set the form's onsubmit event handler to the processForm function
    formHandle.onsubmit = processForm;

    // Function to handle form submission
    function processForm() {

        // Get references to form input elements
        var firstNameValue = formHandle.f__fName;
        console.log(firstNameValue);

        var lastNameValue = formHandle.f__lName;
        console.log(lastNameValue);

        var idValue = formHandle.f__id;
        console.log(idValue);

        var programValue = formHandle.f__program;
        console.log(programValue);

        var delValue = formHandle.f__deliver;
        console.log(delValue);

        var projectValue = formHandle.f__project;
        console.log(projectValue);

        // Get the values entered by the user
        var firstNameInput = firstNameValue.value;
        var lastNameInput = lastNameValue.value;
        var idInput = idValue.value;
        var programInput = programValue.options[programValue.selectedIndex].text;
        var delInput = delValue.value;
        var projectInput = projectValue.value;

        // Update the HTML elements to display the user's input
        result__Fname.innerHTML = firstNameInput;
        result__Lname.innerHTML = lastNameInput;
        result__id.innerHTML = idInput;
        result__program.innerHTML = programInput;
        result__delivery.innerHTML = delInput;
        result__project.innerHTML = projectInput;

        // Set the font weight of the elements to "bold"
        result__Fname.style.fontWeight = "bold";
        result__Lname.style.fontWeight = "bold";
        result__id.style.fontWeight = "bold";
        result__program.style.fontWeight = "bold"; 
        result__delivery.style.fontWeight = "bold";
        result__project.style.fontWeight = "bold";

        // Form validation checks
        if (firstNameInput === "") {
            // If the first name is empty, highlight the input field in red
            firstNameValue.style.background = "red";
            // Set focus on the input field for the user to correct
            firstNameValue.focus();
            return false; // Prevent form submission
        }
        if (lastNameInput === "") {
            lastNameValue.style.background = "red";
            lastNameValue.focus();
            return false;
        }
        // Regular expression pattern for Humber ID (starts with N/n and followed by 8 digits)
        var idpattern = /(N|n)\d{8}$/;
        if (idInput === "") {
            idValue.style.background = "red";
            idValue.focus();
            return false;
        }
        else if (!idpattern.test(idInput)) {
            // If Humber ID doesn't match the pattern, show an alert
            alert("Please enter correct humber id");
            idValue.focus();
            return false;
        }
        if (programValue.value == "X") {
            programValue.style.background = "red";
            programValue.focus();
            return false;
        }
        if (delInput == "") {
            document.getElementById('caption_deliver').style.background = "red";
            return false;
        }
        if (projectInput == "") {
            document.getElementById('caption_project').style.background = "red";
            return false;
        }

        // Hide the form and show the result
        formHandle.style.display = "none";
        document.getElementById('welcome').style.display = "none";
        result.style.display = "block";
        //result.innerHTML="no form values required";

        return false; // Prevent the form from actually submitting
    }
}