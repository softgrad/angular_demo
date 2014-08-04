module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta: {
      banner: '/*!\n' +
        ' * <%= pkg.name %>\n' +
        ' * <%= pkg.description %>\n' +
        ' * <%= pkg.url %>\n' +
        ' * @author <%= pkg.author %>\n' +
        ' * @version <%= pkg.version %>\n' +
        ' * <%= pkg.license %> licensed.\n' +
        ' */\n'
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      '<%= paths.app %>': {
        src: ['source/js/{,**/,**/**/,**/**/**/}*.js']
      }
    },

    sass: {
      development: {
        options: {
          loadPath: ["source/scss", "vendor/bootstrap-sass/lib", "vendor/bourbon/dist"],
          banner: '<%= meta.banner %>'
        },
        files: {
          "build/css/style.css": "source/scss/style.scss"
        }
      },
      production: {
        options: {
          loadPath: ["source/scss", "vendor/bootstrap-sass/lib", "vendor/bourbon/dist"],
          style: "compress",
          banner: '<%= meta.banner %>'
        },
        files: {
          "build/css/style.css": "source/scss/style.scss"
        }
      }
    },

    requirejs: {
      compile: {
        options: {
          baseUrl: 'source/js',
          mainConfigFile: 'source/js/main.js',
          out: 'build/js/script.js',
          name: 'main',
          useStrict: true,
          wrap: {
            start: '<%= meta.banner %>' + '\n;(function(window, document, undefined){',
            end: '})(this, document);'
          },
        }
      },
      build: {
        options: {
          baseUrl: 'source/js',
          mainConfigFile: 'source/js/main.js',
          out: 'build/js/script.js',
          name: 'main',
          optimize: 'uglify',
          useStrict: true,
          wrap: {
            start: '<%= meta.banner %>' + '\n;(function(window, document, undefined){',
            end: '})(this, document);'
          },
        }
      }
    },

    connect: {
      options: {
        port: 9000,
        livereload: 35729,
        hostname: 'localhost'
      },
      livereload: {
        options: {
          open: true,
          base: [
            '.tmp',
            './'
          ]
        }
      },
      build: {
        options: {
          protocol: 'http',
          open: 'http://localhost:9000/',
          base: 'build'
        }
      }
    },

    watch: {
      livereload: {
        options: {
          livereload: '<%= connect.options.livereload %>'
        },
        files: [
            'source/js/{,**/,**/**/,**/**/**/}*.js',
            'source/scss/{,*/}*.{scss,sass}',
            'source/img/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
            'source/js/**/**/{,templates/}*.html',
            'source/{,*/}*.html'
        ],
        tasks: ['build']
      }
    },

    clean: ['build'],

    copy: {
      index: {
        files: [{
          expand: true,
          cwd: 'vendor/bootstrap-sass/',
          src: ['fonts/**/*.*'],
          dest: 'build/',
          filter: 'isFile'
        }, {
          expand: true,
          cwd: 'vendor/requirejs/',
          src: ['require.js'],
          dest: 'build/js',
          filter: 'isFile'
        }, {
          expand: true,
          cwd: 'source/js/modules/',
          src: ['**/{,templates/}*.html'],
          flatten: true,
          dest: 'build/templates',
          filter: 'isFile'
        }, {
          expand: true,
          cwd: 'source/images/',
          src: ['**/*.*'],
          flatten: true,
          dest: 'build/images',
          filter: 'isFile'
        }, {
          expand: true,
          cwd: 'source/data/',
          src: ['**/*.*'],
          flatten: true,
          dest: 'build/data',
          filter: 'isFile'
        }]
      }
    },
    'string-replace': {
      inline: {
        options: {
          replacements: [{
            pattern: '<script data-main="js/main" src="../vendor/requirejs/require.js"></script>',
            replacement: '<script data-main="js/script" src="js/require.js"></script>'
          }]
        },
        files: {
          'build/index.html': 'source/index.html'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-string-replace');

  grunt.registerTask('build', [
    'clean',
    'copy',
    'string-replace',
    'jshint',
    'sass:development',
    'requirejs:compile'
  ]);

  grunt.registerTask('server', [
    'build',
    'connect:livereload',
    'watch'
  ]);
};
