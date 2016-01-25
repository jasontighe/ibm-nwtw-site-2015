angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/images-inline.html',
    '<div ng-show="item.images.desktopStandard">\n' +
    '<span data-picture data-alt="">\n' +
    '    <span data-src="{{item.images.desktopStandard}}"></span>\n' +
    '    <span data-src="{{item.images.desktopRetina}}" data-media="(min-device-pixel-ratio: 2.0)"></span>\n' +
    '    <span data-src="{{item.images.mobileStandard}}" data-media="(max-width:640px)"></span>\n' +
    '    <span data-src="{{item.images.mobileRetina}}" data-media="(max-width:640px and min-device-pixel-ratio: 2.0)"></span>\n' +
    '</span>\n' +
    '    </div>\n' +
    '');
}]);
