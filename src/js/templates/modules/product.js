angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('modules/product.html',
    '\n' +
    '<div ng-switch="item.alignment">\n' +
    '    <div ng-switch-when="left">\n' +
    '        <div class="ibm-columns product {{item.product_name}}">\n' +
    '            <!-- need to add test that if images exist then add class for box to ibm-columns; otherwise, just to ibm-col-6-4\n' +
    '            also need logic to toggle 6-4 to left side so it\'s 6-4, 6-2 -->\n' +
    '            <div class="ibm-col-6-3">\n' +
    '                <div page-content type="components/product-detail"></div>\n' +
    '            </div>\n' +
    '            <div class="ibm-col-6-3">\n' +
    '                <!--&nbsp;-->\n' +
    '                <div page-content type="components/images-inline"></div>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '    <div ng-switch-when="right">\n' +
    '        <div class="ibm-columns product {{item.product_name}}">\n' +
    '            <!-- need to add test that if images exist then add class for box to ibm-columns; otherwise, just to ibm-col-6-4\n' +
    '            also need logic to toggle 6-4 to left side so it\'s 6-4, 6-2 -->\n' +
    '            <div class="ibm-col-6-3">\n' +
    '                <!--&nbsp;-->\n' +
    '                <div page-content type="components/images-inline"></div>\n' +
    '            </div>\n' +
    '            <div class="ibm-col-6-3">\n' +
    '                <div page-content type="components/product-detail"></div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
