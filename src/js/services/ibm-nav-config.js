App.factory('ibmNavConfig', function() {
	return function() {
		ibmweb.config.sbs = false;
		ibmweb.config.set({
			siteid:'www',
			footermenu:{enabled:false},
			footer:{enabled:false},
			greeting:{enabled:false},
			signin:{enabled:false},
			megamenu:{enabled:true,minimizeByDefault:true,noscroll:true,disableUniversalNav:false},
			merchandising:{enabled:false}
		});
	}
});