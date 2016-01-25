angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/document.html',
    '<h4>{{item.title}}</h4>\n' +
    '<p class="subtitle">{{item.subtitle}}</p>\n' +
    '<p>{{item.description}}</p>\n' +
    '<p class="company">{{item.company}}</p>\n' +
    '<p class="small industry">{{item.industry}}</p>\n' +
    '\n' +
    '<p class="button">\n' +
    '    <a target="_blank" href="{{item.cta_url}}">{{item.cta_label}}</a>\n' +
    '</p>\n' +
    '\n' +
    '');
}]);
