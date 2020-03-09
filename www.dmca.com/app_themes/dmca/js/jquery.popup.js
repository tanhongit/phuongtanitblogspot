$(document).ready(function () {

    $(".popup").click(function (e) {

        if ($(".top-menu-popup").hasClass("open")) {
            $(".top-menu-popup").fadeOut();
            $(".top-menu-popup").removeClass("open");
        }
        else {
            $(".top-menu-popup").fadeIn();
            $(".top-menu-popup").addClass("open");
        }

    });

    /* removed in favor of css alternative
	$(".popupHover").hover(function (e) {
        $(".clientLoggedInRmSlide").fadeIn();
        $(".clientLoggedInRmSlide").addClass("open");
    }, function(e) {
        if ($(".clientLoggedInRmSlide").hasClass("open")) {
            $(".clientLoggedInRmSlide").fadeOut();
            $(".clientLoggedInRmSlide").removeClass("open");
        }
    });
	*/
});