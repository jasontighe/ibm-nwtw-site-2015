App.factory('utils', function() {
	return {
		coinflip: function() {
			return !!(Math.random() > .5);
		},
		normalizeString: function(str) {
			return str.replace(/[^A-Za-z_\/]/g,'-').toLowerCase();
		},
		isMobile: function() {
			return Modernizr.mq('(max-width: 640px)')
		},
		phantomReady: function(scope) {
			scope.$on('productsComplete',function(){
				jQuery('body').addClass('phantom-ready');
			});
		}
	}
});