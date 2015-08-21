module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower: {
      install: {
        options: {
          install: true,
          copy: false,
          targetDir: './libs',
          cleanTargetDir: true
        }
      }
    },
    // jshint: {
    //   all: [ 'Gruntfile.js', 'js/*.js', 'js/**/*.js' ]
    // },
    karma: {
      options: {
        configFile: 'config/karma.conf.js'
      },
      unit: {
        singleRun: true
      },

      continuous: {
        singleRun: false,
        autoWatch: true
      }
    },
    // html2js: {
    //   dist: {
    //     src: [ 'partials/*.html' ],
    //     dest: 'tmp/templates.js'
    //   }
    // },
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [ 'js/*.js', 'tmp/*.js' ],
        dest: 'dist/app.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'dist/app.js': [ 'dist/app.js' ]
        },
        options: {
          mangle: false
        }
      }
    },
    clean: {
      temp: {
        src: [ 'tmp' ]
      }
    },
    watch: {
      dev: {
        files: [ 'Gruntfile.js', 'js/*.js', '*.html' ],
        tasks: [ 'karma:unit', 'concat:dist', 'clean:temp' ],
        options: {
          atBegin: true
        }
      },
      min: {
        files: [ 'Gruntfile.js', 'js/*.js', '*.html' ],
        tasks: [ 'karma:unit', 'concat:dist', 'clean:temp', 'uglify:dist' ],
        options: {
          atBegin: true
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
          port: 8080
        }
      }
    }
  });
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-html2js');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-bower-task');
  grunt.loadNpmTasks('grunt-karma');

  grunt.registerTask('dev', [ 'bower', 'connect:server', 'watch:dev' ]);
  // grunt.registerTask('test', [ 'bower', 'jshint', 'karma:continuous' ]);
  grunt.registerTask('minified', [ 'bower', 'connect:server', 'watch:min' ]);
};