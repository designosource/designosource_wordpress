const gulp = require("gulp"),
    util = require("gulp-util"),
    sass = require("gulp-sass"),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    log = util.log;

const sassFiles = "assets/sass/**/*.scss";

gulp.task("sass", function(){
    gulp.src(sassFiles)
        .pipe(sass({ style: 'expanded' }))
        .pipe(autoprefixer("last 3 version","safari 5", "ie 8", "ie 9", ""))
        .pipe(rename({suffix: '.min'}))
        .pipe(minifycss())
        .pipe(gulp.dest('public/css'));
});

gulp.task("default", function(){
    log("Watching scss files for modifications");
    gulp.watch(sassFiles, ["sass"]);
});

