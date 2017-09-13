(function(){

"use strict";

// Event listener to resize photo
    var photoResize = function(){
        if (window.innerWidth >= 1024) {
            var h = window.innerHeight - $(".personal-photo").offset().top - 30;
            $(".personal-photo").css("max-height", h + "px");
        } else {
            $(".personal-photo").css("max-height", "");

        }
    };

    $(document).ready(photoResize);
    $(window).resize(photoResize);

})();


// Changing photo functionality
var images = ["img/myself.jpg", "img/sanantonio.jpg", "img/chalkboard.jpg", "img/cats.jpg", "img/space.jpg", "img/ocean.gif"];

var counter = 0;

function nextImage() {
    counter++;
    if(counter >= images.length)
        counter = 1;
    swapImage(counter);
}

function swapImage(index) {
    $('#photos').css('background-image','');
    $('#photos').css('background-image','url("'+images[index]+'")');
}

$('#photos').mouseenter(function(){
    nextImage();
});
$('#photos').mouseleave(function(){
    swapImage(0);
});


// Flashing pointer functionality
var pulse = $(".pulse");
    pulse.hide();
var pointer = $("#pointer");
    pointer.hide();

var delay = 3000;
setInterval(function(){
    pointer.fadeToggle();
    pulse.fadeToggle();
}, delay);


// Download button on resume page
$("#download").click(function () {
    window.open("https://docs.google.com/document/d/e/2PACX-1vTY5Ee_VJIzsFE0sWrrQ7iGiIzVmSD1b4EDJyidKgGlj1pbAg0LxGk_gkZOX8Yy-kNpSLNz-hu5diUe/pub", "_blank");
});

