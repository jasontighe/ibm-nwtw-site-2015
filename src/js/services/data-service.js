App.factory('dataService', function($http, environment) {
	return function(scope, which, cb) {

		var domain = document.location.hostname,
			key, env, dataHost, i=0, dataUrls = [], protocol = 'http://';

		if (scope.query.preview && scope.query.preview.length > 0) { //preview from cms

			dataHost = environment.dataHost.cms;
			if (which === 'site') {
				dataUrls = [
					protocol + dataHost + '/pages/tree'
				];
			}
			else {
				dataUrls = [
					protocol + dataHost + '/pages/' + scope.query.preview + '/preview'
				];
			}

			makerequest();
		}

		else { //site
			for (key in environment.siteHost) { //use location to figure out which env we are in
				if (environment.siteHost.hasOwnProperty(key)) {
					jQuery(environment.siteHost[key]).each(function(){
						if (domain.indexOf(this) > -1) {
							env = key;
							return false;
						}
					});
				}
				if (typeof env !== 'undefined') {
					break;
				}
			}

			if (typeof env !== 'undefined') {
				dataHost = environment.dataHost[env];
				//console.log(which, env, dataHost);
				if (which === 'site') { //sitenav etc
					dataUrls = [
						protocol + dataHost + '/site/sitenav',
						scope.relpath + 'json/site.json'
					];
				}
				else { //page
					dataUrls = [
						protocol + dataHost + '/site/_design/site/_view/by_url?key=%22'+ (scope.page === 'home'?'':scope.page) +'/' + '%22&include_docs=true',
						scope.relpath + 'json/' + scope.page + '.json'
					];
				}

				makerequest();
			}
			else {
				console.log('unknown domain trying to access data');
			}
		}



		//this func makes the actual http request
		function makerequest() {

			$http.get(dataUrls[i]) //try urls in order and stop when successful
				.success (function(data){
					//console.log('success for '+ dataUrls[i]);
					cb(data);
			})
				.error (function(data, status, headers, config){
					//console.log('error for ' + dataUrls[i]);
					i++;
					if (i + 1 < dataUrls.length) {
						makerequest();//try the next one
					}
					else { //none were successful
						console.log(data, status, headers, config);
					}
			});
		}
	}
});