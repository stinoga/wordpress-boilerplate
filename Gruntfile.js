module.exports = function(grunt) {

  grunt.initConfig({

    // Watches for changes and runs tasks
    // Livereload is setup for the 35729 port by default
    watch : {
      sass : {
        files : ['scss/**/*.scss'],
        tasks : ['sass:dev', 'autoprefixer'],
        options : {
          livereload : 35729
        }
      },
      js : {
        files : ['js/**/*.js'],
        tasks : ['jshint'],
        options : {
          livereload : 35729
        }
      },
      php : {
        files : ['**/*.php'],
        options : {
          livereload : 35729
        }
      }
    },

    // JsHint your javascript
    jshint : {
      all : ['js/*.js', '!js/modernizr.js', '!js/*.min.js', '!js/vendor/**/*.js'],
      options : {
        browser: true,
        curly: false,
        eqeqeq: false,
        eqnull: true,
        expr: true,
        immed: true,
        newcap: true,
        noarg: true,
        smarttabs: true,
        sub: true,
        undef: false
      }
    },

    // Dev and production build for sass
    sass : {
      production : {
        files : [
          {
            src : ['**/*.scss', '!**/_*.scss'],
            cwd : 'scss',
            dest : 'css',
            ext : '.css',
            expand : true
          }
        ],
        options : {
          style : 'compressed',
          compass: true
        }
      },
      dev : {
        files : [
          {
            src : ['**/*.scss', '!**/_*.scss'],
            cwd : 'scss',
            dest : 'css',
            ext : '.css',
            expand : true
          }
        ],
        options : {
          style : 'expanded',
          compass: true
        }
      }
    },

    // Auto prefixer settings for browser prefixes
    autoprefixer: {
      options: {
        browsers: ['last 2 versions']
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'css',
          src: '**/*.css',
          dest: 'css'
        }]
      }
    },

    // Image min
    imagemin : {
      production : {
        files : [
          {
            expand: true,
            cwd: 'images',
            src: '**/*.{png,jpg,jpeg}',
            dest: 'images'
          }
        ]
      }
    },

    // SVG min
    svgmin: {
      production : {
        files: [
          {
            expand: true,
            cwd: 'images',
            src: '**/*.svg',
            dest: 'images'
          }
        ]
      }
    },

  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Build task
  grunt.registerTask('build', ['jshint', 'sass:production', 'imagemin:production', 'svgmin:production']);

  // Template Setup Task
  grunt.registerTask('setup', ['sass:dev'])

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

};
