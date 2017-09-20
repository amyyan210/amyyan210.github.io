(function(){

"use strict";

// Calculates left margin

    function calculateLeftMargin (element) {
        return ($(element).outerWidth(true) - $(element).outerWidth()) / 2;
    }

// Event listener to resize photo
    var photoResize = function(){
        if (window.innerWidth >= 1024) {
            var h = window.innerHeight - $(".personal-photo").offset().top - 30;
            $(".personal-photo").css("max-height", h + "px");
        } else {
            $(".personal-photo").css("max-height", "");
        }
        var leftMargin = calculateLeftMargin(".personal-photo");

        $(".pulse").css("left", $(".personal-photo").position().left + leftMargin + 10);

        $(".pulse").css("top", $(".personal-photo").position().top + 10);

    };

    $('.home-page').imagesLoaded(function() {
        photoResize();
    });

    $(window).resize(photoResize);

})();


// Changing photo functionality
var images = ["img/myself.jpg", "img/code.jpg", "img/riverwalk.jpg", "img/map.jpg", "img/sheet-music.png", "img/college.jpg", "img/opera3.jpg", "img/beach.jpg", "img/fall.gif", "img/snow.gif", "img/space.jpg", "img/ocean.gif", "img/cats.jpg"];

var counter = 0;

function nextImage() {
    counter++;
    if(counter >= images.length)
        counter = 0;
    swapImage(counter);
}

function swapImage(index) {
    $('#photos').css('background-image','');
    $('#photos').css('background-image','url("'+images[index]+'")');
}

$('#photos').click(function(){
    nextImage();
});
// $('#photos').click(function(){
//     swapImage(0);
// });


// Flashing pointer functionality
var pulse = $(".pulse");
    pulse.hide();
var pointer = $("#pointer");
    pointer.hide();

var delay = 5000;
setInterval(function(){
    pointer.fadeToggle();
    pulse.fadeToggle();
}, delay);


// Download button on resume page
// $("#download").click(function () {
//     window.open("https://docs.google.com/document/d/e/2PACX-1vSTFgYCHS3BuZ69-bRYvJuTXKlsguktGLFz8yCPXzjO8apbX8Pp3yMeTY9-sHYGcGueyz2JAd9oCjSq/pub", "_blank");
// });

