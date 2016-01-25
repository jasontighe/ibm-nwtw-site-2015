App.directive('layout', function ($templateCache) {
	return {
		template: $templateCache.get('shared/layout.html'),
		restrict: 'A',
		link: function(scope, element, attrs) {
			//postRender();
		}
	};
});
