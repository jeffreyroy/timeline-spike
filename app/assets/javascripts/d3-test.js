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
  var dataset = [ 5, 10, 15, 20, 25 ];
  container = d3.select("#container").selectAll("p");
  console.log(container);
  container.data(dataset).enter().append("p").text("Hi!");

}
