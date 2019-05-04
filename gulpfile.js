const gulp = require('gulp');
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");

const babel = require('gulp-babel');
const watch = require('gulp-watch'); // 检测文件变化
const rollup = require('gulp-rollup'); // 流清晰
const replace = require('rollup-plugin-replace');
// const eslint = require('gulp-eslint');
const tslint = require('gulp-tslint');

let entry = './src/server/**/*.ts';


function buildDev() {
  return gulp.watch(entry, {
    ignoreInitial: false
  },
    function () {
      tsProject.src()
        .pipe(tsProject(entry))
        .pipe(babel({
          babelrc: false, // 使项目中的 babelrc 文件不生效
          plugins: ["transform-es2015-modules-commonjs"] // 把 Module 转化为 require
        }))
        .pipe(gulp.dest('dist'))
    }
  )
}

// 上线环境
function buildProd() {
  return tsProject.src()
    .pipe(tsProject(entry))
    .pipe(babel({
      babelrc: false, // 使项目中的 babelrc 文件不生效
      ignore: ['./src/server/config/*.js'],
      plugins: ["transform-es2015-modules-commonjs"] // 把 Module 转化为 require
    }))
    .pipe(gulp.dest('dist'))
}

// 代码检查
function buildTsLint() {
  return gulp.src(entry)
    .pipe(tslint({
      formatter: "stylish"
    }))
    .pipe(tslint.report())
}

// 清洗环境
function buildConfig() {
  return tsProject.src()
    .pipe(tsProject(entry))
    .pipe(rollup({
      output: {
        format: 'cjs'
      },
      plugins: [
        replace({
          'process.env.NODE_ENV': JSON.stringify('production')
        })
      ],
      input: './src/server/config/index.js',
    }))
    .pipe(gulp.dest('dist'))
}

let build = null;
if (process.env.NODE_ENV === 'development') {
  build = gulp.series(buildDev);
}
if (process.env.NODE_ENV === 'production') {
  build = gulp.series(buildProd, buildConfig);
}
if (process.env.NODE_ENV === 'lint') {
  build = gulp.series(buildTsLint);
}

gulp.task('default', build);
