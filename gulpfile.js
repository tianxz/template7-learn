var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('default', ['copy']);

gulp.task('start', function () {
    browserSync.init({
        server: {
            baseDir: 'src/'
        }
    })
});

gulp.task('copy', function () {
    gulp.src([vendorSrc('requirejs/require.js')])
        .pipe(gulp.dest(vendorTar('/requirejs')));

    gulp.src([vendorSrc('text/text.js')])
        .pipe(gulp.dest(vendorTar('/requirejs-text')));

    gulp.src([vendorSrc('Template7/dist/*')])
        .pipe(gulp.dest(vendorTar('/template7')));
});

var vendorSrc = function (name) {
    return 'bower_components/' + name;
};

var vendorTar = function (name) {
    return 'src/vendor/' + name;
};