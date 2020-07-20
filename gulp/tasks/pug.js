const gulp = require('gulp');
const htmlValidator = require('gulp-w3c-html-validator');
const plumber = require('gulp-plumber');
const pug = require('gulp-pug');
const argv = require('yargs').argv;
const gulpif = require('gulp-if');
const Fs = require('fs');

module.exports = function pug2html() {
  return gulp.src(['dev/pug/*.pug', 'dev/pug/pages/*.pug'], {base: 'dev/pug/'} )
    .pipe(plumber())
    .pipe(
      pug({
        pretty: true,
        locals: {reportData: JSON.parse(Fs.readFileSync('dev/mockData.json')) || []}
      })
    )
    .pipe(plumber.stop())
    .pipe(gulpif(argv.prod, htmlValidator()))
    .pipe(gulp.dest('dist'))
};
