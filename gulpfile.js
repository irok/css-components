'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('build', function() {
    return gulp.src('./sass/site/**/*.scss')
        .pipe(sass({
            includePaths: ['./sass/'],
            outputStyle: 'expanded',
            importer: [
                require('sass-module-importer')()
            ]
        }))
        .pipe(gulp.dest('./css/'));
});
