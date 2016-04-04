const gulp = require('gulp')
const less = require('gulp-less')
const path = require('path')
const babel = require('gulp-babel')
const react = require('gulp-react')
const eslint = require('gulp-eslint')
const stripDebug = require('gulp-strip-debug')

gulp.task('default',['lint'], function() {
  // place code for your default task here
	var stream = gulp.src('./js-compile/**/*.js')
  .pipe(babel({
	presets: ['es2015']
}))
	.pipe(gulp.dest('./dist/js'))
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
})

gulp.task('less', function() {
  // place code for your default task here
	var stream = gulp.src('./less/**/*.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes')]
	}))
	.pipe(gulp.dest('./dist/css'))
})

gulp.task('dev', function(){
	gulp.watch('./js-compile/**/*.js', function(event) {
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		var stream = gulp.src('./js-compile/**/*.js')
	.pipe(babel({
		presets: ['es2015']
	}))
	.pipe(gulp.dest('./dist/js'))
	})
	gulp.watch('./less/**/*.less', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		var streamLess = gulp.src('./less/**/*.less')
	.pipe(less({
		paths: [ path.join(__dirname, 'less', 'includes')]
	}))
	.pipe(gulp.dest('./dist/css'))
	})
	gulp.watch('./js-compile/react/**/*.jsx', function(event){
		console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
		var streamReact = gulp.src('./js-compile/react/**/*.jsx')
	.pipe(react())
	.pipe(gulp.dest('./dist/react'))
	})
})

gulp.task('lint', function () {
	return gulp.src(['**/*.js','!node_modules/**'])
	.pipe(eslint())
	.pipe(eslint.format())
	.pipe(eslint.failAfterError())
})
gulp.task('debug', function () {
	return gulp.src('app.js')
		.pipe(stripDebug())
		.pipe(gulp.dest('dist'))
})
