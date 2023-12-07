<?php
$server="localhost";
$username="root";
$password="";

$connection=mysqli_connect($server,$username,$password);

if(!$connection){
    die("Connection failed to database" . mysqli_connect_error());
}
else{echo("sucessful connection")}

$email=$_POST['email'];
$password=$_POST['password'];
$register=$_POST['register'];


?>