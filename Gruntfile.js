'use strict';
module.exports = function(grunt) {

	// load all grunt tasks matching the `grunt-*` pattern
	require('load-grunt-tasks')(grunt);

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		// Watch for changes and trigger less, jshint, uglify and livereload
		watch: {
			options: {
				livereload: true
			},
			styles: {
				files: ['css/src/*.less'],
				tasks: ['less:cleancss', 'postcss']
			}
		},

		less: {
			cleancss: {
				files: {
					'css/flexbox-grids.css': 'css/src/flexbox-grids.less'
				}
			}
		},

		// PostCSS handles post-processing on CSS files. Used here to autoprefix and minify.
		postcss: {
			options: {
				map: {
					inline: false, // save all sourcemaps as separate files...
					annotation: 'css/' // ...to the specified directory
				},
				processors: [
					require('postcss-flexbugs-fixes'),
					require('autoprefixer')({browsers: 'last 2 versions, Chrome >= 13'}),
					require('cssnano')({ discardUnused: { fontFace: false }, zindex: false })
				]
			},
			dist: {
				src: 'css/*.css'
			}
		}
	});

	// Register tasks
	// Typical run, cleans up css and js, starts a watch task.
	grunt.registerTask('default', ['less:cleancss', 'postcss', 'watch']);

	// Before releasing a build, do above plus minimize all images.
	grunt.registerTask('build', ['less:cleancss', 'postcss']);

};
