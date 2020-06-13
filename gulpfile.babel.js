import gulp from "gulp";
import autoprefixer from "gulp-autoprefixer";
import csso from "gulp-csso";
import concat from "gulp-concat";
import sass from "gulp-sass";
import pug from "gulp-pug";
import del from "del";
import ghPages from "gulp-gh-pages";
import webserver from "gulp-webserver2";
import babelify from "babelify";
import bro from "gulp-bro";
import uglify from "gulp-uglify";

sass.compiler = require("node-sass");

const paths = {
  scss: {
    src: "src/assets/scss/**/*.scss",
    dest: "build",
    watch: "src/assets/scss/**/*.scss",
  },
  configs: {
    src: "src/assets/configs/**/*",
    dest: "build/configs",
  },
  js: {
    src: "src/assets/js/*.js",
    dest: "build",
    watch: "src/assets/js/**/*.js",
  },
  pug: {
    src: "src/views/**/index.pug",
    dest: "build",
    watch: "src/views/**/*.pug",
  },
};

function clean() {
  return del(["build"]);
}

function publishClean() {
  return del([".publish"]);
}

function js() {
  return gulp
    .src(paths.js.src)
    .pipe(
      bro({
        transform: [
          babelify.configure({
            presets: ["@babel/preset-env"],
          }),
        ],
      })
    )
    .pipe(uglify())
    .pipe(concat("main.js"))
    .pipe(gulp.dest(paths.js.dest));
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

function configs() {
  return gulp.src(paths.configs.src).pipe(gulp.dest(paths.configs.dest));
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
  return gulp.src("build").pipe(
    webserver({
      open: true,
    })
  );
}

function _deploy() {
  return gulp.src("build/**/*").pipe(ghPages());
}

export const dev = gulp.series([
  clean,
  styles,
  template,
  js,
  configs,
  server,
  watch,
]);

export const build = gulp.series([clean, styles, template, js, configs]);

export const deploy = gulp.series([publishClean, build, _deploy]);
