module.exports = function (grunt) {
    grunt.initConfig({
        watch: {
            src: {
                files: ['**/*.scss', '**/*.php'],
                tasks: ['compass:dev']
            },
            options: {
                //livereload: true,
            },
            jst: {
                files: [
                    'js/templates/*.ejs'
                ],
                tasks: ['jst']
            }
        },

        compass: {
            dev: {
                options: {
                    sassDir: 'scss',
                    cssDir: 'css',
                    imagesPath: 'images',
                    noLineComments: false,
                    outputStyle: 'compressed'
                }
            }
        },

        jst: {
            compile: {
                files: {
                    'js/templates.js': ['js/templates/*.ejs']
                }
            }
        },

        jshint: {
            options: {
                forin: true,
                eqeqeq: true,
                undef: true,
                curly: true,
                browser: true,
                latedef: true,
                newcap: true,
                scripturl: true,

                globals: {
                    jQuery: true,
                    Drupal: true,
                    Modernizr: true
                }
            },

            all: ['js/*.js']
        }

    });

    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jst');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    grunt.registerTask('compilejst', function () {
        grunt.file.write('js/templates.js', 'this.JST = this.JST || {};');
        grunt.task.run(['jst']);
    });

};
