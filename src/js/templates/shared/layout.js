angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/layout.html',
    '<div class="featured-{{query.featured_product}} ">\n' +
    '	<div top-nav></div>\n' +
    '\n' +
    '	<div id="intro" class="ibm-band {{item[\'content-type\']}} " ng-repeat="item in locations.intro">\n' +
    '		<div page-content type="modules/{{item[\'content-type\']}}"></div>\n' +
    '	</div>\n' +
    '\n' +
    '	<!--\n' +
    '	<p class="debug">locations.category_links.length: {{locations.category_links.length}}</p>\n' +
    '	<p class="debug">modules/{{item[\'content-type\']}}: modules/{{item[\'content-type\']}}</p>\n' +
    '	<p class="debug">locations.category_links: {{locations.category_links}}</p>\n' +
    '    <p>query.campaign: {{query.campaign}}</p>\n' +
    '	-->\n' +
    '\n' +
    '	<div ng-if="locations.category_links" id="category_links">\n' +
    '		<div class="ibm-columns">\n' +
    '			<div ng-repeat="item in locations.category_links"  class="{{item[\'content-type\']}}" on-repeat-complete="products">\n' +
    '				<div page-content type="modules/{{item[\'content-type\']}}"></div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '        <div class="ibm-columns">\n' +
    '            <div class="ibm-links">\n' +
    '                <a class="link" href="http://www.ibm.com/smarterplanet/us/en/madewithibm/" target="_blank">\n' +
    '                    <img src="./i/icons/arrow-circled-right.png" /> Made with IBM Stories\n' +
    '                </a>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div ng-if="locations.interactive">\n' +
    '		<div ng-repeat="item in locations.interactive" id="interactive" class="ibm-band {{item[\'content-type\']}}">\n' +
    '            <div page-content type="modules/{{item[\'content-type\']}}"></div>\n' +
    '		</div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div  ng-if="locations.thought_leadership">\n' +
    '		<div id="thought_leadership" class="ibm-band {{item[\'content-type\']}}" ng-repeat="item in locations.thought_leadership">\n' +
    '			<div page-content type="modules/{{item[\'content-type\']}}"></div>\n' +
    '		</div>\n' +
    '	 </div>\n' +
    '\n' +
    '	<div accordion ng-repeat="product in locations.products" id="{{product.$key}}" class="ibm-band product-wrapper" accordion-name="{{product[0].product_name}}" accordion-subcategory="{{product[0].sub_category}}" on-repeat-complete="products">\n' +
    '		<div class="product-content">\n' +
    '            <div class="mobileOnly accordion-bar"></div>\n' +
    '			<div ng-repeat="item in product" id="{{product.$key}}_{{$index}}">\n' +
    '				<div class="{{item[\'content-type\']}}" page-content type="modules/{{item[\'content-type\']}}"></div>\n' +
    '			</div>\n' +
    '		</div>\n' +
    '		<div class="{{product.$key}}-divider divider" >\n' +
    '            <div class="ibm-columns">\n' +
    '                <div class="ibm-col-1-1">\n' +
    '                    <img ng-src="../i/campaign-{{query.campaign}}/divider-{{product.$key}}.png" />\n' +
    '                </div>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '	</div>\n' +
    '\n' +
    '	<div id="footer" class="{{item[\'content-type\']}}" ng-repeat="item in locations.footer">\n' +
    '		<div page-content type="modules/footer"></div>\n' +
    '	</div>\n' +
    '\n' +
    '	<!--div footer></div-->\n' +
    '</div>\n' +
    '\n' +
    '\n' +
    '');
}]);
