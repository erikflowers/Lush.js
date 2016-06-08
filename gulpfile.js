'use strict';
/**
 * LUSH Gulpfile
 *
 * @author Bob van Luijt <bob.van.luijt@ing.nl>
 */

/**
 * Insert required modules
 */
var gulp 		= require('gulp'),
	eslint  	= require('gulp-eslint'),
	stylish 	= require('jshint-stylish'),
	rename 		= require('gulp-rename'),
	uglify 		= require('gulp-uglify'),
	concat 		= require('gulp-concat'),
	clean 		= require('gulp-clean'),
	nightwatch 	= require('gulp-nightwatch');


/**
 * Set config variables
 */
var config = {
	lushJs: 	['./src/lush.js'],
	lushJsDist: ['./dist/lush.min.js'],
	distFolder: './dist/',
	distJs: 	[
					'./node_modules/webcomponentsjs/micro.js',
					'./node_modules/html2canvas/dist/html2canvas.js',
					'./node_modules/showdown/dist/showdown.js',
					'./node_modules/screenfull/dist/screenfull.js',
					'./node_modules/to-markdown/dist/to-markdown.js',
					'./src/lush.js'
				]
}

/**
 * JSHint
 */
gulp
	.task('eslint', function(){
		return gulp
				.src( config.lushJs )
				.pipe( eslint() )
	})

/**
 * Create a DIST file
 */
gulp
	.task('dist', ['eslint'], function(){
    	return gulp
	        		.src( config.distJs )
				    .pipe(
				    	concat( 'lush.js' )
				    )
				    .pipe(
				    	gulp
				    		.dest( config.distFolder )
				    )
	})

/**
 * Uglify JS
 */
gulp
	.task('uglify', ['dist'], function(){
		return gulp
				.src( './dist/lush.js' )
				.pipe(
					gulp
						.dest( config.distFolder )
				)
				.pipe(
		        	rename('lush.min.js')
		        )
			    .pipe(
			    	uglify()
			    )
			    .pipe(
			    	gulp
			    		.dest( config.distFolder )
			    )
})

/**
 * Nightwatch
 */
gulp.task('nightwatch', ['uglify'], function() {
  	return gulp.src('')
	    .pipe(nightwatch({
	    	configFile: 'tests/nightwatch.json'
	    }));
});

/**
 * Cleanup
 */
gulp
	.task('clean', ['uglify'], function(){
		/*
		return gulp
			.src( config.distFolder + 'lush.js' )
			.pipe(
				clean()
			)
		*/
	})

/**
 * Default Task
 */
gulp
	.task('default', ['eslint', 'dist', 'uglify', 'clean'])