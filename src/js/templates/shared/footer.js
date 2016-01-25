angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('shared/footer.html',
    '<div class="ibm-band" id="ibm-nww-subfooter">\n' +
    '    <!-- eTree :.: Column 1-1 :.: L677079M74975S45-->\n' +
    '    <div  class="ibm-columns ibm_cci-gbl-footer ibm_cci-slim-glb-footer">\n' +
    '\n' +
    '\n' +
    '            <div class="ibm-col-6-4 ibm_cci-gbl-footer-left">\n' +
    '                <p class="ibm-cloud-footer-phone_number">U.S. &amp; Canada {{item.phone_number}}  <span ng-show="item.priority_code"><span class="priority">Priority Code {{item.priority_code}}</span></span></p>\n' +
    '            </div>\n' +
    '            <div class="ibm-col-6-2">\n' +
    '                <span class="label top share" href="javascript:void(0)">Share this</span>\n' +
    '                <div class="icon-wrapper clearfix">\n' +
    '                    <a class="twitter-share-button" href="https://twitter.com/share"\n' +
    '                                                                             data-related="twitterdev"\n' +
    '                                                                             data-size="medium"\n' +
    '                                                                             data-count="horizontal"\n' +
    '                                                                             data-url=""\n' +
    '                                                                             data-text="{{item.twitter_copy}}"\n' +
    '                                                                             data-hashtags="newwaytowork">\n' +
    '                        Tweet\n' +
    '                    </a>\n' +
    '                    <script type="text/javascript">\n' +
    '                        window.twttr=(function(d,s,id){var t,js,fjs=d.getElementsByTagName(s)[0];if(d.getElementById(id)){return}js=d.createElement(s);js.id=id;js.src="https://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);return window.twttr||(t={_e:[],ready:function(f){t._e.push(f)}})}(document,"script","twitter-wjs"));\n' +
    '                    </script>\n' +
    '\n' +
    '                    <script src="//platform.linkedin.com/in.js" type="text/javascript">\n' +
    '                        lang: en_US\n' +
    '                    </script>\n' +
    '                    <script type="IN/Share" data-counter="right"></script>\n' +
    '                </div>\n' +
    '            </div>\n' +
    '\n' +
    '    </div>\n' +
    '</div>\n' +
    '<div class="ibm-band" id="ibm-nww-footer">\n' +
    '    <div class="ibm-columns">\n' +
    '        <div class="ibm-col-6-1">\n' +
    '            <ul class="ibm-link-list">\n' +
    '                <li><a href="./{{query.str}}">Home</a></li>\n' +
    '                <li><a href="./cloud{{query.str}}">Cloud</a></li>\n' +
    '                <li><a href="./data{{query.str}}">Data</a></li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '        <div class="ibm-col-6-3">\n' +
    '            <ul class="ibm-link-list">\n' +
    '                <li><a href="./watson{{query.str}}">Watson</a></li>\n' +
    '                <li><a href="./social{{query.str}}">Social</a></li>\n' +
    '                <li><a href="./security{{query.str}}"> Security</a></li>\n' +
    '            </ul>\n' +
    '        </div>\n' +
    '\n' +
    '\n' +
    '        <div class="ibm-col-6-2">\n' +
    '            <ul class="container social">\n' +
    '                <li class="right">\n' +
    '                    <div class="icon-wrapper clearfix">\n' +
    '                        <a class="label top visit" href="javascript:void(0)">Visit us</a>\n' +
    '\n' +
    '                        <div ng-repeat="item in locations.footer">\n' +
    '                            <div ng-show="item.twitter_url">\n' +
    '                                <a class="social-link tw" target="_blank" title="Twitter" alt="Twitter" href="{{item.twitter_url}}"></a>\n' +
    '                            </div>\n' +
    '                            <div ng-show="item.youtube_url">\n' +
    '                                <a class="social-link yt" target="_blank" title="Youtube" alt="Youtube" href="{{item.youtube_url}}"></a>\n' +
    '                            </div>\n' +
    '                            <div ng-show="item.linkedin_url">\n' +
    '                                <a class="social-link li" target="_blank" title="LinkedIn" alt="LinkedIn" href="{{item.linkedin_url}}"></a>\n' +
    '                            </div>\n' +
    '                            <div ng-show="item.facebook_url">\n' +
    '                                <a class="social-link fb" target="_blank" title="Facebook" alt="Facebook" href="{{item.facebook_url}}"></a>\n' +
    '                            </div>\n' +
    '                            <div ng-show="item.google_url">\n' +
    '                                <a class="social-link gp" target="_blank" title="Google+" alt="Google+" href="{{item.google_url}}"></a>\n' +
    '                            </div>\n' +
    '                        </div>\n' +
    '                    </div>\n' +
    '                </li>\n' +
    '                <!--li  class="right">\n' +
    '                    <div class="icon-wrapper clearfix">\n' +
    '                        <a class="label top" href="javascript:void(0)">Email us</a>\n' +
    '                        <a class="social-link email" title="Email Us" alt="Email Us" href="https://www14.software.ibm.com/webapp/iwm/web/signup.do?source=gtsmail&lang=en_US&S_TACT=602AX26W"></a>\n' +
    '                    </div>\n' +
    '                </li-->\n' +
    '            </ul>\n' +
    '\n' +
    '        </div>\n' +
    '     </div>\n' +
    '</div>');
}]);
