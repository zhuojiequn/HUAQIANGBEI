var gulp=require('gulp');//引入gulp
var jshint=require('gulp-jshint');//引入js错误检测
var concat=require('gulp-concat');//引入代码合并的插件
var uglify=require('gulp-uglify');//引入代码压缩的插件
var rename=require('gulp-rename');//引入代码重命名的插件
var livereload = require('gulp-livereload');

gulp.task('watch', function() { //这里的watch，是自定义的，携程live或者别的也行
    livereload.listen();//这里需要注意！旧版使用var server = livereload();已经失效
    // app/**/*.* 的意思是 app 文件夹下的 任何文件夹 的 任何文件
    gulp.watch('*', function(event) {
        livereload.changed(event.path);
    });
});
/*gulp.task('copyjs',function(){
	gulp.src('js/*.js')//引入文件
	.pipe(gulp.dest('script/'));//管道加载--->输出路径
});
gulp.task('watchjs',function(){
	gulp.watch('js/*.js',function(){
		gulp.run('copyjs');
	});
});*/
//3.js语法检测
/*gulp.task('checkjs',function(){
	gulp.src('js/*.js')
	.pipe(jshint())//引入插件
	.pipe(jshint.reporter('gulp-jshint-html-reporter', { filename: 'error.html' }));//输出错误报告文件
});*/

//4.代码合并
gulp.task('alljs',function(){
    gulp.src('js/*.js')
        .pipe(concat('all.js'))//重命名
        .pipe(gulp.dest('script/'));
});

//5.代码的压缩uglify