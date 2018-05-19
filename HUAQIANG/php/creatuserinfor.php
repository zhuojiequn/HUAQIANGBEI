<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$buysid = $_GET['buysid'];
	$buynum = $_GET['buynum'];
	$loguser = $_GET['loguser'];
	echo $loguser;
	//是否存在表存在不操作
	$sql = "CREATE TABLE IF NOT EXISTS $loguser (
		  `buynum` int(10) DEFAULT NULL,
		  `buysid` tinyint(40) NOT NULL,
		  PRIMARY KEY (`buysid`)
		) ENGINE=InnoDB";
	mysql_query($sql);
	$findsid = mysql_query(" select * from $loguser where buysid='$buysid' ");
	$findr= array();
	for($i=0;$i<mysql_num_rows($findsid);$i++){
		$findr[$i]=mysql_fetch_array($findsid,MYSQL_ASSOC);
	}
	if($findr){
		mysql_query(" delete  from $loguser where buysid='$buysid' ");
	}

	mysql_query("insert into $loguser(buysid,buynum) values('$buysid','$buynum') ");
				
	mysql_close($getdb);
?>