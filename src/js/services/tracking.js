App.factory('tracking', function() {
	
	return {
		init: function(scope) {

			//console.log('init tracking');

			var self = this,
				$ = jQuery,
				$body = $('body');

			self.scope = scope;

			//global
			self.trackEvent('page', 'load', '');

			self.scope.$on('productsComplete',function(){
				var waypoints = $('.ibm-band');

				$(waypoints).waypoint(function(direction) {

					var productName = $(this).attr('id'),
							position = $(this).is('.product-wrapper') ? '-' + ($(this).index('.product-wrapper') + 1) : '';
					self.trackEvent(productName + position, 'scroll', 'top');
				}, {offset: 50});
			});

			$body.on('click', '#sitenav ul a', function(e){
				self.trackEvent('nav', 'click', cleanText($(this).text()));
			});

			$body.on('click', '#ibm-nww-footer .ibm-link-list a', function(e){
				self.trackEvent('footer', 'click', cleanText($(this).text()));
			});

			$body.on('click', '#ibm-nww-footer .social a', function(e){
				self.trackEvent('footer', 'click', 'social-' + $(this).attr('href'));
			});

			$body.on('click', '#twitter-widget-0', function(e){
				self.trackEvent('footer', 'click', 'twitter');
			});

			$body.on('click', '.IN-widget', function(e){
				self.trackEvent('footer', 'click', 'linkedin');
			});

			$body.on('click', '#ibm-footer a', function(e){
				self.trackEvent('footer', 'click', cleanText($(this).text()));
			});

			//home
			$body.on('click', '.home_link', function(e){
				var url = cleanUrl($(this).find('a').attr('href')),
						position = $(this).closest('.home_link').index() + 1;
				self.trackEvent(url + '-' + position, 'click', url);
			});

			//deeplinks
			$body.on('click', '.deeplink', function(e){
				var linkTxt = $(this).find('h3').text();
				self.trackEvent('intro', 'click', cleanText(linkTxt) + '-' + $(this).attr('href'));
			});

			//product links
			$body.on('click', '.product-content a', function(e){
				var section = $(this).closest('.product-wrapper'),
						productName = $(section).attr('id'),
						position = $(section).index('.product-wrapper') + 1,
						linkTxt = $(this).text();

				self.trackEvent(productName + '-' + position, 'click', cleanText(linkTxt) + '-' + $(this).attr('href'));
			});

			function cleanUrl(url) {
				return url.replace(/[\/\.]/gi,'');
			}

			function cleanText(text) {
				return text.replace(' ','-');
			}
		},

        /* Made alt for YOUTUBE only to pass only video Id and event, then construct url and vars here */
        trackYouTubeVideo: function(videoId, evtData) {

//            console.log("***********************************************************");
//            console.log("tracking trackYouTubeVideo - videoId: "+videoId+", evtData: "+evtData);
//            console.log("***********************************************************");
            var $ = jQuery;

            var section = $('#yt-'+videoId).closest('.product-wrapper');
            var productName = $(section).attr('id');
            var position = $(section).index('.product-wrapper') + 1;
            var evt = evtData === 0 ? 'videocomplete' : 'videoplay';
            var url = "https://www.youtube.com/watch?v=" + videoId;

//            console.log("tracking trackYouTubeVideo - section: ", section);
//            console.log("tracking trackYouTubeVideo - productName: ", productName);
//            console.log("tracking trackYouTubeVideo - position: ", position);
//            console.log("tracking trackYouTubeVideo - evt: ", evt);
//            console.log("tracking trackYouTubeVideo - url: ", url);

            var self = this;
            self.trackEvent(productName + '-' + position, evt, url);
        },

		//this is orphaned, TODO: remove
/*		trackVideo: function(elId, evtData, url) {

            var $ = jQuery;
            var section = $(elId).closest('.product-wrapper');
            var productName = $(section).attr('id');
            var position = $(section).index('.product-wrapper') + 1;
            var evt = evtData === 0 ? 'videocomplete' : 'videoplay';

            var self = this;
			self.trackEvent(productName + '-' + position, evt, url);
		},*/
		
		trackEvent: function (ev, action, name) {

			var self = this,
				querystring = self.scope.query.str.length > 1 ? '_' + self.scope.query.str.replace('?','') : '',
				group =  self.scope.page.toLowerCase(),
				evName =  group + '_' + ev + '_' + action + (name.length > 0?'_'+name:'') + querystring;

			//console.log(evName);

			try {
				ibmStats.event({ 'ibmEV' : ev, 'ibmEvGroup' : group, 'ibmEvAction' : action, 'ibmEvName' : evName });
			} catch(error) {}

		}
	};
});