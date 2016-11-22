var myWeights = [
  {age: 1, weight: 27},
  {age: 2, weight: 11},
  {age: 3, weight: 8},
  {age: 4, weight: 5},
  {age: 5, weight: 5},
  {age: 6, weight: 5},
  {age: 7, weight: 5},
  {age: 8, weight: 5},
  {age: 9, weight: 4},
  {age: 10, weight: 4},
  {age: 11, weight: 3},
  {age: 12, weight: 3},
  {age: 13, weight: 3},
  {age: 14, weight: 2},
  {age: 15, weight: 2},
  {age: 16, weight: 2},
  {age: 17, weight: 2},
  {age: 18, weight: 2},
  {age: 19, weight: 2},
  {age: 20, weight: 2},
  {age: 21, weight: 2},
  {age: 22, weight: 1},
  {age: 23, weight: 1},
  {age: 24, weight: 1},
  {age: 25, weight: 1},
  {age: 26, weight: 1},
  {age: 27, weight: 1},
  {age: 28, weight: 1}
];

var height = 1000;
var width = 1000;
var margin = {left: 60, bottom: 60, right: 10, top: 10};

var weightScale     = d3.scaleLinear().domain([0,30]).range([height - margin.bottom, margin.top]);
var ageScale        = d3.scaleLinear().domain([0,30]).range([margin.left, width - margin.right]);


function weightToY (data) {
 return weightScale(data.weight);
};

function ageToX (data) {
  return ageScale(data.age);
};

var svg = d3.select('svg');
var axisBottom =d3.axisBottom(ageScale).ticks(25);
var axisLeft =d3.axisLeft(weightScale).ticks(5);

svg.selectAll('circle')
  .data(myWeights)
  .enter()
  .append("circle")
  .attr('class', 'weight')
  .attr("cx", ageToX)
  .attr("cy", weightToY)
  .attr("fill", "hsl(0,0%,0%)")
  .attr("r", '5');

svg.append('g')
  .attr("transform", "translate(0," + (height - margin.bottom) + ")")
  .call(axisBottom);

svg.append('g')
  .attr("transform", "translate(" + margin.left + ",0)")
  .call(axisLeft);

// text label for the y axis
svg.append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", margin.left/3)
  .attr("x", 0 - (height / 2))
  .style("text-anchor", "middle")
  .style("color", "white")
  .text("Titles");

// text label for the x axis
svg.append("text")
  .attr("y", height - margin.bottom/3)
  .attr("x", width / 2)
  .style("text-anchor", "middle")
  .text("Team");
