//  page.js

const VERSION = 1;

var page = {

    //  onReady - called on page ready.
    onReady : function() 
    {

        // Set up hashchange listener
        $(window).on('hashchange', function () {
            page.loadFromHash();
        });

        // Load page from hash on first call
        page.loadFromHash();
    },

    //  load - loads the specified page
    load : function(page)
    {
        //  Triggers a page load from 'hashchange' handler
        window.location.hash = page;
    },

    //  loadFromHash - loads the specified page from the url.
    loadFromHash : function()
    {
        //  Get page from url
        var pageName = window.location.hash.substring(1);

        //  Update active navbar link
        index.updateNavLinks(pageName);

        //  Get variables for page loading
        var pageContent = 'pages/'+pageName+'.html?version='+VERSION;

        //  Show spinner
        $('#spinnerPage').show();

        //  Fade out existing page
        $('#pageMain').fadeOut(function()
        {            
            //  Load new pages content
            $('#pageMain').load(pageContent, function(response, status)
            {
                //  If something went wrong, load the main page
                if(status == 'error')
                    window.location.hash = 'about-me';
                else 
                {
                    //  Call the onPageLoad callback
                    window[pageName.replace('-','')]['onPageLoad']();

                    //  Fade in the new page
                    $('#pageMain').fadeIn(function()
                    {                    
                        //  Call the onPageShow callback
                        window[pageName.replace('-','')]['onPageShow']();
                        //  Hide spinner
                        $('#spinnerPage').hide();
                    });
                }
            });
        });
    }


};

$(document).ready(page.onReady);