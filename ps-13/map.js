var width = 500;
var height =500;

var margin = {top: 25,
		  left:25,
		  right: 25,
		  bottom:25};

var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);


var data = [{x:"NYY", y:27},
		{x:"MON", y:24},
		{x:"BOS", y:17},
		{x:"LAL", y:16},
		{x:"*Tie(2)", y:13}
];


var xScale = d3.scaleBand()
	.domain(["NYY","MON","BOS","LAL","*Tie(2)"])
  	.rangeRound([margin.left, width - margin.right]);

var yScale = d3.scaleLinear()
	.domain([0,30])
  	.range([height-margin.bottom, margin.top]);


var xAxis = svg.append("g")
	.attr("transform","translate(0," + (height-margin.bottom) + ")")
	.call(d3.axisBottom().scale(xScale));

var yAxis = svg.append("g")
	.attr("transform","translate(" + margin.left + ",0)")
	.call(d3.axisLeft().scale(yScale));


var barWidth = 20;
var bars = svg.selectAll("rect")
	.data(data)
	.enter()
	.append("rect")
      	.attr("x", function(d) {
		  return xScale(d.x) + xScale.bandwidth()/2 - barWidth/2;
		})
		.attr("y", function(d) { return yScale(d.y); })
		.attr("width", barWidth)
		.attr("height", function(d) {
		  return height - margin.bottom - yScale(d.y);
		})
    .attr("fill","black");
