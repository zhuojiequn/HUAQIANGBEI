<?php
	require 'DBbase.php';
	mysql_select_db('shopping-online');
	mysql_query('SET NAMES UTF8');
	$slide = mysql_query(" select * from indexslide");
	//数据库和楼层的数据
	$slide_r = array();
	for($i=0;$i<mysql_num_rows($slide);$i++){
		$slide_r[$i]=mysql_fetch_array($slide,MYSQL_ASSOC);
	};
	$hots = mysql_query(" select * from hots");
	$hots_r = array();
	for($i=0;$i<mysql_num_rows($hots);$i++){
		$hots_r[$i]=mysql_fetch_array($hots,MYSQL_ASSOC);
	};
	$goods = mysql_query(" select * from goods");
	$goods_r = array();
	for($i=0;$i<mysql_num_rows($goods);$i++){
		$goods_r[$i]=mysql_fetch_array($goods,MYSQL_ASSOC);
	}
	 $alldata = array(
		'slidedata'=>$slide_r,
		'hotsdata'=>$hots_r,
		'goodsdata'=>$goods_r,
	);
	echo json_encode($alldata);
	mysql_close($getdb);
?>