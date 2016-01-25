angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/hero.html',
    '<div class="hero-bg">\n' +
    '\n' +
    '    <div class="mobileOnly color-band">\n' +
    '        <div class="ibm-columns">\n' +
    '            <div class="ibm-col-1-1">\n' +
    '                <h1 >{{item.title}}</h1>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '        <div id="arrow-indicator" class="hero-end">\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div class="ibm-columns noMobile">\n' +
    '        <div class="ibm-col-6-4 ">\n' +
    '            <h1 >{{item.title}}</h1>\n' +
    '            <p>\n' +
    '                {{item.description}}\n' +
    '            </p>\n' +
    '        </div>\n' +
    '        <div class="ibm-col-6-2 noMobile">&nbsp;</div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-show="locations.products.length > 2" class="ibm-columns noMobile noBottomMargin noSidePadding">\n' +
    '        <div class="ibm-columns deeplinks">\n' +
    '            <!-- ibm-col- class calculated according to how many items -->\n' +
    '            <a ng-repeat="product in locations.products | limitTo: 4" href="#{{product.$key}}" class="deeplink ibm-col-{{locations.products.length < 4 ? \'6-\' : \'4-1\'}}{{locations.products.length < 4 ? 6/locations.products.length : \'\'}}">\n' +
    '                <h3>{{product[0].deeplink_title}} <span class="btn-linkdown"></span></h3>\n' +
    '                <p>{{product[0].deeplink_description}}</p>\n' +
    '            </a>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '\n' +
    '    <div arrow-indicator id="arrow-indicator" class="arrow-indicator">\n' +
    '        <img src="{{relpath}}i/icons/scroll-arrow-transparent.png"/>\n' +
    '    </div>\n' +
    '</div>\n' +
    '\n' +
    '<div class="ibm-columns mobileOnly">\n' +
    '\n' +
    '    <div class="ibm-col-1-1">\n' +
    '        <div >\n' +
    '            <p>{{item.description}}</p>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
