$(document).ready(function () {
  
  $.ajax({
    url: "http://localhost/plexus_dashboard/mapsiteCode_request.php",
    method: "GET",
    success: function (data) {
      //console.log(data);
      var label = [];
      var score = [];
      

      for (var i in data) {
        label.push(data[i]['siteCode']);
        score.push(data[i]['count(siteCode)']);
        
      }
     
      // console.log(score);
     

      var mymap = L.map('mapid').setView([5.312453, 100.293362], 12.5);
      //ARRAY Order ---> [RSE(0), SS(1), ISL(2), HS(3), RS(4)]
      //RIV@RIVN
      var circle = L.marker([5.316977,100.296591]).addTo(mymap).bindPopup('Plexus ATC/Riverside: ' + score[4]);
      //RIVEast
      var circle = L.marker([5.314803,100.298555]).addTo(mymap).bindPopup('Plexus Riverside East: ' + score[0]);
      //Hillside
      var circle = L.marker([5.313051,100.282676]).addTo(mymap).bindPopup('Plexus Hillside: ' + score[3]);
      //Islandview
      var circle = L.marker([5.306770,100.296109]).addTo(mymap).bindPopup('Plexus Islandview: ' + score[2]);
      //Seaside
      var circle = L.marker([5.303522, 100.29633]).addTo(mymap).bindPopup('Plexus Seaside: ' + score[1]);
      
    
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 14,
        //attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mymap);




    }
  })
}
)


//--------------------------CIRCLE MARKER
// var circle = L.circle([5.303522, 100.29633], {
//   color: 'red', //border color
//   fillColor: '#f03', //background color
//   fillOpacity: 0.5,
//   radius: score[1]*3,
// }).addTo(mymap).bindPopup('Plexus Seaside: ' + score[1]);


