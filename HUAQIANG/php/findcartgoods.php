<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$sidarr = array();
	$sidarr = @$_GET['sid'];
	$result_item = array();
	$arr = array(); //存所有的查询结果
	//查询所有SID的数据
	for($i=0;$i<sizeof($sidarr);$i++){
		$result_item[$i] = mysql_query(" select * from goods where sid=$sidarr[$i] ");
		$arr[$i] = mysql_fetch_array($result_item[$i],MYSQL_ASSOC);
	}
	echo json_encode($arr);	
	mysql_close($getdb);
?>