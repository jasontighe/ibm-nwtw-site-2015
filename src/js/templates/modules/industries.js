angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/industries.html',
    '<h3>Module template | {{item[\'content-type\']}}</h3>\n' +
    '<div>\n' +
    '    {{item.description}}\n' +
    '</div>\n' +
    '<ul>\n' +
    '	<li ng-repeat="industry in item.industries">\n' +
    '		{{industry.title}}\n' +
    '	</li>\n' +
    '</ul>');
}]);
