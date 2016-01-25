angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/quote.html',
    '<div class="ibm-pull-quote">\n' +
    '    <blockquote>\n' +
    '        <span class="ibm-pullquote-open">“</span>\n' +
    '        <p>{{item.quote_copy}}\n' +
    '            <span class="ibm-pullquote-close">”</span>\n' +
    '        </p>\n' +
    '    </blockquote>\n' +
    '    <p class="ibm-pullquote-source">- {{item.person}}, {{item.person_title}}, {{item.company}}</p>\n' +
    '</div>\n' +
    '\n' +
    '<p><a href="{{item.twitter_url}}"></a><p><a href="{{item.linkedin_url}}"></a></p></p>\n' +
    '');
}]);
