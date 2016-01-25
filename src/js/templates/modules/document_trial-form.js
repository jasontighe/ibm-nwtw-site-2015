angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/document_trial-form.html',
    '<h3>Module template | {{item[\'content-type\']}}</h3>\n' +
    '<div>\n' +
    '    {{item.description}}\n' +
    '</div>\n' +
    '<div page-content type="components/document"></div>\n' +
    '<div page-content type="components/trial-form"></div>');
}]);
