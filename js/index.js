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
var images = ["img/myself.jpg", "img/code.jpg", "img/riverwalk.jpg", "img/map.jpg", "img/sheet-music.png", "img/college.jpg", "img/opera3.jpg", "img/beach.jpg", //"img/fall.gif", //"img/snow.gif",
"img/space.jpg",
//"img/ocean.gif",
"img/cats.jpg"];

var counter = 0;

function nextImage() {
    counter++;
    if(counter >= images.length)
        counter = 0;
    swapImage(counter);
}

// var swapping = false;
// function swapImage(index) {
//     var bck = 'url("'+images[index]+'")';
//     $('#a-image').css('background-image',bck);
//
//     var callback = function(){
//         swapping = false;
//         $('#b-image').hide();
//         $('#b-image').css('background-image',bck);
//         $('#b-image').show();
//         $('#b-image').fadeIn(0);
//     };
//     if(swapping) callback = function(){}
//     swapping = true;
//     $('#b-image').fadeOut(1000, callback);
// }
//
// var timer = null;
// $('#top-image').click(function(){
//     clearTimeout(timer);
//     nextImage();
//     timer = setTimeout(swapImage,5000,0);
// });



function swapImage(index) {
    $('#photos').css('background-image','');
    $('#photos').css('background-image','url("'+images[index]+'")');
}

$('.img-and-pointer').click(function(){
    nextImage();
});

// Had commented out before trying click fade
// $('#photos').click(function(){
//     swapImage(0);
// });


// Adding all images to HTML to preload images and reduce loading time
for (let i = 0; i < images.length; i++) {
    $("#hidden-pictures").html("<img src=" + images[i] + ">");
}


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

