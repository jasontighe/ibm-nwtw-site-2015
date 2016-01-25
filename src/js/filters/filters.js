// filter data for query string values
App.filter('filterUser', function ($filter) {
	return function (locations, query) {

		var filteredLocations = {},
			match = false,
			nonProducts = ['intro','footer','interactive','thought_leadership','category_links'],
			location, filteredItems, products = {}, featured_product;

		for (var key in locations) { //loop through locations

			filteredItems = [];

			if (locations.hasOwnProperty(key)) {

				//console.log(key);

				location = locations[key];

				jQuery(location).each(function(i){ //loop through items in location

					var self = this;
					//console.log(location);

					for (var key in query) { //loop through querystring vals and see if the current item matches

						if (query.hasOwnProperty(key)) {
							//console.log(key);

							if (matchQuery(self, key)) {
								match = true;
							}
							else {
								match = false;
								break;
							}
						}
					} // end query loop

					//console.log('match is ' + match);

					if (match) { // add matching items to this location
						filteredItems.push(this);
					}

				}); // end items loop

				if (filteredItems.length > 0) { // if the location has matching items, add them to the set

					if ( nonProducts.indexOf(key) > -1 ) { //non-products go here
						filteredLocations[key] = filteredItems;
					}
					else { // products go here
						products[key] = filteredItems;
					}
				}
			}
		} // end locations loop

		if ( query.featured_product !== 'default') { // is there a featured product?

			if (typeof products[query.featured_product] !== 'undefined') { // is it in our filtered data?
				featured_product = products[query.featured_product]; //set it aside
				featured_product.$key = query.featured_product;
				delete products[query.featured_product]; //remove it from the rest
			}
		}

		filteredLocations.products = $filter('toArray')(products); // make the products an array

		if (typeof featured_product !== 'undefined') {
			filteredLocations.products.unshift(featured_product); // add the featured product to the beginning so it renders first
		}

		function matchQuery(item, q) {
			return (item.filters[q] === query[q] || item.filters[q] === '' || typeof item.filters[q] === 'undefined' || item.filters[q] === 'all');
		}

		//console.log(filteredLocations);

		return filteredLocations;
	};
});

// make an array out of an object so angular renders it in order
App.filter('toArray', function () {
	'use strict';

	return function (obj) {
		if (!(obj instanceof Object)) {
			return obj;
		}
		var result = [];
		angular.forEach(obj, function(obj, key) {
			obj.$key = key;
			result.push(obj);
		});
		return result;
	}
});

/*App.filter('keyFilter', function () {
	'use strict';

	return function (locations, include, keys) {

		var filteredLocations = {};

		for (var key in locations) {

			if (locations.hasOwnProperty(key)) {

				jQuery(keys).each(function(i){

					var searchString = this;

					if (include) {
						if (searchString == key) {
							filteredLocations[key] = locations[key];
							return false;
						}
					}
					else { //exclude
						if (searchString == key) {
							return false;
						}
						else if (i === keys.length -1) {
							filteredLocations[key] = locations[key];
						}
					}
				});

			}
		}

		return filteredLocations;
	}
});*/

/*App.filter('getFeatured', function () {
	'use strict';

	return function (locations, query) {

		if ( typeof query.featured_product !== 'default') {

			if (typeof locations[query.featured_product] !== 'undefined') {
				locations.featured = locations[query.featured_product];
				delete locations[query.featured_product];
			}
		}

		return locations;
	}
});*/