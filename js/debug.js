/*global require */

var gulp = require('gulp');

gulp.task('html', function () {
    'use strict';
    if (location) {
        location.reload();
    }
});

gulp.task('js', function () {
    'use strict';
    if (location) {
        location.reload();
    }
});

gulp.task('scss', function () {
    'use strict';
    if (location) {
        location.reload();
    }
});

gulp.task('css', function () {
    'use strict';
    if (location) {
        location.reload();
    }
});

gulp.watch(['./css/*.css'], ['css']);
gulp.watch(['./css/*.scss'], ['scss']);
gulp.watch(['./js/*.js'], ['js']);
gulp.watch(['./html/*.html'], ['html']);
