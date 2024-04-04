<?php
$severname ="localhost";
$username = "root";
$password = "";
$database = "web 2";
$conn = mysqli_connect($severname,$username,$password,$database);
if(!$conn){
    echo("false");

}
else {
    echo("true");
}
?>