angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/quote.html',
    '<h3>Module template | {{item[\'content-type\']}}</h3>\n' +
    '<div page-content type="components/quote"></div>');
}]);
