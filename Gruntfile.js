module.exports = function(grunt) {
    
    //Project config
    grunt.initConfig({
        imagemin: {
            main: {
                files: [{
                    expand: true,
                    cwd: 'src/img/',
                    src: ['**/*.{png,jpg,gif,svg}'],
                    dest: 'tmpl/img/'
                }]
            }
        },
        concat: {
            js: {
                files: [{
                    src: ['src/js/jquery-2.2.4.min.js', 'src/js/jquery-ui.min.js', 'src/js/jquery.maskedinput.js', 'src/js/main.js'],
                    dest: 'src/compile.js'                    
                }]
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'src/css/header.css': 'src/styles/header.scss',
                    'src/css/style.css': 'src/styles/style.scss',
                    'src/css/font.css': 'src/styles/font.scss'
                }
            }
        },
        uglify: {
            js: {
                files: [{
                    src: 'src/compile.js',
                    dest: 'tmpl/js/script.min.js'
                }]
            }            
        },
        cssmin: {
            header: {
                files: [{
                    src: 'src/css/header.css',
                    dest: 'src/html/include/header.min.css'
                }]
            },
            style: {
                files: [{
                    src: 'src/css/style.css',
                    dest: 'tmpl/css/style.min.css'
                }]
            },
            font: {
                files: [{
                    src: 'src/css/font.css',
                    dest: 'tmpl/css/font.min.css'
                }]
            }
        },
        includereplace: {
            your_target: {
                cwd: 'src/html/',
                expand: true,
                src: '*.html',
                dest: ''
            }
        },
        watch: {
            images: {
                files: ['src/img/**/*.{png,jpg,gif,svg}'],
                tasks:['imagemin']
            },
            concatJs: {
                files: ['src/js/**/*.js'],
                tasks: ['concat:js']
            },
            scss: {
                files: ['src/styles/**/*.scss'],
                tasks: ['sass','cssmin','includereplace']
            },
            js: {
                files: ['src/compile.js'],
                tasks: ['uglify']
            },
            html: {
                files: ['src/html/*.html'],
                tasks: ['includereplace']
            },
            header: {
                files: ['src/html/include/*.*'],
                tasks: ['includereplace']
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-include-replace');
    
    grunt.registerTask('default', ['imagemin', 'concat', 'sass', 'uglify', 'cssmin', 'includereplace', 'watch']);
    
}