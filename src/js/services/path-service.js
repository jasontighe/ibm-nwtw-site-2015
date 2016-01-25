App.factory('pathService', function() {
	return function() {
		var dir = document.location.pathname.match(/\/[^\/]*/gi), //figure out which directory we're in
				relpath = jQuery('.ibm-nww-lower').length > 0 ? '../' : '';

		return {
			relpath: relpath,
			page: relpath === '' ? 'home' : dir[dir.length-2].replace('/','').toLowerCase() //set pagename based on directory
		};
	}
});