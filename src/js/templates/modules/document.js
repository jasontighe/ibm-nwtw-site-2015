angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/document.html',
    '<div class="ibm-columns">\n' +
    '\n' +
    '    <div class="ibm-col-6-2">\n' +
    '        <div page-content type="components/images-inline"></div>\n' +
    '    </div>\n' +
    '    <div class="ibm-col-6-4 box-right">\n' +
    '        <p>Recommended for you</p>\n' +
    '        <div page-content type="components/document"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
