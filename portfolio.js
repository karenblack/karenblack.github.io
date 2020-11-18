
// function to have pop-up alert after submitting the form data
window.onload = function() {
	document.getElementById("form").onsubmit = function() {
		alert("Thank you for your submission!");
	}
}