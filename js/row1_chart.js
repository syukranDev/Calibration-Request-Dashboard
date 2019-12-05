// ---------------------------------------------------------------------------
//                      Instrument Inventory -- Chart
// ---------------------------------------------------------------------------

$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/row1_inventory.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i].type);
                score.push(data[i]['count(type)']);
			}

			var chartdata = {
				labels: ["Mechanical","Electrical", "Temperature"],
				datasets: [
					{
						//fill: false,
						//backgroundColor: '#c31432',
						//rgb(54, 162, 235)
						backgroundColor: ['rgba(54, 162, 235, 0.3)', 'rgba(0,187,122,0.3)', 'rgba(254,176,25,0.3)'],
						borderColor: ['rgb(54, 162, 235)', 'rgb(0,187,122)', 'rgb(254,176,25)'],
						borderWidth: 2,
						pointRadius: 1,
						data: score
					}
				]
			};
			
			var ctx = $("#myChart");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,

				options: {
					title: {
						display: true,
						text: 'Total Request By Instrument Type'
					},

					legend: {
						display: false,
						
					},
					scales: {
						xAxes: [{
							gridLines: {
								//  display: true
							},

							

						}],

						yAxes: [{
					
							ticks: {
								max: 500,
                                min: 0,
                                stepSize: 100
							},

							gridLines: {
								// display: false
							}
						}]
					}
				},


			});
			
            
		}
	});
});


// ---------------------------------------------------------------------------
//                      Cost Saving -- Chart
// ---------------------------------------------------------------------------

$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/row1_costRequest.php",
		method: "GET",
		success: function(data) {
			
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i].dateReceived);
				score.push(data[i]['ROUND(sum(calCost),2)']);    
			}
			score = Array.from(score, item => item || "0");

			// console.log(score);
			//--------------------- chart goes here
			var ctx = document.getElementById("costChartRequest").getContext('2d');

			var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
			gradientFill.addColorStop(0, "rgba(42, 82, 152, 1)");
			gradientFill.addColorStop(1, "rgba(42, 82, 152, 0.1)");
				//44, 62, 80 black nice

			var myLineChart = new Chart(ctx, {
			type: 'line',
			data: {
				labels: player,
				datasets: [
				{
					label: "Total Calibration Cost ($)",
					data: score,
					backgroundColor: gradientFill,
					borderColor: [
						'rgb(42, 82, 152)',
					],
					borderWidth: 3,
					pointRadius: 0,
					// pointBorderColor: "#fff",
					// pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
				}
				]
			},
			options: {
							layout: {
								padding: {
									left: 0,
									right: 0,
									top: 0,
									bottom: 0
								}
								},
							title: {
								display: false,
								// text: 'Type of Instruments',
								// padding: 5
							},

							legend: {
								display: false,
								
							},

							scales: {
								xAxes: [{
									gridLines: {
										display:true	
									},

									type: 'time',
									
									time: {
										displayFormats: { day: 'MMM D'},
										unit: 'day',
									}
								}],

								yAxes: [{
									ticks: {
										max: 8000,
										min: 0,
										stepSize: 2000,
										
									},
									
									gridLines: {
										display:false
									}
								}]
							}	
						}
			});
			//--- chart code ends here
		}
	});
});



// ---------------------------------------------------------------------------
//                      Total Calibration Request -- Chart
// ---------------------------------------------------------------------------

// -------------------------------- Week
Chart.defaults.global.animation.duration = 700; //Chart animation duration
Chart.defaults.global.animation.easing = 'easeInOutQuad'; //Chart animation style

$(document).ready(function(){
	$.ajax({
		url: "http://localhost/plexus_dashboard/data_mainChart.php",
		method: "GET",
		success: function(data) {
			//console.log(data);
			var player = [];
			var score = [];

			for(var i in data) {
				player.push(data[i]['dateReceived']);
				score.push(data[i]['count(dateReceived)']);
            }
            
            //player.sort();
            //console.log(score);

			var ctx = document.getElementById("mainChart_7").getContext('2d');

			var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
			gradientFill.addColorStop(0, "rgba(42, 82, 152, 1)");
			gradientFill.addColorStop(1, "rgba(42, 82, 152, 0.1)");
			//44, 62, 80 black nice

			var myLineChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: player,
					datasets: [
						{
							label: "Total Calibration Cost ($)",
							data: score,
							backgroundColor: gradientFill,
							borderColor: 
								"rgba(42, 82, 152)",
							
							borderWidth: 2,
							pointBorderColor: "#fff",
							pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
						}
					]
				},
				options: {
					elements: {
						line: {
							tension: 0 // disables bezier curves
						}
					},
					responsive: true,
                    title: {
                        display: false,
                    },

                    legend: {
                        display: false,
                        
                    },

                    

                
                    scales: {
						xAxes: [{
							gridLines: {
								// display:false
							},
							
							type: 'time',
							// position: 'bottom',
							time: {
								displayFormats: { day: 'MMM D'},
								// tooltipFormat: 'DD/MM/YY',

								unit: 'day',
							}

						}],

                        yAxes: [{
							

                            ticks: {
                                max: 30,
                                min: 0,
                                stepSize: 5
							},
							
							gridLines: {
								display:false
							}
                        }]
                    }
				},
				
                
			});
		}
	});
});


// --------------------------------------- Months

$(document).ready(function () {
	$.ajax({
		url: "http://localhost/plexus_dashboard/data_mainChart30days.php",
		method: "GET",
		success: function (data) {
			//console.log(data);
			var player = [];
			var score = [];

			for (var i in data) {
				player.push(data[i]['dateReceived']);
				score.push(data[i]['count(dateReceived)']);
			}

			//player.sort();
			//console.log(score);

			var ctx = document.getElementById("mainChart_30").getContext('2d');

			var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
			gradientFill.addColorStop(0, "rgba(42, 82, 152, 1)");
			gradientFill.addColorStop(1, "rgba(42, 82, 152, 0.1)");
				//44, 62, 80 black nice

				var myLineChart = new Chart(ctx, {
				type: 'bar',
				data: {
					labels: player,
					datasets: [
					{
						label: "Total Calibration Cost ($)",
						data: score,
						backgroundColor: gradientFill,
						borderColor: [
							'rgb(42, 82, 152)',
						],
						borderWidth: 3,
						pointRadius: 0,
						pointBorderColor: "#fff",
						pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
					}
					]
				},

				options: {
					elements: {
						line: {
							tension: 0.4 // disables bezier curves
						}
					},
					title: {
						display: false,
					},

					legend: {
						display: false,

					},




					scales: {
						xAxes: [{
							gridLines: {
								// display: false
							},

							// ticks: {
							// 	maxRotation: 0,
							// 	minRotation: 0
							// },

							// type: 'time',
							// position: 'bottom',
							// time: {
							// 	//  displayFormats: {'day': 'MM/YY'},
								
							// 	unit: 'day',
							// }
						}],

						yAxes: [{
							

							ticks: {
								max: 30,
                                min: 0,
                                stepSize: 5
							},

							gridLines: {
								display: false
							}
						}]
					}
				},


			});
		}
	});
});

// --------------------------------------- Year

$(document).ready(function () {
	$.ajax({
		url: "http://localhost/plexus_dashboard/data_mainChart365days.php",
		method: "GET",
		success: function (data) {
			//console.log(data);
			var player = [];
			var score = [];

			for (var i in data) {
				player.push(data[i]['dateReceived']);
				score.push(data[i]['count(dateReceived)']);
			}

			//player.sort();
			//console.log(score);

			var chartdata = {
				labels: player,
				datasets: [
					{
						//fill: false,
						//backgroundColor: '#c31432',
						backgroundColor: 'rgba(42, 82, 152, 0.1)',
						borderColor: 'rgb(42, 82, 152)',
						borderWidth: 2,
						pointRadius: 1,
						data: score
					}
				]
			};

			var ctx = $("#mainChart_all");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,

				options: {
					title: {
						display: false,
					},

					legend: {
						display: false,

					},

					// layout: {
                    //     padding: {
                    //         left: -50,
                    //         right: 0,
                    //         top: 0,
                    //         bottom: 0
                    //       }
                    //     },

				
					scales: {
						xAxes: [{
							gridLines: {
								// display: false
							},

							// ticks: {
							// 	autoSkipPadding: 100,
							// 	maxRotation: 0,
							// 	minRotation: 0
							// },

							type: 'time',
							// position: 'bottom',
							time: {
								// displayFormats: {'day': 'MM/YY'},
								// tooltipFormat: 'DD/MM/YY',
								unit: 'month',
							}

							// ticks: {
							// 	display: false //x-label removed
							// }

						}],

						yAxes: [{
					
							ticks: {
								max: 30,
                                min: 0,
                                stepSize: 5
							},

							gridLines: {
								display: false
							}
						}]
					}
				},


			});
		}
	});
});

// ----------------------------------------------------------
// Data Selection for Total Cal Request - Chart
//------------------------------------------------------------
$(document).ready(function () {
	$("select").change(function () {
		$(this).find("option:selected").each(function () {
			var optionValue = $(this).attr("value");
			if (optionValue) {
				$(".hideContent").not("." + optionValue).hide();
				$("." + optionValue).show();
			} else {
				$(".hideContent").hide();
			}
		});
	}).change();
});