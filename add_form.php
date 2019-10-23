<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<meta name="viewport" content="width=device-width, intial-scale=1.0">
		<meta http-equiv="X-UA-Compatible" content="ie=edge">
		<title>Plexus | Calibration Status</title>
		<link rel="icon" href="static/icons/0.png" type="image/gif" sizes="16x16">
		<link rel="stylesheet" href="plugin/bootstrap-4.3.1-dist/css/bootstrap.min.css">
		<link rel="stylesheet" href="style_plexus.css">
		
		<!-- https://plexus.com/PlexusCDN/plexus/media/english-media/logos/Plexus-Logo-212x42.svg -->

		
	</head>


<!------------------------------------------------ Body content goes here------------------------------ -->
<body>
	<!--------------------------------- Navbar Menu -->
	<nav class="navbar navbar-light bg-danger justify-content-between">
    <a class="navbar-brand text-white" href="index.html">Calibration Status Dashboard</a>
    <ul class="nav justify-content-end">
            <li class="nav-item">
            <a class="nav-link text-white" href="index.html">Dashboard</a>
			</li>
			<li class="nav-item">
            <a class="nav-link text-white" href="form_table.html">Status</a>
            </li>
            <li class="nav-item">
            <a class="nav-link text-white" href="add_form.php">Add Request</a>
            </li>
            <li class="nav-item text-white">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Soon..</a>
            </li>
    </ul>
	  <a class="navbar-brand" href="#">
	    <img class="rounded-lg" src="static/img/plexus_favicon.png" width="30" height="30" alt="">  
	  </a>
	</nav>

	<br>
    <!-- ------------------------------ Content body STARTS here -->
	<div class="container">
		<div class="row color-row">
			<div class="card-deck mx-auto p-0" style="width: 80rem;">
				<div class="card shadow-sm">
					<div class="card-header p-1 text-center font-weight-bold">Add a request</div>
					<div class="card-body">
                        <!-- Your text here... -->
                        <?php require "add_form_bg.php"; ?>
                        <!-- Your text here... -->
                        <!-- Your text here... -->
                        
                    </div>
                </div>
            </div>
        </div>
    </div>

	<br>
	<br>
	
		
    <!-- ------------------------------ Content body ENDS here -->

	<!-- Script file goes here -->
	<script src="plugin/Chart.js-2.8.0/dist/Chart.bundle.js"></script>
	<script src="plugin/Chart.js-2.8.0/dist/Chart.bundle.min.js"></script>
	<script src="plugin/jquery.min.js"></script>
	<script src="plugin/fontawesome.js"></script>
	<script type="text/javascript" src="js/chart1.js"></script>
    <script type="text/javascript" src="js/chart2.js"></script>
    <script type="text/javascript" src="js/chart3.js"></script>
	<script type="text/javascript" src="js/topChart.js"></script>
	<script type="text/javascript" src="js/parseData.js"></script>
	</body>
</html>