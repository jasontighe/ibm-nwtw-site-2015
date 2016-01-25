angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/product-detail.html',
    '<span ng-show="item.sub_category"><h5 class="product-name">{{item.sub_category}}</h5></span>\n' +
    '<h2 class="product-name">{{item.product_name}}</h2>\n' +
    '<p>{{item.description}}</p>\n' +
    '\n' +
    '<div ng-show="item.subhead">\n' +
    '    <p class="subtitle">{{item.subtitle}}</p>\n' +
    '    <p>{{item.subhead}}</p>\n' +
    '</div>\n' +
    '\n' +
    '<div ng-show="item.quote_copy">\n' +
    '    <div class="ibm-pull-quote">\n' +
    '        <blockquote>\n' +
    '            <span class="ibm-pullquote-open">“</span>\n' +
    '            <p>{{item.quote_copy}}\n' +
    '                <span class="ibm-pullquote-close">”</span>\n' +
    '            </p>\n' +
    '        </blockquote>\n' +
    '        <p class="ibm-pullquote-source">\n' +
    '            <span ng-show="item.person">\n' +
    '                <span ng-show="item.person"><strong>{{item.person}}</strong> </span> <span ng-show="item.person_title">| {{item.person_title}}</span><br/>\n' +
    '            </span>\n' +
    '            <span ng-show="item.company">\n' +
    '                <span ng-show="item.company"> {{item.company}}</span>\n' +
    '            </span>\n' +
    '        </p>\n' +
    '        <div ng-show="item.twitter_url">\n' +
    '            <p><a href="{{item.twitter_url}}"></a>\n' +
    '        </div>\n' +
    '        <div ng-show="item.linkedin_url">\n' +
    '         <p><a href="{{item.linkedin_url}}"></a></p></p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '<!--/div-->\n' +
    '\n' +
    '<p class="button">\n' +
    '	<a href="{{item.cta_url}}" target="_blank" class="fadeAllInOutFast">{{item.cta_label}}</a>\n' +
    '</p>');
}]);
