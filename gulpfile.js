var gulp = require('gulp'),
	plugins = require('gulp-load-plugins')({
		pattern: 'gulp-*'
	}),
	fs = require('fs'),
		path = require('path'),
	bowerFiles = require('bower-files')({dev: true}),
	spritesmith = require('gulp.spritesmith'),
	srcDir = './src/',
	distDir = './dist/',
	cssDir = 'css',
	imgDir = 'i',
	jsDir = 'js',
	homepage = 'index.html',
	categoryPages = '*/**/index.html',
	templates = 'templates/**/*.html',
	otherAssets = [srcDir + '**/*.{css,map,jpg,gif,png,woff,eot,svg,ttf,json}', srcDir + categoryPages];


//concat bower dependencies into js and less libs
gulp.task('bower', function() {
	if (bowerFiles.js) {
		// strip out jquery bc IBM already includes it
		var l = bowerFiles.js.length,
				files = [];

		for (var i = 0; i < l; i++) {
			if (bowerFiles.js[i].indexOf('/jquery.js') < 0) {
				files.push(bowerFiles.js[i]);
			}
		}

		console.log('bower js files found');
		gulp.src(files)
				.pipe(plugins.concat('_lib.js'))
				.pipe(gulp.dest(srcDir + jsDir));
	}
	if (bowerFiles.less) {
		console.log('bower less files found');
		gulp.src(bowerFiles.less)
				.pipe(plugins.concat('lib.less'))
				.pipe(gulp.dest(srcDir + cssDir + '/less'));
	}
});

//convert html templates to ng js modules
gulp.task('templatesToJs',function(){

	return gulp.src(srcDir + templates)
			.pipe(plugins.ngHtml2js({
				moduleName: "ibmnww",
				declareModule: false
			}))
			.pipe(gulp.dest(srcDir + jsDir + '/templates'));
});

//inject refs for all js files into all index.htmls for dev
gulp.task('injectdev', ['templatesToJs'] ,function () {
	var target = gulp.src([srcDir + homepage, srcDir + categoryPages]),
			sources = gulp.src([srcDir + '**/*.js', srcDir + '/**/*.css'], {read: false});

	return target.pipe(plugins.inject(sources, {relative: true}))
			.pipe(gulp.dest(srcDir));
});

//main less
gulp.task('less', function() {
	return gulp.src([srcDir + cssDir + '/less/**/main.less'])
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.less({
				compress: true //compress before adding sourcemap
			}))
			.pipe(plugins.sourcemaps.write('.'))
			.pipe(gulp.dest(srcDir + cssDir));
});

// IE8 less gets compiled separately
gulp.task('lessIE', function() {
	return gulp.src(srcDir + cssDir + '/less/**/ie8.less')
			.pipe(plugins.sourcemaps.init())
			.pipe(plugins.less({
				compress: true //compress before adding sourcemap
			}))
			.pipe(plugins.sourcemaps.write('.'))
			.pipe(gulp.dest(srcDir + cssDir));
});

//empty dist
gulp.task('clean', function () {
	return gulp.src(distDir + '**/*.*', {read: false})
			.pipe(plugins.clean());
});

//concat and minify js based on the homepage references
gulp.task('usemin', ['wire-files', 'less', 'lessIE', 'clean','move'], function() {
	return gulp.src(srcDir + homepage)
			.pipe(plugins.usemin({
				js: [plugins.ngAnnotate(), plugins.uglify()]
			}))
			.pipe(gulp.dest(distDir));
});

//inject dist js refs into dist category pages so they match the homepage
gulp.task('injectdist', ['usemin'], function () {
	var target = gulp.src(distDir + categoryPages),
		sources = gulp.src([distDir + '**/*.js', distDir + '**/*.css'], {read: false}, {name: 'injectdist'});

	return target.pipe(plugins.inject(sources, {relative: true}))
			.pipe(gulp.dest(distDir));
});

gulp.task('htmlmin', ['injectdist'], function () {
	return gulp.src([distDir + homepage, distDir + categoryPages])
			.pipe(plugins.htmlmin({
				removeComments: true,
				collapseWhitespace: true,
				preserveLineBreaks: true
			}))
			.pipe(gulp.dest(distDir));
});

//move various static assets to dist
gulp.task('move', ['clean'], function() {
	return gulp.src(otherAssets, { base: srcDir })
			//.pipe(plugins.filelog())
			.pipe(gulp.dest(distDir));
});

//optional, has other sys dependencies
gulp.task('imagemin', ['move'], function() {
	return gulp.src(srcDir + imgDir + '/**/*.{gif,jpg,png,svg}')
			.pipe(plugins.imagemin())
			.pipe(gulp.dest(distDir));
});

//watch for dev changes to run tasks and livereload
gulp.task('watch',['wire-files', 'less', 'lessIE'], function() {
	plugins.livereload.listen();
	gulp.watch(srcDir + cssDir + '/**/*.less', ['less']);
	gulp.watch(srcDir + templates, ['templatesToJs']);
	gulp.watch(srcDir + jsDir + '/**/*.js', ['injectdev']);
	gulp.watch([srcDir + '**/*',
				'!' + srcDir + cssDir + '/**/*.less',
				'!' + srcDir + templates,
				'!' + srcDir + jsDir + '/**/*.js'])
			.on('change', plugins.livereload.changed);
});

//optional, has other sys dependencies
gulp.task('sprite', function () {
	var spriteData = gulp.src(srcDir + imgDir + '/sprite-src/*.png').pipe(spritesmith({
		imgName: 'sprite.png',
		cssName: 'sprite.less',
		cssFormat: 'less'
	}));
	spriteData.pipe(gulp.dest(imgDir));
});

//grab noscript content from temp files to insert into final htmls. Requires running phantomjs seo.js if temp files don't exist
gulp.task('insert-noscript', ['minify-noscript'], function () {

	gulp.src(['./_tmp-noscript/*.*']) //get the files
		.pipe(plugins.tap(function(file, t){
			var destDir = path.basename(file.path, '.txt') === 'home' ? '' : path.basename(file.path, '.txt') + '/';
			copyContent(destDir,file.contents);
	}));

	function copyContent(destDir, contents) {
		gulp.src(distDir + destDir + 'index.html')
			.pipe(plugins.filelog())
			.pipe(plugins.replace(/<noscript.id="seo"[^>]*>([\s\S]*?)<\/noscript>/gm,'')) //remove any previous instances of noscript block
			.pipe(plugins.injectString.before('</body>', '<noscript id="seo">'+ contents + '</noscript>'))
			.pipe(gulp.dest(distDir + destDir));
	}
});

//minify the noscript html
gulp.task('minify-noscript', function () {

	return gulp.src(['./_tmp-noscript/*.*'])
			.pipe(plugins.filelog())
			.pipe(plugins.htmlmin({
				removeComments: true,
				collapseWhitespace: true
			}))
			.pipe(gulp.dest('_tmp-noscript'));
});

gulp.task('wire-files', ['bower', 'templatesToJs', 'injectdev']);
gulp.task('default', ['wire-files', 'less', 'lessIE', 'watch']);
gulp.task('dist', ['wire-files', 'less', 'lessIE', 'usemin', 'injectdist', 'htmlmin']);