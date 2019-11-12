$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/data_mainChart30days.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i]['dateReceived']);
				score.push(data[i]['count(dateReceived)']);
            }

            var options = {
                // title: {
                //   text: "Total Job Request",
                //   align: "left"
                // },
                chart: {
                  type: 'line',
                  height: 380,
                  // width: 400
                },
                series: [{
                  name: 'Total Request',
                  data: score
                }],
                // dataLabels: {
                //     enabled: true
                //   },
                markers: {
                    size: 0,
                    style: 'hollow',
                  },
              stroke: {
                width: 3,
                curve: 'smooth'
              },
                xaxis: {
                  categories: player,
                  type: 'datetime',
                  //min: new Date('28 Sept 2019').getTime(),
                  //max: new Date('2019').getTime()
                //   tickAmount: 30
                },
                // fill: {
                //     type: 'gradient',
                //     gradient: {
                //       shadeIntensity: 1,
                //       opacityFrom: 0.7,
                //       opacityTo: 0.9,
                //       stops: [0, 100]
                //     }
                // },
                yaxis: {
                  title: {
                    text: 'Frequency'
                  }
                },
                tooltip: {
                    x: {
                      format: 'MMM dd yyyy'
                    }
                  }
              }
              
              var chart = new ApexCharts(document.querySelector("#requestChart"), options);
              
              chart.render();
            
            }
        })
})
