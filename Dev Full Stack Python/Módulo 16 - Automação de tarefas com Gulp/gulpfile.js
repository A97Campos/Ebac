const gulp = require("gulp");

function teste(callback){
    console.log("Executando o Gulp!");
    callback();
}

function dizOi(callback) {
    console.log("Olá Gulp !");
    tchau();
    callback();
}

function tchau() {
    console.log("Tchau Gulp !")
}

exports.default = gulp.series(teste, dizOi);
//exports.default = gulp.parallel(teste, dizOi); faz de forma paralela
exports.dizOi = dizOi;
