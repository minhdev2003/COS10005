function validate() {
    var uname = document.getElementById("uname").value;
    var postcode = document.getElementById("postcode").value;
    var pwd1 = document.getElementById("pwd1").value;
    var pwd2 = document.getElementById("pwd2").value;
    var useremail = document.getElementById("useremail").value;
    var genm = document.getElementById("genm").checked; 
    var genf = document.getElementById("genf").checked; 
    var errMsg = "";								/* stores the error message */
    var result = true;							/* assumes no errors */
    var pattern = /^[a-zA-Z ]+$/;		/* regular expression for letters and spaces only */
    
    /* Rule 1, check if all required inputs have value */
    if (useremail == "") { 
        errMsg += "Email Address cannot be empty.\n"; 
    } 
    
    if (! postcode.match (/^(?=.*\d).{4}$/)) { 
        errMsg += "Postcode has to be 4-digit.\n";
    }
    
    if (pwd1.length<8) { 
        errMsg += "Password has to be at least 8 characters long.\n";
    }
    if (pwd2 == "") { 
        errMsg += "Retype password cannot be empty.\n"; 
    } 
    if (uname == "") { 
        errMsg += "User name cannot be empty.\n"; 
    } 
    if ((genm == "")&&(genf == "")) { 
        errMsg += "A gender must be selected.\n"; 
    } 
    
    /* Rule 2, check if the user ID contains an @ symbol  */
    if (useremail.indexOf('@') == 0 ) { 
        errMsg += "Email Address cannot start with an @ symbol.\n"; 
    } 
    if (useremail.indexOf('@') < 0 ) { 
        errMsg += "Email Address must contain an @ symbol.\n"; 
    } 
    
    var pattern = /^[a-zA-Z ]+$/; 
    
    if (! uname.match (pattern)) { 
        errMsg += "User name contains symbols.\n"; 
    } 
    
    /* Rule 3, check if password and retype password are the same */
    if (pwd1 != pwd2) {
        errMsg += "Passwords do not match.\n";
    }
    
    /* Rule 4, check if user name contains only letters and spaces */
    if (! uname.match (pattern)) {
        errMsg += "User name contains symbols.\n";
    }
    
    /* Display error message any error(s) is/are detected */
    if (errMsg != "") {
        alert (errMsg);
        result = false;
    } 
    return result;
}

/* link HTML elements to corresponding event function */
function init () {
    /* link the variables to the HTML elements */
    var regForm = 	document.getElementById("regform");
    
    /* assigns functions to corresponding events */
    regForm.onsubmit = validate;
}

/* execute the initialisation function once the window*/
window.onload = init;