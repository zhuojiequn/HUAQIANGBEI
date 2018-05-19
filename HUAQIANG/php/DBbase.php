<?php
	header('content-type:text/html;charset=utf-8');
	$getdb = mysql_connect('localhost','root',''); //@除去原始错误提示信息
	if(!$getdb){
		die('数据库连接失败'.mysql_error());
	}
?>