var width = 600;
var height =600;

var margin = {top: 25,
		  left:25,
		  right: 25,
		  bottom:25};

var svg = d3.select("body")
  .append("svg")
  .attr("width",width)
  .attr("height",height);


var data = [{x:"MLB1", y:27},
		{x:"NHL1", y:23},
		{x:"NBA1", y:17},
		{x:"NBA2", y:16},
		{x:"NHL2", y:13},
    {x:"NHL3", y:11},
    {x:"MLB2", y:11},
    {x:"MLB3", y:8},
    {x:"NHL4", y:6},
    {x:"NBA3", y:6},
    {x:"NFL1", y:6},
    {x:"MLB4", y:5},
    {x:"NHL5", y:5},
    {x:"NBA4", y:5},
    {x:"NFL2", y:5},
    {x:"MLB5", y:4},
    {x:"NBA5", y:4},
    {x:"NFL3", y:4},
    {x:"NFL4", y:3},
    {x:"NFL5", y:2},
];


var xScale = d3.scaleBand()
	.domain(["MLB1","NHL1","NBA1","NBA2","NHL2","NHL3","MLB2","MLB3","NHL4","NBA3","NFL1","MLB4","NHL5","NBA4","NFL2","MLB5","NBA5","NFL3","NFL4","NFL5"])
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
