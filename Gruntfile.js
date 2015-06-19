module.exports = function(grunt) {

  grunt.initConfig({
    uglify: {
       bower: {
        options: {
          mangle: false,
          compress: true
        },
        files: {
          'dist/bridger.min.js': 'src/bridger.js'
        }
      }
    },
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*spec.js',
          helpers: 'spec/*helper.js',
          vendor: [
            "bower_components/jquery/dist/jquery.js",
            "bower_components/jasmine-jquery/lib/jasmine-jquery.js"
          ]
        }
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Task defining.
  grunt.registerTask('default', 'jasmine');
  grunt.registerTask('build', ['uglify']);
};