angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/video_document.html',
    '<div class="ibm-columns box">\n' +
    '    <div class="ibm-col-6-3">\n' +
    '        <p>Recommended for you:</p>\n' +
    '        <h4>{{item.document_title}}</h4>\n' +
    '        <p class="subtitle">{{item.document_subtitle}}</p>\n' +
    '        <p>{{item.document_description}}</p>\n' +
    '        <p class="company">{{item.document_company}}</p>\n' +
    '        <p class="small industry">{{item.document_industry}}</p>\n' +
    '\n' +
    '        <p class="button">\n' +
    '            <a href="{{item.cta_url}}" target="_blank" class="fadeAllInOutFast">{{item.document_cta_label}}</a>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '    <div class="ibm-col-6-3">\n' +
    '        <div page-content type="components/video"></div>\n' +
    '        <p class="video-doc-title">{{item.video_title}}</p>\n' +
    '        <p class="video-doc-desc noMobile">{{item.video_description}}</p>\n' +
    '    </div>\n' +
    '</div>\n' +
    '');
}]);
