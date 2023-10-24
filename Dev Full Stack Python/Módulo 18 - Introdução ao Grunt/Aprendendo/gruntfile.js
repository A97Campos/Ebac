module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        //adicionar o less
        less: {
            development: {
                //caminho
                files: {
                    "build/less/main.css" : "source/less/main.less"
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    "build/less/main.min.css": "source/less/main.less"
                }
            }
        },
        sass: {
            dist: {
                options: {
                    style: "compressed"
                },

                files: {
                    "build/sass/index.css": "source/sass/index.scss"
                }
            }
        },
        concurrent: {
            target: ["minhaTarefa", "less", "sass"]
        }
    })

    grunt.registerTask("minhaTarefa", function(){
        //Conteúdo da Tarefa
        const done = this.async();
        setTimeout(function() {
            console.log("olá Grunt");
            done();
        }, 1000);
    })

    /* adicionar outra tarefa
    grunt.registerTask("outraTarefa", function() {
        const outra = this.async();
        setTimeout(function() {
            console.log("Olá outra vez");
            outra();
        }, 1000)
    })
    */

    //adicionar o less depois de intalar (npm i --save-dev grunt-contrib-less)
    grunt.loadNpmTasks("grunt-contrib-less");
    //adicionar o sass depois de instalar
    grunt.loadNpmTasks("grunt-contrib-sass");
    //adicionar o concurrent
    grunt.loadNpmTasks("grunt-concurrent");
    
    /*
        uma tarefa pode chamar outra
    grunt.registerTask("default", ["minhaTarefa", "outraTarefa"]);
        ou para chamar uma tarefa
    grunt.registerTask("default",["minhaTarefa"])
    */

    //para chamar o less
    //grunt.registerTask("default", ["less", "sass"]);
    
    //para ativar o concurrent
    grunt.registerTask("default", ["concurrent"]);
}