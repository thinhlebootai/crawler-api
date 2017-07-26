var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify');

gulp.task('css',function(){
    return gulp.src('app/static/_css/*.css')
        .pipe(concat('style.css'))
        .pipe(cleanCSS())
        .pipe(gulp.dest('app/static/css'))
});

gulp.task('js',function(){
    //define scripts as array so we can prioritize them
    return gulp.src([
        'app/static/_js/main.js'
            ]
    )
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('app/static/js'))
});

gulp.task('compass', function() {
  gulp.src('./app/static/scss/*.scss')
    .pipe(compass({
      css: './app/static/css',
      sass: './app/static/scss',
      //uncomment if you would like to include susy grids
      //require: ['susy']
    }))
    .pipe(gulp.dest('app/static/css'));
});



gulp.task('default',function(){
    gulp.start('compass','css','js');
    gulp.watch('gulpfile.js');
    gulp.watch('app/static/_css/*.css',['css']);
    gulp.watch('app/static/_js/*.js',['js']);
    gulp.watch('app/static/scss/*.scss',['compass']);

})