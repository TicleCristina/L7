var slideIndex = 0;
var time = 3000;

function showSlidesColegi() {
  var i;
  var slides = document.getElementsByClassName("myslides");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {
	  slideIndex = 1; 
  }
  slides[slideIndex - 1].style.display = "block";  
  
  setTimeout("showSlidesColegi()", time); 
}
window.onload=showSlidesColegi;
