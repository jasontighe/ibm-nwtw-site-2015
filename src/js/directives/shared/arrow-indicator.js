App.directive('arrowIndicator', function ($timeout, utils) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			$timeout(function(){

				var $intro = jQuery('#intro'),
					$arrow = jQuery(element),
					$window = jQuery(window);

				positionArrow();
				$window.on('scroll', positionArrow);
				$window.on('resize', positionArrow);
				addResizeListener(document.getElementById('ibm-universal-nav'), positionArrow);
				addResizeListener(document.getElementById('sitenav'), positionArrow);

				function positionArrow() {

					if (!utils.isMobile()) {
						var iOffset = $intro.offset(),
								iHeight = $intro.outerHeight(),
								wHeight = $window.height(),
								scrollTop = $window.scrollTop(),
								delta = iOffset.top + iHeight - wHeight - scrollTop,
								bottom = delta > 0 ? delta : 0;

						$arrow.css({
							bottom: bottom
						});
					}
					else {
						$arrow.css({
							bottom: 0
						});
					}
				}
			},0);
		}
	};
});