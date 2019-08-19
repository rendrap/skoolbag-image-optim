const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const cache = require('gulp-cache');
const newer = require('gulp-newer');
const size = require('gulp-size');
const mozjpeg = require('imagemin-mozjpeg')
const pngquant = require('imagemin-pngquant');
const zopfli = require('imagemin-zopfli');
const ghPages = require('gulp-gh-pages');

gulp.task('lossy-images-80', () => {
  gulp.src('images/**/*')
    .pipe(newer('dist/images-lossy-80/'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true,optimizationLevel:3}),
      pngquant({speed: 1, quality: [0.8, 0.8],verbose: true}),
      zopfli({more: true}),
      mozjpeg({quality: 80})
    ],
    { verbose: true }
    ))
    .pipe(gulp.dest('dist/images-lossy-80/'))
    .pipe(size({ title: 'images size' }));
});

gulp.task('lossy-uploads-80', () => {
  gulp.src('uploads/**/*')
    .pipe(newer('dist/uploads-lossy-80/'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true,optimizationLevel:3}),
      pngquant({speed: 1, quality: [0.8, 0.8],verbose: true}),
      zopfli({more: true}),
      mozjpeg({quality: 80})
    ],
    { verbose: true }
    ))
    .pipe(gulp.dest('dist/uploads-lossy-80/'))
    .pipe(size({ title: 'images size' }));
});

gulp.task('lossy-uploads-50', () => {
  gulp.src('uploads/**/*')
    .pipe(newer('dist/uploads-lossy-50/'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true,optimizationLevel:3}),
      pngquant({speed: 1, quality: [0.5, 0.5],verbose: true}),
      zopfli({more: true}),
      mozjpeg({quality: 50})
    ],
    { verbose: true }
    ))
    .pipe(gulp.dest('dist/uploads-lossy-50/'))
    .pipe(size({ title: 'images size' }));
});

gulp.task('lossy-uploads-10', () => {
  gulp.src('uploads/**/*')
    .pipe(newer('dist/uploads-lossy-10/'))
    .pipe(imagemin([
      imagemin.gifsicle({interlaced: true,optimizationLevel:3}),
      pngquant({speed: 1, quality: [0.1, 0.1],verbose: true}),
      zopfli({more: true}),
      mozjpeg({quality: 10})
    ],
    { verbose: true }
    ))
    .pipe(gulp.dest('dist/uploads-lossy-10/'))
    .pipe(size({ title: 'images size' }));
});


gulp.task('lossless-uploads', function(){
  return gulp.src('images/**/*')
    .pipe(newer('dist/images-lossless/'))
    .pipe(imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng(),
          imagemin.svgo({ plugins: [{ cleanupIDs: false }] })
        ],
        { verbose: true }
      ))
    .pipe(gulp.dest('dist/images-lossless/'))
    .pipe(size({ title: "images size" }));
});

gulp.task('lossless-uploads', function(){
  return gulp.src('uploads/**/*')
    .pipe(newer('dist/uploads-lossless/'))
    .pipe(imagemin(
        [
          imagemin.gifsicle({ interlaced: true }),
          imagemin.jpegtran({ progressive: true }),
          imagemin.optipng(),
          imagemin.svgo({ plugins: [{ cleanupIDs: false }] })
        ],
        { verbose: true }
      ))
    .pipe(gulp.dest('dist/uploads-lossless/'))
    .pipe(size({ title: 'images size' }));
});

gulp.task('clear', () =>
    cache.clearAll()
);


gulp.task('lossless', ['lossless-images','lossless-uploads']);
gulp.task('lossy-80', ['lossy-images-80','lossy-uploads-80']);
