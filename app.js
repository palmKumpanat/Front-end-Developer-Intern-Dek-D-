let slideIndex = 1;
showSlide(slideIndex);

function plusButton(n) {
showSlide(slideIndex += n);
}

function currentSlide(n) {
showSlide(slideIndex = n);
}

function showSlide(n) {
  let i=0;
  let slide = document.getElementsByClassName("Slide");
  let dot = document.getElementsByClassName("dot");

  if (n > slide.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slide.length}

  for (i; i < slide.length; i++) {
    slide[i].style.display = "none";
  }

  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active", "");
  }
  
  slide[slideIndex-1].style.display = "block";
  dot[slideIndex-1].className += " active";
}