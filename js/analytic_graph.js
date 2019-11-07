//------------------------------------
//              Chart 1
//------------------------------------
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
                chart: {
                  type: 'line'
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
                tooltip: {
                    x: {
                      format: 'MMM dd yyyy'
                    }
                  }
              }
              
              var chart = new ApexCharts(document.querySelector("#chart"), options);
              
              chart.render();
            
            }
        })
})


//------------------------------------
//              Chart 2
//------------------------------------
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/analytics_php/row1_C2.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i]['siteCode']);
				score.push(data[i]['count(siteCode)']);
            }

            var options = {
                chart: {
                  type: 'bar'
                },
                series: [{
                  name: 'Total Request',
                  data: score
                }],
                xaxis: {
                  categories: player,
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
                tooltip: {
                    x: {
                      format: 'dd MMM yyyy'
                    }
                  }
              }
              
              var chart = new ApexCharts(document.querySelector("#chart2"), options);
              
              chart.render();
            
            }
        })
})

//------------------------------------
//              Chart 3
//------------------------------------
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/analytics_php/row1_C3.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i]['status']);
				score.push(data[i]['count(status)']);
            }

            var options = {
                chart: {
                    //height: 350,
                    type: 'bar',
                },
                plotOptions: {
                    bar: {
                        horizontal: true,
                    }
                },
                dataLabels: {
                    enabled: false
                },
                series: [{
                    name: 'Total',
                    data: score
                }],
                xaxis: {
                    categories: player,
                }
              }
              
              var chart = new ApexCharts(document.querySelector("#chart3"), options);
              
              chart.render();
            
            }
        })
})










