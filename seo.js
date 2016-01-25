var page = require('webpage').create(),
	fs = require('fs'),
	host = 'http://127.0.0.1/ibm-nww-site/SourceCode/src/',
	paths = ['','cloud', 'watson', 'data', 'social', 'security'],
	dir = '_tmp-noscript/',
	body, filename, text, ready, t, c, i=0;

getHtml();

function getHtml() {

	c = 0;
	ready = -1;

	page.open(host + paths[i] + '/', function() {

		t = setInterval(function(){

			ready = page.evaluate(function(){

				return document.getElementsByClassName('phantom-ready').length;
			});

			//console.log(ready);
			filename = paths[i] === '' ? 'home' : paths[i];
			if (ready > 0) {
				console.log(filename + ' page ready');
				clearInterval(t);
				body = page.evaluate(function() {
					return document.getElementById('ibm-content-main');
				});
				text = body.innerHTML.replace(/<script[^>]*>([\s\S]*?)<\/script>/gm,'');
				fs.write(dir + filename + '.txt', text, 'w');
				console.log(filename + ' page content extracted to ' + dir + filename + '.txt');
				if (i + 1 === paths.length) {
					phantom.exit();
				}
				else {
					i++;
					getHtml();
				}
			}
			else if (c > 20) {
				console.log(filename + ' page timeout, page not executing properly');
				clearInterval(t);
				phantom.exit();
			}
			else {
				console.log(filename + ' page not ready yet, trying again...');
				c++;
			}

		}, 200);
	});
}
