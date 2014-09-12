module.exports = function(grunt) {
    grunt.initConfig({
        neuter: {
            application: {
                options: {
                    includeSourceMap: true
                },
                dest: 'build/guesthouse.js',
                src: 'js/app.js'
            }
        },
        handlebars: {
            all: {
                options: {
                    namespace: "Templates"
                },
                files: {
                    "build/templates.js": ["templates/**/*.hbs"]
                }
            }
        },
        watch: {
            templates: {
                files: ['templates/**/*.hbs'],
                tasks: ['handlebars']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-neuter');
    grunt.registerTask('default', [
        'handlebars',
        'neuter',
        'watch'
    ]);
};
