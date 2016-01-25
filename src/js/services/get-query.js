App.factory('getQuery', function(ipCookie, utils) {
	return function() {

		//console.log(ipCookie);
		var queryObj = { //set default values
						str: window.location.search,
						role: 'default',
						segment: '4',
						featured_product: 'default',
						//campaign: 'default',
						campaign: 'nfl',
						banner: 'default',
						preview: ''
					},
			qs = queryObj.str.substring(1),
			qsArr = qs.split('&'),
			l = qsArr.length,
			i = 0,
			reggie = {
				role: /^[a-zA-Z]+$/g,
				segment: /^[1-4]$/,
				featured_product: /^[a-zA-Z]+$/g,
				campaign: /.+/g,
				banner: /.+/g,
				preview: /.+/g
			},
			qObj = {},
			cookieName = 'nwwUser',
			pair, qKey, qVal;

		for (i; i < l; i++) { //make querystring into an object

			pair = qsArr[i].split('=');
			qKey = pair[0] || '';
			qVal = pair[1] || '';

			switch(qKey) {
				case 'r' : qKey = 'role'; break;
				case 's' : qKey = 'segment'; break;
				case 'f' : qKey = 'featured_product'; break;
				case 'c' : qKey = 'campaign'; break;
				case 'b' : qKey = 'banner';  break;
				case 'pvw' : qKey = 'preview';  break;
				default : qKey = null; break;
			}

			if ( (qKey != null) && (reggie[qKey].test(qVal)) ) {
				qObj[qKey] = qVal;
			}
		}


		// see https://github.com/ivpusic/angular-cookie for additional cookie setting options
		for (var key in queryObj) { //loop through the defaults
			if (queryObj.hasOwnProperty(key)) {

				//see if querystring has a value for this prop
				if (typeof qObj[key] !== 'undefined') {
					queryObj[key] = qObj[key]; //override default
					ipCookie(cookieName + '_' + key, qObj[key], {expires:30}); //and write it to cookie
				}
				//else see if cookie has a value for this prop
				else if ( typeof ipCookie(cookieName + key) !== 'undefined') {
					queryObj[key] = ipCookie(cookieName + key); //override default
				}
			}
		}

		if (queryObj.segment === '4') {
			//queryObj.segment = utils.coinflip()? '1' : '3';
			queryObj.segment = '3';
		}

		//console.log(queryObj);

		return queryObj;
	}
});