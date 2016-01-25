angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/top-nav.html',
    '<div id="sitenav-wrapper">\n' +
    '    <h1><span class="ibm-logo">IBM</span> {{metadata.site_name}}</h1>\n' +
    '    <a class="sitenav-toggle" href="#"></a>\n' +
    '	<div id="sitenav">\n' +
    '		<a id="close-menu" class="gen-icon-close_icon" href="#"></a>\n' +
    '		<ul>\n' +
    '			<li><a id="nav-item-home" href="{{relpath}}{{query.str}}">{{metadata.items[0].name}}</a></li>\n' +
    '			<li ng-repeat="item in sitenav" on-repeat-complete="siteNav"><a id="nav-item-{{utils.normalizeString(item.name)}}" ng-href="{{relpath}}{{item.url}}{{query.str}}">{{item.name}}</a></li>\n' +
    '		</ul>\n' +
    '	</div>\n' +
    '</div>');
}]);
