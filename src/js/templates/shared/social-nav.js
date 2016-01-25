angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/social-nav.html',
    '<div class="ibm-container ibm-graphic-tabs ibm-combo-tabs">\n' +
    '	<div class="ibm-tab-section">\n' +
    '		<ul class="ibm-tabs" id="nww-social-nav">\n' +
    '			<li ng-repeat="item in socialnav"><a href="{{relpath}}{{item.url}}{{query.str}}">{{item.text}}</a></li>\n' +
    '		</ul>\n' +
    '	</div>\n' +
    '</div>\n' +
    '');
}]);
