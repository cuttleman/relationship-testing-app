import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import concat from "gulp-concat";
import imagemin from "gulp-imagemin";
import sass from "gulp-sass";
import pug from "gulp-pug";
import del from "del";
import ghPages from "gulp-gh-pages";
import webserver from "gulp-webserver2";

sass.compiler = require("node-sass");

const paths = {
  img: {
    src: "src/images/**/*",
    dest: "bundle/images",
    watch: "src/images/**/*",
  },
  scss: {
    src: "src/assets/scss/**/*.scss",
    dest: "bundle",
    watch: "src/assets/scss/**/*.scss",
  },
  font: {
    src: "src/assets/fonts/*",
    dest: "bundle/fonts",
  },
  js: {
    src: "src/assets/js/*.js",
    dest: "bundle",
    watch: "src/assets/js/**/*.js",
  },
  pug: {
    src: "src/views/**/*.pug",
    dest: "bundle",
    watch: "src/views/**/*.pug",
  },
};

function clean() {
  return del(["bundle"]);
}

function publishClean() {
  return del([".publish"]);
}

function fonts() {
  return gulp.src(paths.font.src).pipe(gulp.dest(paths.font.dest));
}

function js() {
  return gulp
    .src(paths.js.src)
    .pipe(concat("main.js"))
    .pipe(gulp.dest(paths.js.dest));
}

function image() {
  return gulp
    .src(paths.img.src)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.img.dest));
}

function styles() {
  return gulp
    .src(paths.scss.src)
    .pipe(sass().on("error", sass.logError))
    .pipe(
      autoprefixer({
        overrideBrowserlist: ["last 2 versions"],
      })
    )
    .pipe(concat("styles.css"))
    .pipe(csso())
    .pipe(gulp.dest(paths.scss.dest));
}

function template() {
  return gulp.src(paths.pug.src).pipe(pug()).pipe(gulp.dest(paths.pug.dest));
}

function watch() {
  gulp.watch(paths.js.watch, js);
  gulp.watch(paths.scss.watch, styles);
  gulp.watch(paths.pug.watch, template);
}

function server() {
  return gulp.src("bundle").pipe(
    webserver({
      livereload: true,
      open: true,
    })
  );
}

function _deploy() {
  return gulp.src("bundle/**/*").pipe(ghPages());
}

export const img = gulp.series([image]);

export const dev = gulp.series([
  clean,
  fonts,
  styles,
  template,
  js,
  server,
  watch,
]);

const build = gulp.series([clean, styles, template, js, image]);

export const deploy = gulp.series([build, publishClean, _deploy]);
