//  page.js

var page = {
    
    //  onReady - called on page ready.
    onReady : function() {

        // Set up hashchange listener
        $(window).on('hashchange', function () {
            page.loadFromHash();
        });

        // Load page from hash on first call
        page.loadFromHash();
    },

    // load - loads the specified page
    load : function(page)
    {
        //  Triggers a page load from 'hashchange' handler
        window.location.hash = page;
    },

    //  load - loads the specified page from the url.
    loadFromHash : function()
    {
        //  Get page from url
        var page = window.location.hash.substring(1);
        console.log('Loading ' + page);

        //  Set correct nav link to active.
        var allLinks = $('.top-bar-section .left li');
        var clickedLink = $('.top-bar-section .left li a[data-link="' + page + '"').parent();

        allLinks.removeClass('active');
        clickedLink.addClass('active');

        page = 'pages/'+page+'.html';

        //  Insert loaded page.
        $('#pageMain').fadeOut(function(){
            $('#pageMain').load(page,function(response, status){
                if(status == 'error')
                    window.location.hash = 'about-me';
                else 
                    $('#pageMain').fadeIn();
            })
        });
    }

    // invalidPage - returns 'true' if page cannot be found in list of pages


};

$(document).ready(page.onReady);