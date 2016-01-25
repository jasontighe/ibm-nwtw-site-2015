angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/trial-cta.html',
    '<div class="ibm-columns">\n' +
    '\n' +
    '    <div class="ibm-col-6-2">\n' +
    '&nbsp;\n' +
    '    </div>\n' +
    '    <div class="ibm-col-6-4 box-right">\n' +
    '        <p>Recommended for you</p>\n' +
    '        <div page-content type="components/generic-cta"></div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
