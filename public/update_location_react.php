<?php
$handle = fopen('./dbpass.txt', 'r');
while (!feof($handle)) {
  $dbpass = fgets($handle, 1024);
}
fclose($handle);

$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
//$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

// 检测连接
if (!$conn_inset) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "连接成功:";

// 设置编码，防止中文乱码
mysqli_query($conn_inset, "set names utf8");

$id = uniqid();
$name = $_GET['n'];
$lat = $_GET['lat'];
$lng = $_GET['lng'];
$type = $_GET['type'];
$review = $_GET['r'];
$review_details = $_GET['rd'];
$updated_date = date('Y-m-d H:i:s');
//echo $name;

$sql_insert = "INSERT INTO locations " .
  "(id, name, lat, lng, type, review, review_details, updated_date) " .
  "VALUES " .
  "('$id','$name','$lat','$lng','$type','$review','$review_details','$updated_date')";


mysqli_select_db($conn_inset, $dbname);
$retval_insert = mysqli_query($conn_inset, $sql_insert);
if (!$retval_insert) {
  //echo '无法插入数据: ' . mysqli_error($conn_inset);
  mysqli_close($conn_inset);

  $conn_update = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);
  mysqli_query($conn_update, "set names utf8");
  $sql_update = "UPDATE locations SET name='$name',lat='$lat',lng='$lng',type='$type',review='$review',review_details='$review_details',updated_date='$updated_date' WHERE name='$name'";
  mysqli_select_db($conn_update, $dbname);
  $retval_update = mysqli_query($conn_update, $sql_update);
  if (!$retval_update) {
    die('无法插入数据: ' . mysqli_error($conn_update));
    mysqli_close($conn_update);
  } else {
    echo "数据插入成功\n";
    mysqli_close($conn_update);
  }
} else {
  echo "数据插入成功\n";
  mysqli_close($conn_inset);
}
