
// kye
var kyes = require("kyes-toolkit")
var gulp = require("gulp")
var jade = require("gulp-jade")
var stylus = require("gulp-stylus")
var prefix = require("gulp-autoprefixer")

var config = require("./config")

gulp.task("default", ["components", "styles", "scripts", "index"], function() {

	gulp.watch("src/components/**/**", ["components", "index"])
	gulp.watch("src/scripts/**/**", ["scripts", "index"])
	gulp.watch("src/styles/**/**", ["styles", "index"])
	gulp.watch("src/index.jade", ["index"])

})

gulp.task("components", function() {

	return gulp.src("src/components/*/*.jade")
	.pipe(jade(config.jade))
	.pipe(gulp.dest("dist/components/"))

})
gulp.task("scripts", function() {

	return gulp.src("src/scripts/*.js")
	.pipe(gulp.dest("dist/scripts/"))

})
gulp.task("styles", function() {

	return gulp.src("src/styles/*.styl")
	.pipe(stylus(config.stylus))
	.pipe(prefix(config.autoprefixer))
	.pipe(gulp.dest("dist/styles/"))

})
gulp.task("index", function() {

	config.jade.locals = {

		components:[

			"font-roboto",
			"core-header-panel",
			"core-toolbar",
			"paper-tabs"

		]

	}

	return gulp.src("src/index.jade")
	.pipe(jade(config.jade))
	.pipe(gulp.dest("dist/"))

})
