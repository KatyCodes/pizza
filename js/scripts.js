// function Pizza(topping, size, cost) {
//   this.topping = topping;
//   this.size = size;
//   this.cost = cost;
// }
//
// Pizza.prototype.totalcost = function () {
//
// }

$(document).ready(function() {
  $("#toppingBtn").click(function(event) {
    
    event.preventDefault();

    var inputtedtopping = $("#toppings").val();
    $("#pizzaToppings").append("<li>" + inputtedtopping + "</li>");
  });

});
