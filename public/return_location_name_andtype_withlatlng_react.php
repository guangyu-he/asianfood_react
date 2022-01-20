<?php
$handle = fopen('../dbpass.txt', 'r');
while (!feof($handle)) {
  $dbpass = fgets($handle, 1024);
}
fclose($handle);

$dbhost = 'localhost';  // mysql服务器主机地址
$dbuser = 'test';            // mysql用户名
//$dbpass = '0';          // mysql用户名密码
$dbname = 'my_db';          // mysql用户名密码
$conn = mysqli_connect($dbhost, $dbuser, $dbpass, $dbname);

/* if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
  }
  echo "连接成功<br>"; */

// 设置编码，防止中文乱码
mysqli_query($conn, "set names utf8");

$lat = $_GET['lat'];
$lng = $_GET['lng'];
$range = 0.015;

$lat_d = (float)$lat - $range;
$lat_u = (float)$lat + $range;
$lng_d = (float)$lng - $range;
$lng_u = (float)$lng + $range;

//echo "$lat_d - $lat - $lat_u , $lng_d - $lng - $lng_u";

$sql = "SELECT * FROM locations WHERE lat between '$lat_d' and '$lat_u' AND lng between '$lng_d' and '$lng_u'";

mysqli_select_db($conn, $dbname);
$retval = mysqli_query($conn, $sql);

if (mysqli_num_rows($retval) > 0) {
  // 输出数据
  while ($row = mysqli_fetch_assoc($retval)) {
    echo "" . $row["name"] . ";" . $row["review"] . ",";
  }
} else {
}


/* if(! $retval )
{
  die('无法更新数据: ' . mysqli_error($conn));
}else{
  echo "数据更新成功<br>";
} */

mysqli_close($conn);
