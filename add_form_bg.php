<?php
/**
 * Use an HTML form to create a new entry in the
 * users table.
 *
 */
if (isset($_POST['submit'])) {
    require "../config.php";
    // require "../common.php";
    try  {
        $connection = new PDO($dsn, $username, $password, $options);
        
        $new_user = array(
            "ein"                    => $_POST['ein'],
            "status1"                => $_POST['status1'],
            "instrumentDesc"         => $_POST['instrumentDesc'],

            "manufacturer"           => $_POST['manufacturer'],
            "serialNum"              => $_POST['serialNum'],
            "calInterval"            => $_POST['calInterval'],
            "siteCode"               => $_POST['siteCode'],
            "instrumentOwner"        => $_POST['instrumentOwner'],
            "project"                => $_POST['project'],
            "ISO17025"               => $_POST['ISO17025'],
            "calJob"                 => $_POST['calJob'],
            "incomingShipDoc"        => $_POST['incomingShipDoc'],
            "outgoingShipDoc"        => $_POST['outgoingShipDoc'],
            "lab_orSite"             => $_POST['lab_orSite'],
            "calVendor"              => $_POST['calVendor'],
            "currency"               => $_POST['currency'],
            "calCost"                => $_POST['calCost'],
            "dateReceived"           => $_POST['dateReceived'],
            "dateCompleted"          => $_POST['dateCompleted'],
            
            
        );
        $sql = sprintf(
                "INSERT INTO %s (%s) values (%s)",
                "calRequest",
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


<!--  Bagi tau if "new user" dah berjaya submit-->
<?php if (isset($_POST['submit']) && $statement) { ?>
    <blockquote><?php echo $_POST['ein']; ?> successfully added.</blockquote>
<?php } ?> 


<!--------------------------------------- Form Template starts here ------------------------------------------->
    
            <form method="post">
                <div class="row">
                    <div class="col">
                        <label for="ein">Equipment Identification Number (EIN): </label>
                    </div>
                    <div class="col">
                    <input type="text" name="ein" id="ein" placeholder="EIN">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="status1">Status: </label>
                    </div>
                    <div class="col">
                        <select name="status1">
                        <option  value="In Reviewing">In Reviewing</option>
                        <option  value="Completed">Completed</option>
                        <option  value="Rejected">Rejected</option>
                        </select>
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    <label for="instrumentDesc">Instrument Description: </label>
                    </div>
                    <div class="col">
                        <input type="text" name="instrumentDesc" id="instrumentDesc">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                    <label for="manufacturer">Manufacturer: </label>
                    </div>
                    <div class="col">
                        <input type="text" name="manufacturer" id="manufacturer">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        <label for="model">Model: </label>
                    </div>
                    <div class="col">
                        <input type="text" name="model" id="model">
                    </div>
                </div>

                <div class="row">
                    <div class="col">
                        
                    </div>
                    <div class="col">
                        
                    </div>
                </div>
                
                
               

                <!-- additional  -->

                

                

                <label for="serialNum">Serial Num: </label>
                <input type="text" name="serialNum" id="serialNum">

                <label for="calInterval">Calibration Interval (months): </label>
                <input type="calInterval" name="calInterval" id="calInterval">

                <label for="siteCode">Site Code: </label>
                <select name="siteCode">
                    <option  value="ISL">ISL</option>
                    <option  value="SS">SS</option>
                    <option  value="RVE">RVE</option>
                    <option  value="RV">RV</option>
                    <option  value="HS">HS</option>
                </select>
                
                <label for="instrumentOwner">Instrument Owner: </label>
                <input type="text" name="instrumentOwner" id="instrumentOwner">

                <label for="project">Project: </label>
                <input type="text" name="project" id="project">

                <label for="ISO17025">ISO17025 Required? </label>
                <select name="ISO17025">
                    <option value="YES">YES</option>
                    <option value="NO">NO</option>
                </select>

                <label for="calJob">Calibration Job: </label>
                <select name="calJob">
                    <option value="External">External</option>
                    <option value="Internal">Internal</option>
                </select>

                <label for="incomingShipDoc">Incoming ShipDOC: </label>
                <input type="text" name="incomingShipDoc" id="incomingShipDoc">

                <label for="outgoingShipDoc">Outgoing ShipDOC: </label>
                <input type="text" name="outgoingShipDoc" id="outgoingShipDoc">

                <label for="lab_orSite">Lab/On-site Calibration: </label>
                <input type="checkbox" name="lab_orSite" id="lab_orSite" value="Lab">Lab<br>
                <input type="checkbox" name="lab_orSite" id="lab_orSite" value="On-site">On-site<br>
                

                <label for="calVendor">Calibration Vendor: </label>
                <input type="text" name="calVendor" id="calVendor">

                <label for="currency">Currency: </label>
                <input type="checkbox" name="currency" id="currency" value="MYR">MYR<br>
                <input type="checkbox" nname="currency" id="currency" value="USD">USD<br>


                <label for="calCost">Calibration Cost: </label>
                <input type="text" name="calCost" id="calCost">

                <label for="dateReceived">Date Received: </label>
                <input type="text" name="dateReceived" id="dateReceived">

                <label for="dateCompleted">Date Completed: </label>
                <input type="text" name="dateCompleted" id="dateCompleted">

                <label for="age">Age</label>
                <input type="text" name="age" id="age">

                <input type="submit" name="submit" value="Submit">
            </form>

<!--------------------------------------- END ------------------------------------------->           

<a href="index.html">Back to home</a>
