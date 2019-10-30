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
				player.push(data[i].InstrumentDesc);
                score.push(data[i]['count(InstrumentDesc)']);
			}
			
            var data = {
				datasets: [{
					data: score,
					backgroundColor: "rgba(42, 82, 152, 0.5)",
					borderColor: 'rgb(42, 82, 152)',
					borderWidth: 1,
				}],
				labels: player,
			};
			var ctx = $("#myChart");
			new Chart(ctx, {
				data: data,
				type: 'polarArea',
				options: {
					legend: {
                        display: false
					},
					
					layout: {
                        padding: {
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0,
                          }
                        },
				}
				
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

			//--------------------- chart goes here
			var ctx = document.getElementById("costChart").getContext('2d');

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
					borderWidth: 2,
					pointBorderColor: "#fff",
					pointBackgroundColor: "rgba(173, 53, 186, 0.1)",
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
										max: 100,
										min: 0,
										stepSize: 20,
										
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

			var chartdata = {
				labels: player,
				datasets : [
					{
						//fill: false,
						//backgroundColor: '#c31432',
						backgroundColor: 'rgba(42, 82, 152, 0.4)',
						borderColor: 'rgb(42, 82, 152)',
						borderWidth: 2,
						pointRadius: 1,
						// ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
						// borderColor: 'rgba(200, 200, 200, 0.75)',
						// hoverBackgroundColor: 'rgba(200, 200, 200, 1)',
						// hoverBorderColor: 'rgba(200, 200, 200, 1)',
						data: score
					}
				]
			};

			var ctx = $("#mainChart_7");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,
				

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
                                max: 10,
                                min: 0,
                                stepSize: 2
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

			var ctx = $("#mainChart_30");

			var barGraph = new Chart(ctx, {
				type: 'bar',
				data: chartdata,

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

							type: 'time',
							// position: 'bottom',
							time: {
								// displayFormats: {'day': 'MM/YY'},
								// tooltipFormat: 'DD/MM/YY',
								unit: 'day',
							}
						}],

						yAxes: [{
							

							ticks: {
								max: 12,
                                min: 0,
                                stepSize: 2
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
								max: 12,
                                min: 0,
                                stepSize: 2
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