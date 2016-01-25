App.directive('youtube', function ($window, YT_event, tracking) {
    return {
        restrict: "A",

        scope: {
            height: "@",
            width: "@",
            videoid: "@"
        },

        template: '<div></div>',

        link: function(scope, element, attrs, $rootScope) {

            players = new Array();


            function playVideo(videoId)
            {
                console.log("directive.youtube-video playVideo - PLAY VIDEO");
                if (typeof(YT) == 'undefined' || typeof(YT.Player) == 'undefined')
                {
                    console.log( "directive.youtube-video playVideo - YTPLAYER : YT IS UNDEFINED." );
                    var self = this;
                    $window.onYouTubeIframeAPIReady = function()
                    {
                        console.log( "directive.youtube-video playVideo : PLAYER is READY" );
                        addPlayer(videoId);
                    };

                    /*
                    $.getScript('//www.youtube.com/iframe_api');
                    */
                    var tag = document.createElement('script');
                    tag.src = "//www.youtube.com/iframe_api";
                    var firstScriptTag = document.getElementsByTagName('script')[0];
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }
                else
                {
                    console.log( "directive.youtube-video playVideo - YTPLAYER : PLAYER is LOADED, ADD PLAYER" );
                    addPlayer(videoId);
                }
            };



            function addPlayer(videoId)
            {
                console.log("directive.youtube-video addPlayer");
                if( hasPlayer(videoId))
                {
                    console.log("directive.youtube-video addPlayer PLAYER EXISTS");
                    player =  getPlayerByVideoId(videoId);
                    player.playVideo();
                }
                else
                {
                    console.log("directive.youtube-video addPlayer PLAYER DOES NOT EXIST");
                    var containerId = "wrapper-"+videoId;
                    console.log("directive.youtube-video addPlayer - containerId: ", containerId);
                    player = new YT.Player(containerId, {
                        playerVars: {
                            autoplay: 1,
                            html5: 1,
                            modesbranding: 0,
                            rel: 0,
                            iv_load_policy: 3,
                            showinfo: 0,
                            controls: 1,
                            enablejsapi: 1
                        },

                        height: scope.height,
                        width: scope.width,
                        videoId: scope.videoid,

                        events: {
                            'onStateChange': function (event) {

                                /* YOUTUBE PLAYER EVENTS: https://developers.google.com/youtube/js_api_reference#Events
                                 -1 (unstarted)
                                 0 (ended) - YT.PlayerState.ENDED
                                 1 (playing) - YT.PlayerState.PLAYING
                                 2 (paused) - YT.PlayerState.PAUSED
                                 3 (buffering) - YT.PlayerState.BUFFERING
                                 5 (video cued) - YT.PlayerState.CUED
                                 When the player first loads a video, it will broadcast an unstarted (-1) event.
                                 When a video is cued and ready to play, the player will broadcast a video cued (5) event.
                                 */
                                console.log('directive.youtube-video - onPlayerStateChange(): state:'+event.data+', videoId: '+event.target.videoId+', prevState: '+event.target.prevState);

                                var message = {
                                    event: YT_event.STATUS_CHANGE,
                                    data: ""
                                };

                                switch (event.data) {
                                    case -1:
                                        break;

                                    case 0: // YT.PlayerState.ENDED:
                                        message.data = "ENDED";
                                        if( event.target.prevState == 2 )
                                        {
                                            tracking.trackYouTubeVideo(event.target.videoId, event.data);
                                            onVideoComplete(event.target.videoId);
                                        }
                                        break;

                                    case 1: // YT.PlayerState.PLAYING:
                                        message.data = "PLAYING";
                                        // If video starts playing, pause any other videos
                                        pauseOtherPlayers(event.target.videoId);
                                        tracking.trackYouTubeVideo(event.target.videoId, event.data);

                                        break;

                                    case 2: // YT.PlayerState.PAUSED:
                                        message.data = "PAUSED";
                                        break;

                                    case YT.PlayerState.UNSTARTED:
                                        message.data = "NOT PLAYING";
                                        break;
                                }

                                event.target.prevState = event.data;

                                scope.$apply(function () {
                                    scope.$emit(message.event, message.data);
                                });
                            }
                        }
                    });

                    // Hard set videoId to ytPlayer so that you can retrieve it on events
                    player.videoId = videoId;

                    // Add player to players arrray
                    players.push({
                        "player": this.player,
                        "videoId": videoId,
                        "currentState": -1
                    });
                }
            };

            // Check if there is a player for the videoId
            function hasPlayer(videoId)
            {
                // console.log("directive.youtube-video hasPlayer - players.length: ", players.length);
                for( var i = 0; i < players.length; i++ )
                {
                    if(  players[ i ].videoId === videoId )  return true;       8
                }
                return false;
            };

            // If the player has been instantiated, retreive it by videoId
            function getPlayerByVideoId(videoId)
            {
                // console.log("directive.youtube-video getPlayerByVideoId - videoId: ", videoId);
                var player;
                for( var i = 0; i <  players.length; i++ )
                {
                    player =  players[ i ].player;
                    if(  players[ i ].videoId == videoId )  return player;
                }
                return player;
            };

            function pauseOtherPlayers(videoId)
            {
                var player;
                for( var i = 0; i <  players.length; i++ )
                {
                    player =  players[ i ].player;
                    // console.log('directive.youtube-video - pauseOtherPlayers(): players[ i ].videoId: '+players[ i ].videoId+', players[ i ].currentState: '+players[ i ].currentState);
                    if(  players[ i ].videoId != videoId )
                    {
                        player.pauseVideo();
                        // Removed as all states are -1 (unstarted)?
                        /*
                        if(  players[ i ].currentState == 1 )
                        {
                            player.pauseVideo();
                        }
                        else if( players[ i ].currentState == 3 )
                        {
                            player.stopVideo();
                        }
                        */
                    }
                }
            };

            function stopAllPlayers()
            {
                var player;
                for( var i = 0; i <  players.length; i++ )
                {
                    // console.log('YTPLAYER: stopAllPlayers(): currentState: '+YTPlayer.players[ i ].currentState);
                    player =  players[ i ].player;

                    player.stopVideo();
                    // App.trigger('VideoEvent.COMPLETE'+'-'+App.YTPlayer.players[ i ].videoId, App.YTPlayer.players[ i ].videoId);
                }
            };

            // If the player has been instantiated, retreive it by videoId
            function onVideoComplete(videoId)
            {
                /*
                console.log("directive.youtube-video onVideoComplete - videoId: ", videoId);
                var player = getPlayerByVideoId(videoId);
                player.seekTo(0);
                player.stopVideo();
                console.log("directive.youtube-video onVideoComplete - player: ", player);
                console.log("directive.youtube-video onVideoComplete - $player: ", $player);
                console.log("directive.youtube-video onVideoComplete - $videoImg: ", $videoImg);
                */

                $player = jQuery('#wrapper-' + videoId);
                $player.hide();
                $videoImg = jQuery('#videoImg-' + videoId);
                $videoImg.show();
            }

            scope.$watch('height + width', function(newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                player.setSize(scope.width, scope.height);

            });

            scope.$watch('videoid', function(newValue, oldValue) {
                if (newValue == oldValue) {
                    return;
                }

                player.cueVideoById(scope.videoid);

            });

            scope.$on(YT_event.STOP, function () {
                player.seekTo(0);
                player.stopVideo();
            });

            scope.$on(YT_event.PLAY, function (e, videoId) {
                console.log("directive.youtube-video = on.PLAY videoId: ", videoId);
                stopAllPlayers();
                // Toggle video button and player visibilty
                $videoImg = jQuery('#videoImg-' + videoId);
                $player = jQuery('#wrapper-' + videoId);
                $videoImg.hide();
                $player.show();
                // If player has already played, be sure to cue to beginning
                if( hasPlayer(videoId))
                {
                    console.log("directive.youtube-video = on.PLAY SEEK TO 0");
                    player.seekTo(0);
                }
                playVideo(videoId);
            });

            scope.$on(YT_event.PAUSE, function () {
                player.pauseVideo();
            });
        }
    };
});