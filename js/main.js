//respond to click event of mobile menu icon

$(function() {
    let sideBar = $("#side-menu");



    $("#menu-icon").click(function() {
        let sideMenu = $("#side-menu");
        sideMenu.toggleClass("mobile-header-view");
        sideMenu.toggleClass("hide-when-mobile");

        console.log('clicked', sideMenu.hasClass("mobile-header-view"));
    });
});