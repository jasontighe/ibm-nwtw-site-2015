App.directive('onRepeatComplete', function ($timeout) {
	return {
		restrict: 'A',
		link: function(scope, element, attr) {

			$timeout(function(){
				var eventName = attr.onRepeatComplete;

				if (scope.$last) {
					scope.$emit(eventName + 'Complete');
				}
			});
		}
	};
});
