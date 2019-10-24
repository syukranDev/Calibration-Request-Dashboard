<!-- HTML CODE dataTable


<div class="container mt-3">
            <div class="mb-3">
              <a href="addrequest.html" class="btn btn-info" role="button"></i>Add a request</a>
            </div>

            <table id="requestTable"  class="table table-striped ">
                    <thead>
                      <tr>
                        <th>ID</th>
                        <th>EIN</th>
                        <th>Instrument Description</th>
                        <th>Site Code</th>
                        <th>Owner</th>
                        <th>Date Received</th>
                      </tr>
                    </thead>
            </table>   
    </div>

    <script>
      $(document).ready(function() {
          $('#requestTable').DataTable( {
              "serverSide": true,
              "ajax": "dataTable.php"
          } );
      } );

      
    </script>






 -->




<?php
 
/*
 * DataTables example server-side processing script.
 *
 * Please note that this script is intentionally extremely simple to show how
 * server-side processing can be implemented, and probably shouldn't be used as
 * the basis for a large complex system. It is suitable for simple use cases as
 * for learning.
 *
 * See http://datatables.net/usage/server-side for full details on the server-
 * side processing requirements of DataTables.
 *
 * @license MIT - http://datatables.net/license_mit
 */
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * Easy set variables
 */
 
// DB table to use
$table = 'myplexus_data';
 
// Table's primary key
$primaryKey = 'id';
 
// Array of database columns which should be read and sent back to DataTables.
// The `db` parameter represents the column name in the database, while the `dt`
// parameter represents the DataTables column identifier. In this case simple
// indexes
$columns = array(
    array( 'db' => 'id', 'dt' => 0 ),
    array( 'db' => 'ein_new', 'dt' => 1 ),
    array( 'db' => 'instrumentDesc',  'dt' => 2 ),
    array( 'db' => 'siteCode',     'dt' => 3 ),
    array( 'db' => 'owner',   'dt' => 4 ),
    array( 'db' => 'dateReceived',   'dt' => 5 )
   
);
 
// SQL server connection information
$sql_details = array(
    'user' => 'root',
    'pass' => 'root',
    'db'   => 'myplexus',
    'host' => 'localhost'
);
 
 
/* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
 * If you just want to use the basic configuration for DataTables with PHP
 * server-side, there is no need to edit below this line.
 */
 
require( 'ssp.class.php' );
 
echo json_encode(
    SSP::simple( $_GET, $sql_details, $table, $primaryKey, $columns )
);