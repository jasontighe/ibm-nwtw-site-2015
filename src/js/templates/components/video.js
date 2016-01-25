angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/video.html',
    '<div class="ratioBox ratio16_9">\n' +
    '    <div class="ratioContent">\n' +
    '        <div class="youtube-video-container" id="yt-{{item.video_url}}">\n' +
    '\n' +
    '            <div youtube id="wrapper-{{item.video_url}}" width="100%" height="100%" videoid="{{item.video_url}}"></div>\n' +
    '\n' +
    '            <div class="youtube-video-img-container" id="videoImg-{{item.video_url}}"   data="{{item.video_url}}" ng-click="sendControlEvent(YT_event.PLAY, item.video_url)">\n' +
    '\n' +
    '                <div ng-if="item.video_images.desktopStandard"><img class="youtube-video-image" ng-src="{{item.video_images.desktopStandard}}" /></div>\n' +
    '                <div ng-else-if="item.images.desktopStandard"><img class="youtube-video-image" ng-src="{{item.images.desktopStandard}}" /></div>\n' +
    '                <div class="youtube-video-btn-container fadeAll" id="playbtn-{{item.video_url}}" >\n' +
    '                    <img class="youtube-video-play-btn" src="../i/icons/youtube-video-play-btn-76x76.png"/>\n' +
    '                </div>\n' +
    '\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '</div>');
}]);
