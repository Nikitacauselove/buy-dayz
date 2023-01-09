module.exports = function(grunt) {

    grunt.initConfig({
        copy: {
            main: {
                src: 'src/index.html',
                dest: 'build/main.html',
                options: {
                    process: function(content) {
                        const result = content
                            .replace('<link rel="stylesheet" href="index.css">', '<link rel="stylesheet" href="main.css">')
                            .replace('<script src="index.js"></script>', '<script src="main.js"></script>');

                        return result
                            .split(/\r?\n/)
                            .filter(line => !line.includes('<link rel="stylesheet" href="../node_modules/normalize.css/normalize.css">'))
                            .join('\n');
                    }
                }
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
        cssmin: {
            target: {
                files: [{
                    src: ['node_modules/normalize.css/normalize.css', 'src/index.css'],
                    dest: 'build/main.css',
                }]
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
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['copy', 'cssmin', 'uglify']);
};