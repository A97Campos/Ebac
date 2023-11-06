const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const imagemin = require("gulp-imagemin");

function styles() {
    return gulp.src("src/styles/*.scss").pipe(sass({outputStyle: "compressed"})).pipe(gulp.dest("destino/css"));
}

function images() {
    return gulp.src("src/images/**/*").pipe(imagemin()).pipe(gulp.dest("destino/images"));
}

exports.default = gulp.parallel(styles, images);
exports.watch = function() {
    gulp.watch("src/styles/*.scss", gulp.parallel(styles))
};
