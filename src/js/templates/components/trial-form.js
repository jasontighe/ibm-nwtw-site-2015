angular.module('ibmnww').run(['$templateCache', function($templateCache) {
  $templateCache.put('components/trial-form.html',
    '<p>Form Component</p>\n' +
    '<form action="">\n' +
    '    <label for="foo"></label> <input id="foo" type="text"/> <br>\n' +
    '    <label for="bar"></label> <input id="bar" type="text"/> <br>\n' +
    '    <input type="submit"/>\n' +
    '</form>');
}]);
