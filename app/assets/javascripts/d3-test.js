$(document).ready(function () {
  console.log("Ready!");
  clickListener();
});

var clickListener = function() {
  $("#do-stuff").on("click", function(event){
    event.preventDefault();
    doStuff();
  })
}

var doStuff = function() {
  var barData = [ 25, 7, 5, 26, 11, 8, 25, 14, 23, 19,
                14, 11, 22, 29, 11, 13, 12, 17, 18, 10,
                24, 18, 25, 9, 3 ];
  barChart(barData);
}

var barChart = function(dataset) {
  container = d3.select("#container").selectAll("p").data(dataset);
  console.log(container);
  container.enter()
    .append("div")
    .attr("class", "bar")
    .style("height", function(d) {
      var barHeight = d * 5;
      return barHeight + "px";
    })
    .style("background-color", function(d) {
      var g = d * 8;
      return "rgb(" + g + "," + g + "," + g + ")";
    })
    ;
}

var circles = function(dataset) {

}


var calculateStuff = function(n) {
  return n;
}
