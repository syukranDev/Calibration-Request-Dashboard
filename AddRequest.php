<?php

/**
  * Use an HTML form to create a new entry in the
  * users table.
  *
  */


if (isset($_POST['submit'])) {
  
  $host       = "localhost";
  $username   = "root";
  $password   = "root";
  $dbname     = "myplexus"; // will use later
  $dsn        = "mysql:host=$host;dbname=$dbname"; // will use later
  $options    = array(
                  PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION
                );

  function escape($html) {
    return htmlspecialchars($html, ENT_QUOTES | ENT_SUBSTITUTE, "UTF-8");
  }

  try {
    $connection = new PDO($dsn, $username, $password, $options);

    $new_user = array(
      "status"                  => $_POST['status'],
      "type"                    => $_POST['type'],
      "ein_number"              => $_POST['ein_number'],
      "instrumentDesc"          => $_POST['instrumentDesc'],
      "manufacturer"            => $_POST['manufacturer'],
      "model"                   => $_POST['model'],
      "serialNum"               => $_POST['serialNum'],
      // "calInt"                  => $_POST['calInt'],
      "owner_original"          => $_POST['owner_original'],
      "siteCode"                => $_POST['siteCode'],
      "project"                 => $_POST['project'],
      "iso"                     => $_POST['iso'],
      "calTolerance"            => $_POST['calTolerance'],
      "dateReceived"            => $_POST['dateReceived'],
      "owner"                   => $_POST['owner'],
      "dateReceived_original"   => $_POST['dateReceived_original'],
      "dateCompleted"            => $_POST['dateCompleted'],
      "calJob"                  => $_POST['calJob'],
      "lab_onsite"              => $_POST['lab_onsite'],
      "incomingShip"            => $_POST['incomingShip'],
      "outgoingShip"            => $_POST['outgoingShip'],
      "currency"                => $_POST['currency'],
      "calCost"                 => $_POST['calCost'],
  
    );

    $sql = sprintf(
      "INSERT INTO %s (%s) values (%s)",
      "myplexus.myplexus_data",
      implode(", ", array_keys($new_user)),
      ":" . implode(", :", array_keys($new_user))
    );

    $statement = $connection->prepare($sql);
    $statement->execute($new_user);
  } catch(PDOException $error) {
    echo $sql . "<br>" . $error->getMessage();
  }

}
?>

<!------------------------------------------------------------------- HTML CODES HEADER --------->

<!doctype html>
<html>
    <head>
        <!-- Required meta tags -->
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no">
    
        <!-- Favicon & Title  -->
        <link rel="icon" href="static/icons/0.png" type="image/gif" sizes="16x16">
        <title>Plexus | Calibration Status</title>
    
        <!-- CDN ,,, dont change order -->
        <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
        <script src="https://cdn.jsdelivr.net/npm/chart.js@2.8.0"></script>
        <link rel="stylesheet" href="style.css">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.1/umd/popper.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"></script>
        <link rel="stylesheet" type="text/css" href="https://cdn.datatables.net/1.10.20/css/jquery.dataTables.css">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/datatables/1.10.16/js/jquery.dataTables.min.js"></script>
    
      </head>

  

  <body>

    <!----------------
      Navbar
      ---------------->
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



<!-- END----------------------------------------------------------------------------- -->



<div class="container mt-3 mb-5">
      <h3 class="text-center mt-3" style="font-family: 'Patua One', cursive;">Calibration Request Status Form</h3>
      <hr>

      <?php if (isset($_POST['submit']) && $statement) { ?>
      <?php echo $_POST['ein_number']; ?> successfully added.
      <?php } ?>
        


      <form class="ml-5 mt-4"  method="post">
          <p class="font-italic text-secondary"><small>Leave blank where necessary</small></p>
          
                 <div class="form-group row justify-content-left">
                  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Date Created</label>
                  <div class="col-sm-3">
                    <input class="form-control  form-control-sm" id="" name="dateReceived" value="<?php echo date("m/d/Y"); ?>" placeholder="<?php echo date("m/d/Y"); ?>" disabled>
                  </div>
                </div>

                <div class="form-group row justify-content-left">
                  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Requestor</label>
                  <div class="col-sm-3">
                    <input class="form-control  form-control-sm" id="owner" name="owner" type="" placeholder="">
                  </div>
                </div>




                  <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Type</label>
                    <div class="col-sm-3">
                        <select class="form-control form-control-sm" name="type"> 
                          <option value="E">Electrical</option>
                          <option value="M">Mechanical</option>
                          <option value="T">Temperature</option>
                        </select>
                    </div>
                </div>


                <div class="form-group row justify-content-left">
                  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">EIN</label>
                  <div class="col-sm-3">
                    <input type="" class="form-control form-control-sm" name="ein_number" id="ein_number" placeholder="Example: 4312236">
                  </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Status</label>
                    <div class="col-sm-3">
                        <select class="form-control form-control-sm" name="status">
                          <option value="In Reviewing">In Reviewing</option>
                          <option value="Rejected">Rejected</option>
                          <option value="Approved">Approved</option>
                          <option value="Completed">Completed</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Instrument Description</label>
                    <div class="col-sm-3">
                        <input type="" class="form-control form-control-sm" id="instrumentDesc" name="instrumentDesc" placeholder="Example: Datapaq Q18">
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                  <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Manufacturer</label>
                  <div class="col-sm-3">
                    <input type="" class="form-control form-control-sm" name="manufacturer" id="manufacturer" placeholder="Fluke">
                  </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Model</label>
                    <div class="col-sm-3">
                        <input type="" class="form-control form-control-sm" id="model" name="model" placeholder="">
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Serial Number</label>
                    <div class="col-sm-3">
                        <input type="" class="form-control form-control-sm" id="serialNum" name="serialNum" placeholder="">
                    </div>
                </div>

                <!-- <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Cal Interval</label>
                    <div class="col-sm-3">
                        <input type="" class="form-control form-control-sm" id="CalInt" name="calInt" placeholder="Example: 6">
                    </div>
                </div> -->

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Site Code</label>
                    <div class="col-sm-3">
                        <select class="form-control form-control-sm" name="siteCode"> 
                          <option value="RIVN">RIVN</option>
                          <option value="RIVS">RIVS</option>
                          <option value="SEA">SEA</option>
                          <option value="ISL">ISL</option>
                          <option value="HIL">HIL</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Calibration Tolerance</label>
                    <div class="col-sm-3">
                        <select class="form-control form-control-sm" name="calTolerance"> 
                          <option value="International Spec">International Spec</option>
                          <option value="Manufacturer Spec">Manufacturer Spec</option>
                          <option value="Customer Tolerance">Customer Tolerance</option>
                          <option value="Plexus Tolerance">Plexus Tolerance</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="colFormLabelSm" class="col-sm-3 col-form-label col-form-label-sm">Instrument Owner</label>
                    <div class="col-sm-3">
                        <div class="input-group input-group-sm mb-3">
                          <input type="text" class="form-control" placeholder="John.Wick" name="owner_original" id="owner_original" aria-label="owner_original" aria-describedby="owner_original">
                          <div class="input-group-append">
                            <span class="input-group-text" id="owner_original">@plexus.com</span>
                          </div>
                        </div>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Project</label>
                    <div class="col-sm-3">
                        <input type="" class="form-control form-control-sm" id="project" name="project" placeholder="">
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">ISO17025 Required</label>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio"  id="iso" name="iso" value="Yes">
                          <label class="form-check-label" for="inlineRadio1">Yes</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" id="iso" name="iso" value="No">
                          <label class="form-check-label" for="inlineRadio2">No</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Incoming Ship Doc No.</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control form-control-sm" id="incomingShip" name="incomingShip" placeholder="">
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Outgoing Ship Doc No</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control form-control-sm" id="outgoingShip" name="outgoingShip" placeholder="">
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Calibration Job</label>
                    <div class="col-sm-3">
                        <select class="form-control form-control-sm" name="calJob"> 
                          <option value="Internal">Internal</option>
                          <option value="External">External</option>
                        </select>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Lab/On-site Cal</label>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="lab_onsite" id="lab_onsite" value="Lab">
                          <label class="form-check-label" for="inlineRadio1">Lab</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="lab_onsite" id="lab_onsite" value="On-site">
                          <label class="form-check-label" for="inlineRadio2">On-site</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Currency</label>
                    <div class="col-sm-3">
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="currency" id="currency" value="USD">
                          <label class="form-check-label" for="inlineRadio1">USD</label>
                        </div>
                        <div class="form-check form-check-inline">
                          <input class="form-check-input" type="radio" name="currency" id="currency" value="MYR">
                          <label class="form-check-label" for="inlineRadio2">MYR</label>
                        </div>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Cal Cost</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control form-control-sm" id="calCost" name="calCost" placeholder="">
                    </div>
                </div>
                
                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Date Received</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control form-control-sm" id="dateReceived_original" name="dateReceived_original" placeholder="">
                        <small id="#" class="form-text text-muted">To be updated calibration personnel</small>
                    </div>
                </div>

                <div class="form-group row justify-content-left">
                    <label for="#" class="col-sm-3 col-form-label col-form-label-sm">Date Completed</label>
                    <div class="col-sm-3">
                        <input type="text" class="form-control form-control-sm" id="dateCompleted" name="dateCompleted" placeholder="">
                        <small id="#" class="form-text text-muted">To be updated calibration personnel</small>
                     
                    </div>
                </div>

              <br>
              <input type="submit" name="submit" value="Submit">

              <a href="page_status.php">Back to home</a>
        
        </form>





<!--------------------------------------------------------------- HTML FOOTER  ---------------->
  </div>
    
   
  
    <!-- Optional JavaScript -->
    <script src="plugin/Chart.js-2.8.0/dist/Chart.bundle.js"></script>
    <script src="plugin/Chart.js-2.8.0/dist/Chart.bundle.min.js"></script>
    <script src="plugin/fontawesome.js"></script>
    <script type="text/javascript" src="js/chart_row2.js"></script>
    <script type="text/javascript" src="js/chart1.js"></script>
    <script type="text/javascript" src="js/chart2.js"></script>
    <script type="text/javascript" src="js/chart3.js"></script>
    <script type="text/javascript" src="js/topChart.js"></script>
    <script type="text/javascript" src="js/parseData.js"></script>
  </body>
</html>

<!-- END -->