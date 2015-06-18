module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      pivotal: {
        src: 'src/**/*.js',
        options: {
          specs: 'spec/*spec.js',
          helpers: 'spec/*helper.js',
          vendor: [
            "bower_components/jquery/dist/jquery.js"
          ]
        }
      }
    }
  });

  // Register tasks.
  grunt.loadNpmTasks('grunt-contrib-jasmine');

  // Default task.
  grunt.registerTask('default', 'jasmine');
};
