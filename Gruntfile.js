module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    jadeUsemin: {

      main: {
        options: {
          uglify: true,
          prefix: 'src/public/',
          targetPrefix: 'dist/public/'
        },
        files: [{
          src: 'src/views/index.jade',
          dest: 'dist/views/index.jade',
        }]
      }

    },

    clean: {
      build: ['dist']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.loadNpmTasks('grunt-jade-usemin');

  grunt.registerTask('default', [
    'clean',
    'jadeUsemin',
  ]);
};
