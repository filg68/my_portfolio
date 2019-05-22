
// initialize global variables
var myPortfolioGlobals = {"activePage": "about"};

// initialize event handlers for page
$(function() {
    let sideMenu = $("#side-menu");

    //Initialize the Owl Carousel
    $(".owl-carousel").owlCarousel(
        {
            items:2,
            autoplay:true,
            autoplayTimeout:5000,
            responsiveClass:true,
            loop:true,
            responsive: {
                0:{items:1},
                600:{items:2},
                1200:{items:3},
                1600:{items:4},
                2000:{items:5}
                }
        });

    //if not in mobile size remove mobile header view if attached
    $( window ).resize(function() {
        let screenWidth = $(window).width();
        let showMainMenu = (screenWidth > 768 && sideMenu.hasClass("mobile-header-view"));
        if (showMainMenu === true) { toggleSideMenu(sideMenu); }
    });

    //toggle the side-menu in mobile view
    $("#menu-icon").click(function() {
        toggleSideMenu(sideMenu); });

    $(".menu-item").click(function () {
        let sel = $(this).data("item");
        toggleActivePage(sel);
    });

});

//shared utility functions
function toggleSideMenu (objToToggle) {
    objToToggle.toggleClass("mobile-header-view");
    objToToggle.toggleClass("hide-when-mobile");
}

function toggleActivePage (newActivePageValue) {

    let currentActive = $("#" + myPortfolioGlobals.activePage);
    let newActive = $("#" + newActivePageValue);
    myPortfolioGlobals.activePage = newActivePageValue;
    newActive.toggleClass("hide-section");
    currentActive.toggleClass(("hide-section"));
}