module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                src: 'src/index.html',
                dest: 'build/main.html'
            },
            fonts: {
                expand: true,
                cwd: 'src',
                src: 'fonts/*',
                dest: 'build/'
            },
            images: {
                expand: true,
                cwd: 'src',
                src: 'images/*',
                dest: 'build/'
            }
        },
        uglify: {
            build: {
                src: 'src/index.js',
                dest: 'build/main.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'uglify']);
};