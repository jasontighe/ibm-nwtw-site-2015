App.directive('footer', function ($templateCache) {
	return {
		template: $templateCache.get('shared/footer.html'),
		restrict: 'A',
		link: function(scope, element, attrs) {
			//postRender();
		}
	};
});
