
// initialize event handlers for page
$(function() {
    let sideMenu = $("#side-menu");

    //if not in mobile size remove mobile header view if attached
    $( window ).resize(function() {
        let screenWidth = $(window).width();
        let showMainMenu = (screenWidth > 768 && sideMenu.hasClass("mobile-header-view"));
        if (showMainMenu === true) { toggleSideMenu(sideMenu); }
    });

    //toggle the side-menu in mobile view
    $("#menu-icon").click(function() { toggleSideMenu(sideMenu); });

});

//shared utility functions
function toggleSideMenu (objToToggle) {
    objToToggle.toggleClass("mobile-header-view");
    objToToggle.toggleClass("hide-when-mobile");
}