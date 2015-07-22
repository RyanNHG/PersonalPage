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
    }
};

$(document).ready(index.onReady);
