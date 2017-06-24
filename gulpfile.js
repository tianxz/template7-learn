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
    //requirejs
    gulp.src([createPath.bower_components('requirejs/require.js')])
        .pipe(gulp.dest(createPath.vendor('/requirejs')));

    //requirejs-text
    gulp.src([createPath.bower_components('text/text.js')])
        .pipe(gulp.dest(createPath.vendor('/requirejs-text')));

    //template7
    gulp.src([createPath.bower_components('Template7/dist/*')])
        .pipe(gulp.dest(createPath.vendor('/template7')));

    //jquery
    gulp.src([createPath.bower_components('jquery/dist/*')])
        .pipe(gulp.dest(createPath.vendor('/jquery')));

    // jquery: {pathName: 'jquery', pathValue: 'vendor/jquery/jquery'},
});

var createPath = {
    bower_components: function (name) {
        return 'bower_components/' + name;
    },
    vendor: function (name) {
        return 'src/vendor/' + name;
    }
};