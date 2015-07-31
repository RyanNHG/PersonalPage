//  index.js

var index = {

    //  onReady - called when page is ready.
    onReady : function()
    {
        // Set up link click handlers
        index.setupNavbarLinks();

    },
    
    //  addNavLinkHandlers - sets up click listener for all navbar links.
    setupNavbarLinks : function()
    {
        $('.top-bar-section .left a').click(index.onLeftNavLinkClicked);
    },

    //  onLeftNavLinkClicked - Sets up navigational links.
    onLeftNavLinkClicked : function()
    {
        //  Load page
        page.load($(this).attr('data-link'));
    },

    //  updateNavLinks - Updates navbar links to reflect new page is loaded
    updateNavLinks : function(page) {
                //  Set active nav link to inactive.
        var activeLink = $('.top-bar-section .left li.active');
        activeLink.removeClass('active');        

        //  Set clicked nav link to active.
        var clickedLink = $('.top-bar-section .left li a[data-link="' + page + '"').parent();
        clickedLink.addClass('active');
    }
};

$(document).ready(index.onReady);
