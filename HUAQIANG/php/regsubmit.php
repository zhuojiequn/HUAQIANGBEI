<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$user = $_GET['phone'];
	$password = $_GET['password'];
	mysql_query("insert into users(name,password) values('$user','$password') ");
	mysql_close($getdb);
?>