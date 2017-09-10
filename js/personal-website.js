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
var images = ['img/myself.jpg','img/ocean.jpg','img/cats.jpg','https://static1.squarespace.com/static/53dd6676e4b0fedfbc26ea91/54b6c509e4b062126976d942/57b48b1ee58c6277ad11e4bd/1471617363704/1024px-Southern_Vectis_311_HW54_BUO_and_Ryde_Tesco_bus_stop.JPG?format=1500w'];

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




// Download button on resume page
$("#download").click(function () {
    window.open("https://docs.google.com/document/d/e/2PACX-1vTY5Ee_VJIzsFE0sWrrQ7iGiIzVmSD1b4EDJyidKgGlj1pbAg0LxGk_gkZOX8Yy-kNpSLNz-hu5diUe/pub", "_blank");
});

