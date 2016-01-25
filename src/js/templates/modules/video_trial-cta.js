angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/video_trial-cta.html',
    '\n' +
    '<div class="ibm-columns box">\n' +
    '    <div class="ibm-col-6-3">\n' +
    '        <p>Recommended for you:</p>\n' +
    '        <h4>{{item.trial_title}}</h4>\n' +
    '        <p class="subtitle">{{item.trial_subtitle}}</p>\n' +
    '        <p>{{item.trial_description}}</p>\n' +
    '        <p class="button">\n' +
    '            <a href="{{item.cta_url}}" target="_blank" class="fadeAllInOutFast">{{item.cta_label}}</a>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '    <div class="ibm-col-6-3">\n' +
    '        <div page-content type="components/video"></div>\n' +
    '        <p class="video-doc-title">{{item.video_title}}</p>\n' +
    '        <p class="video-doc-desc noMobile">{{item.video_description}}</p>\n' +
    '    </div>\n' +
    '</div>');
}]);
