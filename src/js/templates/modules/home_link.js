angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/home_link.html',
    '<a ng-href=".{{item.category_link}}{{query.str}}">\n' +
    '    <div id="" class="{{item.category_label}} ibm-col-6-2 home_link-container">\n' +
    '        <div class="title-bar">\n' +
    '            <h4>{{item.category_label}}:</h4>\n' +
    '            <p class="subtitle">{{item.subtitle}}</p><span class="subtitle-chevron">></span>\n' +
    '        </div>\n' +
    '        <div class="home-rollover fadeAllInOut">\n' +
    '            <h4>{{item.category_label}}:</h4>\n' +
    '            <p class="subtitle">{{item.subtitle}}</p>\n' +
    '            <p class="category-desc">{{item.category_description}}</p>\n' +
    '            <p class="caption">{{item.caption}}</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</a>');
}]);
