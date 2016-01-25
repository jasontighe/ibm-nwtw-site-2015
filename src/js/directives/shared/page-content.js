App.directive('pageContent', function($parse, $compile, $templateCache, $http, $timeout, postRender, utils) {
	return {
		restrict: 'A',
		//replace: true,
		//scope: '=',
		link: function(scope, element, attrs) {

			attrs.$observe("type", function(val){

			var template;

				template = $templateCache.get(utils.normalizeString(val) + '.html');
				//console.log($templateCache);

				element.html(template);
				$compile(element.contents())(scope);

/*				$http.get(contentUrl)
					.success (function(data){
						template = data;
					})
					.error (function(data, status, headers, config){
						template = 'the module template at ' + contentUrl + ' did not load: ' + status;
				})
					.finally (function(){
						element.html(template);
						$compile(element.contents())(scope);

					$timeout(function(){ // do DOM stuff here
						postRender(element, attrs);
					},0);
				});
*/
			});


		}

	};
});