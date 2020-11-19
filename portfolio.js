
//***************************************************************************************
// function for the caurosel. Obtained from here: https://medium.com/better-programming/make-a-slideshow-with-automatic-and-manual-controls-using-html-css-and-javascript-b7e9305168f9
// plusSlides function determines if slide deck will advance to 'next' or 'prev' by using 'n'
// setInterval function is the 'autoscroll' feature that executes plusSlides at an interval
//***************************************************************************************

var slideIndex = 1;			
var myTimer;

// when page loads, activate show slides function to begin autoscross and set the interval timer
window.addEventListener("load",function() {
    showSlides(slideIndex);
    myTimer = setInterval(function(){plusSlides(1)}, 4000);
})

// when next/previous clicked, advance/retreat image accordingly
function plusSlides(n){
  clearInterval(myTimer);				// clear the timer
  if (n < 0){
    showSlides(slideIndex -= 1);		// retreat the slide
  } else {
   showSlides(slideIndex += 1); 		// advance the slide
  }
  
  if (n === -1){
    myTimer = setInterval(function(){plusSlides(n + 2)}, 4000);	//if retreating, reset the interval timer with plus slides back to 1
  } else {
    myTimer = setInterval(function(){plusSlides(n + 1)}, 4000);
  }
}

// function to display the slides
function showSlides(n){
  var i;
  var slides = document.getElementsByClassName("mySlides");		// get the slides in the carousel
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {							// iterate through the slides
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}



//***************************************************************************************
// function to have pop-up alert after submitting the form data
//***************************************************************************************
window.onload = function() {
	document.getElementById("form").onsubmit = function() {
		alert("Thank you for your submission!");
	}
}