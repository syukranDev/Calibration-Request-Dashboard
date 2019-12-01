<?php
/**
  * Use an HTML form to edit an entry in the
  * users table.
  *
  */

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




if (isset($_POST['submit'])) {
  try {
    $connection = new PDO($dsn, $username, $password, $options);
    $user =[
      "id"                      => $_POST['id'],
      "status"                  => $_POST['status'],
      "type"                    => $_POST['type'],
      "ein_number"              => $_POST['ein_number'],
      "instrumentDesc"          => $_POST['instrumentDesc'],
      "manufacturer"            => $_POST['manufacturer'],
      "model"                   => $_POST['model'],
      "serialNum"               => $_POST['serialNum'],
      "calInt"                  => $_POST['calInt'],
      "owner_original"          => $_POST['owner_original'],
      "siteCode"                => $_POST['siteCode'],
      "project"                 => $_POST['project'],
      "iso"                     => $_POST['iso'],
      "calTolerance"            => $_POST['calTolerance'],
      "dateReceived"            => $_POST['dateReceived'],
      "owner"                   => $_POST['owner'],
      "dateReceived_original"   => $_POST['dateReceived_original'],
      "dateComplete"           => $_POST['dateComplete'],
      "calJob"                  => $_POST['calJob'],
      "lab_onsite"              => $_POST['lab_onsite'],
      "incomingShip"            => $_POST['incomingShip'],
      "outgoingShip"            => $_POST['outgoingShip'],
      "currency"                => $_POST['currency'],
      "calCost"                 => $_POST['calCost'],
  

    ];

    $sql = "UPDATE myplexus.myplexus_data
            SET id = :id, 
                status =:status,
                type =:type,
                ein_number =:ein_number,
                instrumentDesc =:instrumentDesc,
                manufacturer =:manufacturer,
                model =:model,
                serialNum =:serialNum,
                calInt =:calInt,
                owner_original =:owner_original,
                siteCode =:siteCode,
                project =:project,
                iso =:iso,
                calTolerance =:calTolerance,
                dateReceived =:dateReceived,
                owner =:owner,
                dateReceived_original =:dateReceived_original,
                dateComplete =:dateComplete,
                calJob =:calJob,
                lab_onsite =:lab_onsite,
                incomingShip =:incomingShip,
                outgoingShip =:outgoingShip,
                currency =:currency,
                calCost =:calCost
            WHERE id = :id";

  $statement = $connection->prepare($sql);
  $statement->execute($user);
  } catch(PDOException $error) {
      echo $sql . "<br>" . $error->getMessage();
  }
}

if (isset($_GET['id'])) {
  try {
    $connection = new PDO($dsn, $username, $password, $options);
    $id = $_GET['id'];
    $sql = "SELECT * FROM myplexus.myplexus_data WHERE id = :id";
    $statement = $connection->prepare($sql);
    $statement->bindValue(':id', $id);
    $statement->execute();

    $user = $statement->fetch(PDO::FETCH_ASSOC);
  } catch(PDOException $error) {
      echo $sql . "<br>" . $error->getMessage();
  }
} else {
    echo "Something went wrong!";
    exit;
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


<!-- END -->



<div class="container">
  <div class="text-center">
      <?php if (isset($_POST['submit']) && $statement) : ?>
      <span class="text-success">ID:<?php echo escape($_POST['id']); ?> successfully updated.</span>
      <?php endif; ?>
  </div>

  <h3 class="text-center mt-3" style="font-family: 'Patua One', cursive;">Calibration Request Status Form (ID: )</h3>
  <hr>

  <form class="ml-5 mt-4" method="post">
        <?php foreach ($user as $key => $value) : ?>
        <div class="form-group row justify-content-left">
        <label class="col-sm-3 col-form-label col-form-label-sm" for="colFormLabelSm <?php echo $key; ?>"><?php echo ucfirst($key); ?></label>
        <div class="col-sm-3">
        <input class="form-control  form-control-sm" type="text" name="<?php echo $key; ?>" id="<?php echo $key; ?>" value="<?php echo escape($value); ?>" <?php echo ($key === 'id' ? 'readonly' : null); ?>>
        </div>
        </div>
        <?php endforeach; ?>

      <input type="submit" name="submit" value="Submit">
      <a href="page_status.php">Back to home</a>

  </form>
</div> 











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