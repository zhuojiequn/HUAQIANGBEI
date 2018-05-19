<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$changesid = $_GET['changesid'];
	$changenum = $_GET['changenum'];
	$loguser = $_GET['loguser'];
	mysql_query(" delete  from $loguser where buysid='$changesid' ");
	if($changenum!=0){
		mysql_query("insert into $loguser(buysid,buynum) values('$changesid','$changenum') ");
	}
?>