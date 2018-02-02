// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

$("a[href*='#']").click(function(e) {
    let target = $(this.hash);
    let scrollHere = target.offset().top > 9 ? target.offset().top - 90 : target.offset().top;
    if (target.length) {
        e.preventDefault();
        $("html, body").animate({
            scrollTop: scrollHere
        }, 1500, 'easeInOutExpo');
    }
})
