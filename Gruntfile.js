module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
       bower: {
        options: {
          mangle: false,
          compress: true
        },
        files: {
          'dist/bridger.min.js': 'dist/bridger.js'
        }
      }
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*spec.js',
          // helpers: 'spec/*helper.js',
          vendor: [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/jasmine-jquery/lib/jasmine-jquery.js"
          ]
        }
      }
    },
    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src: ['src/bridger.js', 'src/bridger_jQuery.js'],
        dest: 'dist/bridger.js',
      },
    },
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // Task defining.
  grunt.registerTask('build', ['concat', 'uglify']);
  grunt.registerTask('default', ['build', 'jasmine']);
};
