var aboutme = {
	//	onPageShow - called after the page content is loaded.
	onPageLoad : function() {
		console.log('About Me Loaded');
		$('.link-panel').click(function(){
			page.load($(this).attr('data-link'));
		});
	},

	//	onPageShow - called after the page content is shown.
	onPageShow : function() {
		console.log('About Me Shown');
	}
};

var school = {
	//	onPageShow - called after the page content is loaded.
	onPageLoad : function() {
		console.log('School Loaded');
	},

	//	onPageShow - called after the page content is shown.
	onPageShow : function() {
		console.log('School Shown');
		$(document).foundation('equalizer', 'reflow');
	}
};

var work = {
	//	onPageShow - called after the page content is loaded.
	onPageLoad : function() {
		console.log('Work Loaded');

	},

	//	onPageShow - called after the page content is shown.
	onPageShow : function() {
		console.log('Work Shown');
		$(document).foundation('equalizer', 'reflow');
	}
};


var fun = {
	//	onPageShow - called after the page content is loaded.
	onPageLoad : function() {
		console.log('Fun Loaded');
	},

	//	onPageShow - called after the page content is shown.
	onPageShow : function() {
		console.log('Fun Shown');
	}
};
