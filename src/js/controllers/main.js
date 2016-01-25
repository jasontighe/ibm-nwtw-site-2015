//main point of entry for angular
App.controller('MainCtrl', function ($scope, $http, $filter, getQuery, utils, YT_event, doTheme, ibmNavConfig, tracking, dataService, pathService) {

	var path = pathService();

	$scope.utils = utils;

	$scope.relpath = path.relpath;

	$scope.page = path.page;

	$scope.query = getQuery(); //get querystring params as an obj

	ibmNavConfig(); //set ibm global nav options
	
	doTheme($scope.query.campaign, $scope.relpath);

	dataService($scope, 'site', function(data) {
		$scope.metadata = data;
		$scope.sitenav = data.items[0].children;
	});

	dataService($scope, 'page', function(data) {
		tracking.init($scope);
		utils.phantomReady($scope);
		$scope.meta_title = data.rows[0].doc.page_title;
		$scope.meta_description = data.rows[0].doc.page_description;
		$scope.meta_keywords = data.rows[0].doc.page_keywords;
		$scope.locations = $filter('filterUser')(data.rows[0].doc.locations, $scope.query);
	});

	/* YouTube Player Stuff start. */
    //initial settings
    $scope.yt = {
        width: 600,
        height: 480,
        videoid: "EqnUiEVgmAg",
        playerStatus: "NOT PLAYING"
    };

    $scope.YT_event = YT_event;

    $scope.sendControlEvent = function (ctrlEvent, videoId) {
        this.$broadcast(ctrlEvent, videoId);
    };

    $scope.sendControlEvent = function (ctrlEvent, videoId) {
        this.$broadcast(ctrlEvent, videoId);
    };


    $scope.$on(YT_event.STATUS_CHANGE, function(event, data) {
        $scope.yt.playerStatus = data;
    });
    /* YouTube Player Stuff end. */
});