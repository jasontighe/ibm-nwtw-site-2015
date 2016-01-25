'use strict';

var App = angular.module('ibmnww', [ 'ipCookie']);

// Constants
App.constant('environment', {
	siteHost: {
		stage: ['xxx'],
		prod: ['xxx']
	},
	dataHost: {
		stage: 'xxx',
		prod: 'xxx',
		cms: 'xxx'
	}
});

App.constant('YT_event', {
    STOP:            0,
    PLAY:            1,
    PAUSE:           2,
    STATUS_CHANGE:   3
});

