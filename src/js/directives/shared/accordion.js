App.directive('accordion', function ($timeout, utils) {
	return {
		restrict: 'A',
		link: function (scope, element, attr) {
			$timeout(function(){



				var $header = jQuery('<div class="ibm-columns accordion-header"><div class="ibm-col-1-1"><div class="accordion-icon"></div><span class="sub-category">' + attr.accordionSubcategory + '</span><h4>' + attr.accordionName + '</h4></div>'),
					$body = jQuery(element).find('.product-content');

				jQuery(element).prepend($header);

				$header.on('click', function(e){
					e.preventDefault();

					if (utils.isMobile()) {
						$body = $body || jQuery(element).find('.product-content');
						jQuery('.product-content.active').not($body).slideUp();
						$body.toggleClass('active').slideToggle();
                        jQuery(element).find('.accordion-icon').toggleClass('accordion-icon-open');
					}
				});
				//new Accordion(jQuery(element), attr.accordion);
			},0);
		}
	};
});