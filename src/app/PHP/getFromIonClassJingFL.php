<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");
header("Content-Type: application/json; charset=UTF-8");
include_once 'H:\inetpub\lib\bbSQL.php';
//ini_set('display_errors', 1); ini_set('display_startup_errors', 1); error_reporting(E_ALL);

require_once 'H:\inetpub\lib\getFromIonLib.php';                    // the library with the CURL to ION

$handle = connectBB();
$fp = fopen("logGetFromION.txt", "w+");
$body = @file_get_contents('php://input');                          // gets the params passed in POST 
ob_start(); var_dump($body);$data = ob_get_clean();fwrite($fp, "\r\n input data \r\n". $data);
$dataList = substr($body, 1, -1);                                   // clean up first and last char

//echo $body;
$fromIon = FromION::getFromION($dataList);                            // use STATIC function from lib                             
echo json_encode($fromIon);
sqlsrv_close($handle);
exit();








