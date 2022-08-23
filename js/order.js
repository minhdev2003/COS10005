/* write functions that define the action for each event */
function validate() {
	var contact = document.getElementById("contact").value;
	var email = document.getElementById("email").value;
	var creditnumber = document.getElementById("creditnumber").value;
	var deli = document.getElementById("deli").checked;
	var pickup = document.getElementById("pickup").checked;
	var paypickup = document.getElementById("paypickup").checked;
	var payonline = document.getElementById("payonline").checked;
	var errMsg = "";								/* stores the error message */ 
	var result = true;								/* assumes no errors */ 
	/* Rule 1, check if all required inputs have value */ 
	if ((deli == "")&&(pickup == "")) {
		errMsg += "An order type must be selected.\n";
	}
	if (contact == "") {
		errMsg += "Contact number cannot be empty.\n";
	}
	if (email == "") {
		errMsg += "Email cannot be empty.\n";
	}
	if ((paypickup == "")&&(payonline == "")) {
		errMsg += "A payment method must be selected.\n";
	}
	
	/* Rule 2, check if the credit cards numbers has enough digit as required */ 
	if ((document.getElementById("visa").checked)&&(creditnumber.length!=16)) {
		errMsg += "Visa card number has to be 16-digit.\n";
	}	
	if ((document.getElementById("master").checked)&&(creditnumber.length!=16)) { 
		errMsg += "Mastercard number has to be 16-digit.\n";
	}
	if ((document.getElementById("american").checked)&&(creditnumber.length!=15)) { 
		errMsg += "American Express card number has to be 15-digit.\n";
	}
	
	/* Display error message any error(s) is/are detected */	
	if (errMsg != "") {
		alert (errMsg);
		result = false;
	} 
	return result;
}

/* write functions that define the action for each event */
function init () {
	var regForm = 	document.getElementById("regform");		/* link the variables to the HTML elements */
	regForm.onsubmit = validate;	/* assigns functions to corresponding events */
}
window.onload = init; /* execute the initialisation function once the window*/ 

/* When this checkbox is checked, the fields for billing address will be filled with the delivery address automatically */ 
function addressFunction() {
	if (document.getElementById("same").checked) {
		document.getElementById("billadd").value = document.getElementById("deliadd").value;		
	}
	else { 
		document.getElementById("billadd").value = "";
	}
}
window.onchange = addressFunction; /* execute the initialisation function once the window*/ 

/* write functions that define the action for each event */
function yesnoCheck() {
	if (document.getElementById('deli').checked) {
		document.getElementById('ifYes').style.visibility = 'visible';
	}
	else document.getElementById('ifYes').style.visibility = 'hidden';
}
function yesCheck() { 	/* write functions that define the action for each event */
if (document.getElementById('payonline').checked) {
	document.getElementById('ifyeah').style.visibility = 'visible';
} 
else document.getElementById('ifyeah').style.visibility = 'hidden';
}
function copy(event) {   /* write functions that define the action for each event */
var deliadd = document.getElementById("deliadd");
var billadd = document.getElementById("billadd");
var checked = document.getElementById("same").checked;
if (checked) {
	if (deliadd.value) {
		billadd.value = deliadd.value;
	} 
	else {
		alert('Please enter your delivery address first.');
		event.preventDefault();
	}
	
}
}
window.onchange = yesnoCheck(); 
window.onchange = yesCheck();
window.onchange = copy();