$(document).ready(function () {
  
  $.ajax({
    url: "http://localhost/plexus_dashboard/data_chart3.php",
    method: "GET",
    success: function (data) {
      //console.log(data);
      var label = [];
      var score = [];
      

      for (var i in data) {
        label.push(data[i]['siteCode']);
        score.push(data[i]['count(siteCode)']);
        
      }
     
      console.log(score);
     

      var mymap = L.map('mapid').setView([5.312453, 100.293362], 12.5);
      //RIV@RIVN
      var circle = L.circle([5.316977,100.296591], {
        color: '#FF6384', //border color
        fillColor: '#FF6384', //background color
        fillOpacity: 0.5,
        radius: score[4]*2,
      }).addTo(mymap).bindPopup('Total Calibration Request: <br> ' + score[4]);
      //RIVEast
      var circle = L.circle([5.314803,100.298555], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: score[0]*2
      }).addTo(mymap);
      //Hillside
      var circle = L.circle([5.313051,100.282676], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: score[3]*2
      }).addTo(mymap);
      //Islandview
      var circle = L.circle([5.306770,100.296109], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: score[2]*2
      }).addTo(mymap);
      //Seaside
      var circle = L.circle([5.303522, 100.29633], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: score[1]*2
      }).addTo(mymap);
      
    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 14,
        //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);




    }
  })
}
)
