(function(){

"use strict";

$("#download").click(function () {
    window.open("https://docs.google.com/document/d/e/2PACX-1vTY5Ee_VJIzsFE0sWrrQ7iGiIzVmSD1b4EDJyidKgGlj1pbAg0LxGk_gkZOX8Yy-kNpSLNz-hu5diUe/pub", "_blank");
});

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