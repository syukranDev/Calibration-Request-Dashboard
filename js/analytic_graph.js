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
                title: {
                  text: "Total Job Request",
                  align: "left"
                },
                chart: {
                  type: 'line',
                  height: 250,
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
              
              var chart = new ApexCharts(document.querySelector("#chart"), options);
              
              chart.render();
            
            }
        })
})


//------------------------------------
//              Chart 2
//------------------------------------
// $(document).ready(function(){
// 	$.ajax({
// 		url: "http://localhost/plexus_dashboard/analytics_php/row1_C2.php",
// 		method: "GET",
// 		success: function(data) {
// 			//console.log(data);
// 			var player = [];
// 			var score = [];

// 			for(var i in data) {
// 				player.push(data[i]['siteCode']);
// 				score.push(data[i]['count(siteCode)']);
//             }

//             var options = {
//                 chart: {
//                   height: 350,
//                   type: 'bar'
//                 },
//                 series: [{
//                   name: 'Total Request',
//                   data: score
//                 }],
//                 xaxis: {
//                   categories: player,
//                 },
//                 // fill: {
//                 //     type: 'gradient',
//                 //     gradient: {
//                 //       shadeIntensity: 1,
//                 //       opacityFrom: 0.7,
//                 //       opacityTo: 0.9,
//                 //       stops: [0, 100]
//                 //     }
//                 // },
//                 tooltip: {
//                     x: {
//                       format: 'dd MMM yyyy'
//                     }
//                   }
//               }
              
//               var chart = new ApexCharts(document.querySelector("#chart2"), options);
              
//               chart.render();
            
//             }
//         })
// })

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
              title: {
                text: "Total Job Status",
                align: "left"
              },
                chart: {
                    height: 250,
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

//------------------------------------
//              Row 2 | Chart 1
//------------------------------------
$(document).ready(function () {
  $.ajax({
    url: "http://localhost/plexus_dashboard/analytics_php/row2_C1.php",
    method: "GET",
    success: function (data) {
      //console.log(data);
      var player = [];
      var score = [];

      for (var i in data) {
        player.push(data[i]['dateReceived']);
        score.push(data[i]['ROUND(sum(calCost),2)']);
      }

      var options = {
        title: {
          text: "Total Calibration Cost",
          align: "left"
        },
        chart: {
          type: 'area'
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
        },
        yaxis: {
          title: {
            text: 'Frequency'
          }
        },
        dataLabels: {
          enabled: false
        },
        
        tooltip: {
          x: {
            format: 'MMM dd yyyy'
          }
        }
      }

      var chart = new ApexCharts(document.querySelector("#chart1_row2"), options);

      chart.render();

    }
  })
})


//------------------------------------
//              Row 2 | Chart 2
//------------------------------------
$(document).ready(function () {
  $.ajax({
    url: "http://localhost/plexus_dashboard/analytics_php/row2_C2.php",
    method: "GET",
    success: function (data) {
      //console.log(data);
      var player = [];
      var score = [];

      for (var i in data) {
        player.push(data[i]['siteCode']);
        score.push(data[i]['ROUND(sum(calCost),2)']);
      }

      var options = {
        title: {
          text: "Calibration Cost By Location",
          align: "left"
        },
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
        yaxis: {
          title: {
            text: 'Frequency'
          }
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
          y: {
            formatter: function (val) {
              return "$ " + val 
            }
          }
        }
      }

      var chart = new ApexCharts(document.querySelector("#chart2_row2"), options);

      chart.render();

    }
  })
})



//------------------------------------
//              Row 2 | Chart 3
//------------------------------------
$(document).ready(function () {
  $.ajax({
    url: "http://localhost/plexus_dashboard/analytics_php/row2_C3.php",
    method: "GET",
    success: function (data) {
      //console.log(data);
      var siteCode = [];
      var data_E = [];
      var data_M = [];
      var data_T = [];

      for (var i in data) {
        siteCode.push(data[i]['siteCode']);
        data_E.push(data[i]['E']);
        data_M.push(data[i]['M']);
        data_T.push(data[i]['T']);
      }

      var options = {
        title: {
          text: "Job Request By Location",
          align: "left"
        },
        chart: {
          height: 250,
          type: 'bar',
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '70%',
            //endingShape: 'rounded'
          },
        },
        dataLabels: {
          enabled: false,
          //offsetY: 50,
          style: {
            fontSize: '12px',
            colors: ["#304758"]
          }
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        series: [{
          name: 'Electrical',
          data: data_E,
        }, {
          name: 'Mechanical',
          data: data_M,
        }, {
          name: 'Temperature',
          data: data_T,
        }],

        xaxis: {
          categories: siteCode,
        },
        yaxis: {
          title: {
            text: 'Frequency'
          }
        },
        fill: {
          opacity: 1

        },
        tooltip: {
          y: {
            formatter: function (val) {
              return val + " items"
            }
          }
        }
      }

      var chart = new ApexCharts(document.querySelector("#chart3_row2"), options);

      chart.render();

    }
  })
})


//------------------------------------
//              Row 3 | Chart 1
//------------------------------------
$(document).ready(function () {
  $.ajax({
    url: "http://localhost/plexus_dashboard/analytics_php/row3_C1.php",
    method: "GET",
    success: function (data) {
      //console.log(data);
      var type = [];
      var data_type = [];
      

      for (var i in data) {
        type.push(data[i]['type']);
        data_type.push(data[i]['count(type)']);
        
      }
      var numbers = data_type.map(Number);
      console.log(numbers);
      // Since the array generated is in string, .map(Number) is used for integer conversion.
      // console.log(data_type);
      var options = {
          title: {
            text: "Inventory Type ",
            align: "left"
          },
          chart: {
            width: 380,
            type: 'pie',
          },
          labels: ["Electrical", "Temperature", "Mechanical"],
          series: numbers,
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
      }

      var chart = new ApexCharts(document.querySelector("#chart1_row3"), options);

      chart.render();

    }
  })
})


    // ------------------------------------
    //              Row 3 | Chart 1
    //------------------------------------
    $(document).ready(function () {
      $.ajax({
        url: "http://localhost/plexus_dashboard/analytics_php/row3_c2.php",
        method: "GET",
        success: function (data) {
          //console.log(data);
          var type = [];
          var data_type = [];


          for (var i in data) {
            type.push(data[i]['type']);
            data_type.push(data[i]['count(type)']);

          }
          var numbers = data_type.map(Number);
          console.log(numbers);
          // Since the array generated is in string, .map(Number) is used for integer conversion.
          // console.log(data_type);
          var options = {
            title: {
              text: "Inventory Type ",
              align: "left"
            },
            chart: {
              width: 380,
              type: 'pie',
            },
            labels: type,
            series: numbers,
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          }

          var chart = new ApexCharts(document.querySelector("#chart2_row3"), options);

          chart.render();

        }
      })
    })



















