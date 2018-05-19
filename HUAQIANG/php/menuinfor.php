<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$infornum = $_GET["infornum"];
	if($infornum == 1){
		$result = mysql_query(" select * from phoneclass");
		$data = array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$data[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
		}
		echo json_encode($data);
	}	
	if($infornum == 2){
		$result = mysql_query(" select * from iphoneclass");
		$data = array();
		for($i=0;$i<mysql_num_rows($result);$i++){
			$data[$i]=mysql_fetch_array($result,MYSQL_ASSOC);
		}
		echo json_encode($data);
	}
	mysql_close($getdb);
?>