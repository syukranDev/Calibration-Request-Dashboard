var ctx = document.getElementById("inReview_chartR2").getContext('2d');

var gradientFill = ctx.createLinearGradient(0, 0, 0, 290);
gradientFill.addColorStop(0, "rgba(255, 99, 132, 1)");
gradientFill.addColorStop(1, "rgba(255, 99, 132, 0.1)");
	

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
			'rgb(255, 99, 132)',
		],
		borderWidth: 1,
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