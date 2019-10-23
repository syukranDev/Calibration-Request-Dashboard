<?php
//setting header to json
header('Content-Type: application/json');

//database
define('DB_HOST', 'localhost');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'root');
define('DB_NAME', 'myplexus');

//get connection
$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
  die("Connection failed: " . $mysqli->error);
}

//query to get data from the table
$query = sprintf("SELECT dateReceived, count(dateReceived) FROM myplexus.myplexus_data group by dateReceived ORDER BY ID  DESC LIMIT 30;");
//date(variable) --> to get date without time.
//----Below query cant execute,, maybe because of datatype.
//SELECT dateReceived, count(dateReceived) FROM myplexus.myplexus_data group by dateReceived ORDER BY str_to_date(dateReceived, '%m%d%Y')  ASC;

//execute query
$result = $mysqli->query($query);

//loop through the returned data
$data = array();
foreach ($result as $row) {
  $data[] = $row;
}

//free memory associated with result
$result->close();

//close connection
$mysqli->close();

//now print the data
print json_encode($data);

?>