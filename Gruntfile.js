module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            options: {
                // 連結される各ファイル内の間に配置出力する文字列を定義
                separator: ';'
            },
            dist: {
                // 連結するファイル
                src: ['src/**/*.js', 'main.js'],
                // 結果として生成されるJSファイル
                dest: 'dist/app.js'
            }
        },
        uglify: {
            options: {
                // バナーは出力時に先頭に挿入されます
                banner: '/*! created  <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                // 変数名を短くする
                mangle: true,
                // 冗長になっている書き方を短くまとめてくれるよう。
                compress: true
            },
            dist: {
                files: {
                    'dist/app.min.js': ['dist/app.js']
                }
            }
        },
        watch: {},
    });

    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
     grunt.registerTask('build', ['concat', 'uglify']);
     grunt.registerTask('cc', ['concat']);
     grunt.registerTask('ug', ['uglify']);
};
