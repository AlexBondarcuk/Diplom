<?php
$dbuser ='postgres';
$dbpass ='447853625';
$host ='localhost';
$dbname ='DriveLog';
$dbh = new PDO("pgsql:host=$host;dbname=$dbname", $dbuser, $dbpass);
?>
