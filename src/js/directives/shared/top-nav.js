App.directive('topNav', function ($templateCache, $timeout, utils) {
	return {
		template: $templateCache.get('shared/top-nav.html'),
		restrict: 'A',
		replace: true,
		link: function(scope, element, attr) {

			scope.$on('siteNavComplete',function(){
				var 	$window = jQuery(window),
						$toggle = jQuery('.sitenav-toggle'),
						$wrapper = jQuery('#sitenav-wrapper'),
						$menu = jQuery('#sitenav'),
						$close = jQuery('#close-menu'),
						$unav = jQuery('#ibm-masthead');


				jQuery('#nav-item-' + scope.page).addClass('active');

				$toggle.on('click', function(e){
					e.preventDefault();
					$menu.show('fast');
				});
				$close.on('click', function(e){
					e.preventDefault();
					$menu.hide('fast');
				});

				positionNav();
				$window.on('scroll', positionNav);
				$window.on('resize', positionNav);
				addResizeListener(document.getElementById('ibm-universal-nav'), positionNav);

				function positionNav() {

					if ($unav.is(':visible')) {
						var uHeight = $unav.outerHeight(),
							scrollTop = $window.scrollTop(),
							delta = uHeight - scrollTop,
							top = delta > 0 ? delta : 0;

						$wrapper.css({
							top: top
						});
					}
					else {
						$wrapper.css({
							top: 0
						});
					}
				}


			});
		}
	}
});