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

    cssmin: {
      production: {
        files: {
          'css/main.css': ['css/main.css']
        }
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

    grunticon: {
      myIcons: {
        options: {
          src: "svg/",
          dest: "images/svg/",
          defaultWidth: "117px",
          defaultHeight: "50px"
        }
      }
    }

  });

  // Default task
  grunt.registerTask('default', ['watch']);

  // Build SVGs if needed
  grunt.registerTask('icon', ['grunticon']);

  // Build task
  grunt.registerTask('build', ['sass:production', 'imagemin:production', 'svgmin:production', 'autoprefixer', 'cssmin:production']);

  // Template Setup Task
  grunt.registerTask('setup', ['sass:dev'])

  // Load up tasks
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-grunticon');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-svgmin');

};
