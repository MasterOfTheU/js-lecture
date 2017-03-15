//using querySelectorAll to get the slides from our container
var slides = document.querySelectorAll('#slides .slide');

//setting a variable to keep track of the current slide.
var currentSlide = 0;

//creating an interval to show the next slide every 3 seconds (expressed as 3000 ms).
var slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
    slides[currentSlide].className = 'slide';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].className = 'slide showing';
}

/* 

firstly we give the current slide className of 'slide', in css we control the showing by giving it the opacity of 0
-----------------------------------------
then we add 1 to current slide in order to cycle back to zero if we've reached the end of slideshow 
-----------------------------------------
then after calculating the current slide position we give it the class name of 'showing' and here is where its opacity changes from 0 to 1
*/

