module.exports = function(grunt) {

    require('time-grunt')(grunt);

    var devmode = grunt.option('dev');

    grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      compass: {
        dist: {
          options: {
            sassDir: 'colorscheme/assets/sass',
            cssDir: 'colorscheme/assets/css'
          }
        }
      },

      sass: {
        dist: {
          files: {
           'wp-content/themes/refugees/build/refugees-admin-theme-unprefixed.css': 'wp-content/themes/refugees/assets/sass/cms/refugees-admin-theme.scss'
          }
        }
      },

      autoprefixer: {
        options: {
          browsers: ['last 2 versions', '> 1%']
        },

        dist: {
          expand: true,
          flatten: true,
          files: {
            'wp-content/themes/refugees/build/prefixed/refugees-admin-theme.css': 'wp-content/themes/refugees/build/refugees-admin-theme-unprefixed.css'
          }
        }
      },

      cssmin: {
        dist: {
          files: {
          'wp-content/plugins/refugees-admin-theme/refugees-admin-theme.css': 'wp-content/themes/refugees/build/prefixed/refugees-admin-theme.css'
          }
        }
      },

      watch: {
        // options: {
        //   livereload: true,
        // },

        scss: {
            files: ['wp-content/themes/refugees/assets/sass/**/*.scss'],
            tasks: ['scss','autoprefixer','cssmin'],
            options: {
              spawn: false
            }
        },

        css: {
        files: 'colorscheme/assets/**/*.scss',
          tasks: ['compass']
        },

      },

  });

    grunt.registerTask('build', ['compass', 'sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('scss', ['compass', 'sass', 'autoprefixer', 'cssmin']);
    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('dev', ['watch']);

    grunt.loadNpmTasks('grunt-contrib-compass', 'grunt-contrib-sass','grunt-contrib-watch','matchdep','grunt-autoprefixer');
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};
