<?php

try {
  require "php_template/config.php";
  require "php_template/common.php";

  $connection = new PDO($dsn, $username, $password, $options);

  $sql = "SELECT * FROM myplexus.myplexus_data order by id DESC LIMIT 30;";

  $statement = $connection->prepare($sql);
  $statement->execute();

  $result = $statement->fetchAll();
} catch(PDOException $error) {
  echo $sql . "<br>" . $error->getMessage();
}
?>



<!DOCTYPE HTML>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">

    <!-- Favicon & Title  -->
    <link rel="icon" href="static/icons/0.png" type="image/gif" sizes="16x16">
    <title>Plexus | Calibration Status</title>

    <!-- CDN -->
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.5.1/dist/leaflet.css" integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ==" crossorigin=""/>
    <script src="https://unpkg.com/leaflet@1.5.1/dist/leaflet.js" integrity="sha512-GffPMF3RvMeYyc1LWMHtK8EbPv0iNZ8/oTtHPx9/cc2ILxQ+u905qIwdpULaqDkyBKgOaB57QTMg7ztg8Jm2Og==" crossorigin=""></script>
    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
    <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
    
    <!-- Dont change order-->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.16/css/dataTables.bootstrap4.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.1/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.16/js/jquery.dataTables.min.js"></script>
    
    <!-- CSS letak last  -->
    <link rel="stylesheet" href="style.css">
  </head>

  <body>

    <!---------------------------------
                    Navbar
      --------------------------------->
      <nav class="navbar navbar-expand-lg navbar-light bg-dark" >
        <a class="navbar-brand" href="#"><img src="static/img/plexus_favicon.png" width="30" height="30" class="d-inline-block align-top rounded" alt=""></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText" >
          <ul class="navbar-nav mr-auto" style="font-size: 14px">
            <li class="nav-item active">
              <a class="nav-link text-white" href="index.html">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-white" href="page_status.php">Request Status</a>
            </li>
            <li class="nav-item">
                <a class="nav-link text-white" href="analytics.html">KPI</a>
            </li>
          </ul>
          <span class="navbar-text text-white" style="font-family: 'Merriweather', serif;">
            Calibration Status Dashboard
          </span>
        </div>
      </nav>



    <!-----------------------------------------------------------------------------------------------------------
                                                 Row 1
      ----------------------------------------------------------------------------------------------------------->

      <div class="container">
        <h3 class="text-center mt-3" style="font-family: 'Patua One', cursive;">Calibration Request Status</h3>
        <hr>
        <div class="row">
          <div class="col-sm-6">
              <a href="AddRequest.php" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Add New Request</a>
          </div>
          <div class="col-sm-6 text-right">
              <span>Search by EIN: <input type="text" id="myInput" onkeyup="myFunction()" placeholder="Example: 1110223"></span>
          </div>
        </div>
        
        <table id=mytablepop class="table table-sm table-condensed  table-bordered mt-3" style="border-collapse:collapse;font-size: 14px">
          <thead>
              <tr class="table-warning text-center" style="font-family: 'Helvetica', sans-serif;">
                  <th>ID</th>
                  <th>EIN Number</th>
                  <th>Instrument Description</th>
                  <th>Date Created</th>
                  <th>Site Code</th>
                  <th>Status</th>
                  <th>Action</th>
              </tr>
          </thead>
          <tbody id="formAll">
          <?php foreach ($result as $row) : ?>
                  <tr id="highlight" data-toggle="collapse" data-target=".childData<?php echo escape($row["id"]); ?>"> 
                  <td class="text-center"><?php echo escape($row["id"]); ?></td>
                  <td class="text-center"><?php echo escape($row["ein_number"]); ?></td>
                  <td class="pl-4"><?php echo escape($row["instrumentDesc"]); ?></td>
                  <td class="text-center"><?php echo escape($row["dateReceived"]); ?></td>
                  <td class="text-center"><?php echo escape($row["siteCode"]); ?></td>
                  <td class="text-success text-center"><span class="statusColor" style=" font-style: italic;"><?php echo escape($row["status"]); ?></span></td>
                  <td class="text-center"><a href="update-single.php?id=<?php echo escape($row["id"]); ?>">Edit</a></td>
                    <tr> 
                      <td colspan=7 class="hiddenRow">
                          <div class="collapse ml-5 childData<?php echo escape($row["id"]); ?>" style="font-size: 13px">
                            <div class="row">
                                <div class="col-4">Calibration Job: <span class="text-success"><?php echo escape($row["status"]); ?></span></div>
                                <div class="col-4">Date Received: <?php echo escape($row["dateReceived"]); ?></div>
                                <div class="col-4">Serial Number: <?php echo escape($row["serialNum"]); ?></div>
                            </div>
                            <div class="row">
                                <div class="col-4">Owner: <?php echo escape($row["owner"]); ?></div>
                                <div class="col-4">Date Completed:  <?php echo escape($row["dateCompleted"]); ?></div>
                                <div class="col-4">Manufacturer: <?php echo escape($row["manufacturer"]); ?></div>
                            </div>
                          </div> 
                      </td>
                  </tr>
          <?php endforeach; ?>
          </tbody>
      </table>
      </div>

      <!-- <tr data-toggle="collapse" data-target=".childData">
                  <td>1</td>
                  <td>05 May 2013</td>
                  <td>Credit Account</td>
                  <td class="text-success">$150.00</td>
                  <td class="text-error"></td>
                  <td class="text-success">Completed</td>
              </tr>
              <tr>
                  <td colspan=6 class="hiddenRow">
                      <div class="collapse childData ml-5" style="font-size: 13px">
                        <div class="row">
                            <div class="col-4">Calibration Job:</div>
                            <div class="col-4">Owner:  </div>
                            <div class="col-4">Serial Number:  </div>
                        </div>
                        <div class="row">
                            <div class="col-4">Date Received: </div>
                            <div class="col-4">Calibration Cost: </div>
                            <div class="col-4">Manufacturer: </div>
                        </div>
                      </div>
                  </td>
              </tr> -->

    
    
    <script>
    $('.collapse').on('show.bs.collapse', function () {
        $('.collapse.in').collapse('hide');
    });



    function myFunction() {
    // Declare variables
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("mytablepop");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
    }




    </script>
    <!-- Optional JavaScript -->
    <script src="plugin/Chart.js-2.8.0/dist/Chart.bundle.js"></script>
    <script src="plugin/Chart.js-2.8.0/dist/Chart.bundle.min.js"></script>
    <script src="plugin/fontawesome.js"></script>
    <script type="text/javascript" src="js/map.js"></script>
    <script type="text/javascript" src="js/row1_chart.js"></script>
    <script type="text/javascript" src="js/row2_chart.js"></script>
    <script type="text/javascript" src="js/parseData.js"></script>
    
  </body>
</html>