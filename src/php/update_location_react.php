<?php
$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// 检测连接
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "连接成功<br>";

// 设置编码，防止中文乱码
mysqli_query($conn , "set names utf8");

$name = $_GET['n'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];
$review = $_GET['r'];
$review_details = $_GET['rd'];
$updated_date = date('Y-m-d H:i:s');
//echo $name;

$sql = "UPDATE locations SET name='$name',lat='$lat',lng='$lng',type='$type',review='$review',review_details='$review_details',updated_date='$updated_date' WHERE name='$name'";


mysqli_select_db( $conn, $dbname );
$retval = mysqli_query( $conn, $sql );
if(! $retval )
{
  die('无法插入数据: ' . mysqli_error($conn));
}else{
  echo "数据插入成功\n";
}
mysqli_close($conn);
