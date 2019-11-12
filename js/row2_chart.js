// ---------------------------------------------------------------------------
//                      Request (Completed) -- Chart
// ---------------------------------------------------------------------------
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/row2_requestCompleted.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i].dateReceived);
                score.push(data[i]['count(status)']);
			}
			//console.log(player);
			//player.sort();
			
            var ctx = document.getElementById("requestCompleted_chartR2").getContext('2d');

            var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
            gradientFill.addColorStop(0, "rgba(42, 82, 152, 0.5)");
            gradientFill.addColorStop(1, "rgba(42, 82, 152, 0.1)");
                
            
            var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: player, // X-axis Data
                datasets: [
                {
                    label: "Total Request Completed",
                    data: score, // Y-axis data
                    backgroundColor: gradientFill,
                    borderColor: [
                        'rgb(42, 82, 152)',
                    ],
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBorderColor: "rgba(255, 255 , 255, 0.1)",
                    pointBackgroundColor: "rgba(255, 255 , 255, 0.1)",
                }
                ]
            },
            options: {
                     //Your option here		
                     layout: {
                        padding: {
                            left: -50,
                            right: 0,
                            top: 0,
                            bottom: -50,
                          }
                        },
            scales: {
                        xAxes: [{
                            ticks: {
                                display: false 
                            },
                            gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                        }],
            
                        yAxes: [{
                            ticks: {
                                display: false,
                                min: 0,
                                max: 30,
                                stepSize: 2
                            },
                            gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                            
                        }]
            },
            
            legend: {
                        display: false
            },
            //Show information on pointer
            tooltips: {
                        enabled: true
            }
                            
                    }
            });            
            //
		}
	});
});


// ---------------------------------------------------------------------------
//                      In-Review Request -- Chart
// ---------------------------------------------------------------------------

$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/row2_requestInReview.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i].dateReceived);
                score.push(data[i]['count(status)']);
			}
			//console.log(player);
			//player.sort();
			
            var ctx = document.getElementById("inReview_chartR2").getContext('2d');

            var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
            gradientFill.addColorStop(0, "rgba(42, 82, 152, 0.5)");
            gradientFill.addColorStop(1, "rgba(42, 82, 152, 0.1)");
                
            
            var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: player, // X-axis Data
                datasets: [
                {
                    label: "Total Request (In-Review)",
                    data: score, // Y-axis data
                    backgroundColor: gradientFill,
                    borderColor: [
                        'rgb(42, 82, 152)',
                    ],
                    borderWidth: 3,
                    pointRadius: 10,
                    pointBorderColor: "rgba(255, 255 , 255, 0.1)",
                    pointBackgroundColor: "rgba(255, 255 , 255, 0.1)",
                }
                ]
            },
            options: {
                     //Your option here		
                     layout: {
                        padding: {
                            left: -50,
                            right: 0,
                            top: 0,
                            bottom: -20
                          }
                        },
            scales: {
                        xAxes: [{
                            ticks: {
                                display: false 
                            },
                            gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                            
                        }],
            
                        yAxes: [{
                            ticks: {
                                display: false,
                                min: 0,
                                max: 20,
                                stepSize: 1
                            },
                            gridLines: {
                                        display: false,
                                        drawBorder: false
                                    }
                        }]
            },
            
            legend: {
                        display: false
            },
            //Show information on pointer
            tooltips: {
                        enabled: true
            }
                            
                    }
            });
            //
		}
	});
});

// ---------------------------------------------------------------------------
//                      Cost Saving -- Chart
// ---------------------------------------------------------------------------
$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/row2_costSavings.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i].dateReceived);
                score.push(data[i]['ROUND(sum(calCost),2)']);
            }
            score = Array.from(score, item => item || "0"); //if value null ganti 'zero'
            //console.log(score);
            //
            var ctx = document.getElementById("calCost_chartR2").getContext('2d');

            var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
            gradientFill.addColorStop(0, "rgba(173, 53, 186, 1)");
            gradientFill.addColorStop(1, "rgba(173, 53, 186, 0.1)");
                

            var myLineChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: player, // X-axis Data
                datasets: [
                {
                    //label: "Your title goes here",
                    data: score, // Y-axis data
                    backgroundColor: gradientFill,
                    borderColor: [
                    '#AD35BA',
                    ],
                    borderWidth: 2,
                    pointRadius: 0,
                    // pointBorderColor: "#fff",
                    // pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
                }
                ]
            },
            options: {
                    //Your option here		
                        layout: {
                                padding: {
                                    left: -50,
                                    right: 0,
                                    top: 0,
                                    bottom: -20
                                    }
                        },

                        scales: {
                                xAxes: [{
                                    ticks: {
                                        display: false 
                                    },
                                    gridLines: {
                                                display: false,
                                                drawBorder: false
                                            }
                                }],
                    
                                yAxes: [{
                                    ticks: {
                                        display: false 
                                    },
                                    gridLines: {
                                                display: false,
                                                drawBorder: false
                                            }
                                }]
                        },
                        
                        legend: {
                                    display: false
                        },
                        //Show information on pointer
                        tooltips: {
                                    enabled: false
                        }
                            
                    }
            });
            
            //
		}
	});
});


















// ---------------------------------------------------------------------------
//                  Backup old chart template for ROW TWO only!
// ---------------------------------------------------------------------------
// var ctx = document.getElementById('chartSix').getContext('2d');
// var chart = new Chart(ctx, {
//     // The type of chart we want to create
//     type: 'line',

//     // The data for our dataset
//     data: {
//         labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//         datasets: [{
//             label: 'My First dataset',
//             backgroundColor: 'rgba(255, 99, 132, 0.2)',
//             borderColor: 'rgb(255, 99, 132)',
//             borderWidth: 1,
//             data: [0, 10, 5, 2, 20, 30, 45],
//             pointRadius: 0

//         }]
//     },

//     // Configuration options go here
//     options: {
//       layout: {
//                   padding: {
//                       left: -50,
//                       right: 0,
//                       top: 0,
//                       bottom: 0
//                     }
//                   },
//       scales: {
//                   xAxes: [{
//                       ticks: {
//                           display: false 
//                       },
//                       gridLines: {
//                                   display: false,
//                                   drawBorder: false
//                               }
//                   }],

//                   yAxes: [{
//                       ticks: {
//                           display: false 
//                       },
//                       gridLines: {
//                                   display: false,
//                                   drawBorder: false
//                               }
//                   }]
//       },

//       legend: {
//                   display: false
//       },
//       //Show information on pointer
//       tooltips: {
//                   enabled: false
//       }


//     }
// });    