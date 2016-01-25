angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/video.html',
    '<!--div ng-include="relpath + \'templates/components/video.html\'"></div-->\n' +
    '\n' +
    '<div class="ibm-columns box" ng-switch="item.alignment">\n' +
    '\n' +
    '    <!-- QA 12.15 Removed as their is currently no alignment set\n' +
    '    <div ng-switch-when="left">\n' +
    '    -->\n' +
    '    <div class="ibm-col-6-4">\n' +
    '        <div page-content type="components/video"></div>\n' +
    '\n' +
    '    </div>\n' +
    '    <div class="ibm-col-6-2">\n' +
    '        <p>Recommended for you:</p>\n' +
    '        <div page-content type="components/video_description"></div>\n' +
    '    </div>\n' +
    '</div>');
}]);
