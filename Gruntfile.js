
module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    /* build html files from ejs and templates */
  	ejs: {
  		en: {
        options: grunt.util._.merge(grunt.file.readJSON('content_en.json'), {
          /*url: function(url) {return 'file:///' + __dirname + '/dist/' + url;}*/
          url: function(url) {return '/' + url;}
        }),
  			src: ['*.ejs', '!partials/**/*'],
  			dest: 'dist/en/',
  			expand: true,
  			ext: '.html'
  		},
      fr: {
        options: grunt.util._.merge(grunt.file.readJSON('content_fr.json'), {
          /*url: function(url) {return 'file:///' + __dirname + '/dist/' + url;}*/
          url: function(url) {return '/' + url;}
        }),
        src: ['*.ejs', '!partials/**/*'],
        dest: 'dist/',
        expand: true,
        ext: '.html'
      }
  	},

    /* copy res forlder */
    copy: {
      main: {
        files: [
          // includes files within path and its sub-directories
          {expand: true, src: ['res/**', 'fonts/**'], dest: 'dist/'}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-ejs');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['ejs', 'copy']);
};
