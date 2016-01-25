angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/video_description.html',
    '<h4>{{item.title}}</h4>\n' +
    '<p class="subtitle noMobile">{{item.subtitle}}</p>\n' +
    '<p class="noMobile">{{item.description}}</p>\n' +
    '<p class="caption noMobile">{{item.caption}}</p>\n' +
    '\n' +
    '\n' +
    '');
}]);
