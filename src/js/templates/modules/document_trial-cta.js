angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/document_trial-cta.html',
    '<div class="ibm-columns box">\n' +
    '    <p>Recommended for you</p>\n' +
    '    <div class="ibm-col-6-2">\n' +
    '        <h4>{{item.document_title}}</h4>\n' +
    '        <p class="subtitle">{{item.document_subtitle}}</p>\n' +
    '        <p>{{item.document_description}}</p>\n' +
    '        <p class="company">{{item.document_company}}</p>\n' +
    '        <p class="small industry">{{item.document_industry}}</p>\n' +
    '\n' +
    '        <p class="button">\n' +
    '            <a target="_blank" href="{{item.cta_url}}">{{item.document_cta_label}}</a>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '    <div class="ibm-col-6-4">\n' +
    '        <h4>{{item[\'trial-cta_title\']}}</h4>\n' +
    '        <p class="subtitle">{{item[\'trial-cta_subtitle\']}}</p>\n' +
    '        <p>{{item[\'trial-cta_description\']}}</p>\n' +
    '\n' +
    '        <p class="button">\n' +
    '            <a target="_blank" href="{{item[\'trial-cta_url\']}}">{{item[\'trial-cta_label\']}}</a>\n' +
    '        </p>\n' +
    '    </div>\n' +
    '</div>');
}]);
