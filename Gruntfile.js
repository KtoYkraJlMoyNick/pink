'use strict';

module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt);

  var config = {
    pkg: grunt.file.readJSON('package.json'),
	copy: {
		build: {
		files: [{
			expand: true,
			cwd: "source",
			src: [
			 "img/**",
			 "js/*.js",
			 "form.html",
			 "index.html"
			],
			dest: "build"
			}]
		}
	},
	
	clean: {
		build: ["build"]
	},
	
    less: {
      style: {
        files: {
          ["build/css/style.css"]: ["source/less/style.less"]
        }
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'})
        ]
      },
      style: {
        src: ["build/css/*.css"]
      }
    },
	
	cmq: {
		style: {
			files: {
				["build/css/style.css"]: ["build/css/style.css"]				
			}
		}
	},
	
	cssmin: {
		style: {
			files: {
				["build/css/style.min.css"]: ["build/css/style.css"]	
			}
		}
	},
	
	concat: {
		style: {
			files: {
				["build/js/script-concat.js"]: ["build/js/script.js","build/js/range.js"]
			}
		}
	},
	
	uglify: {
		style:{
			options: {
				mangle:false
			},
			files: {
				["build/js/script.min.js"]: ["build/js/script.js","build/js/range.js"]
			}
		}
	},
	
	minified: {
		style: {
			files: {
				src: [
					"build/js/script.js",
					"build/js/range.js"
				],
				dest: "build/js/script.min.js"
			},
			options: {
				allinone: true
			}
		}
	},
	
    watch: {
      style: {
        files: ['less/**/*.less'],
        tasks: ['less', 'postcss'],
        options: {
          spawn: false,
          livereload: true
        }
      }
    }
  };

  config = require('./.gosha')(grunt, config);

  grunt.initConfig(config);
  grunt.registerTask("build", [
	"clean",
	"copy",
	"less",
	"cmq",
	"postcss",
	"cssmin",
	"uglify"
  ]);
};
