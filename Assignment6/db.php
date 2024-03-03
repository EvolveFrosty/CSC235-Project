<?php

// debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$databaseServer = "167.99.253.247";
$databaseUser = "carneiror1";
$databasePass = "70527424";
$databaseName = "SCSU_CSC235_Spring_2023";

// create connection
$conn = new mysqli($databaseServer, $databaseUser, $databasePass, $databaseName);

// validate connection
if ($conn->connect_error) {
   die("Connection failed: " . $conn->connect_error);

}
?>
