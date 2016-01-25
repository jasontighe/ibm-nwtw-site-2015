App.factory('doTheme', function() {
	return function(campaign, relpath) {

		//'nfl' is now being set as the default in get-query.js instead
		//campaign = campaign === 'default' ? 'nfl' : campaign;

		var markup = '<!--[if lte IE 8]>\n' +
				'<link rel="stylesheet" href="' + relpath + 'css/themes/campaign-' + campaign + '/ie8.css">\n' +
				'<![endif]-->\n' +
				'<!--[if gt IE 8]><!-->\n' +
				'<link rel="stylesheet" href="' + relpath + 'css/themes/campaign-' + campaign + '/main.css"/>\n' +
				'<!--<![endif]-->';

		jQuery('head').append(markup);
	}
});