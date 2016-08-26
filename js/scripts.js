//business

function Pizza(topping, size) {
  this.pTopping = topping;
  this.pSize = size;
}

Pizza.prototype.cost = function() {
  var pizzaPrice = 10;
  if (this.pTopping === "Pepperoni" || "Artichoke") {
    pizzaPrice += 3;
  }
    else if (this.pTopping === "Olives"){
      pizzaPrice += 1;
  }
    else if (this.pTopping === "Mushrooms"){
      pizzaPrice += 1;
  }
   if (this.pSize === "Small"){
      pizzaPrice += 5;
  }
    else if (this.pSize === "Medium"){
      pizzaPrice += 7;
  }
    else if (this.pSize === "Large"){
      pizzaPrice += 10;
  }
    return pizzaPrice;
    alert(pizzaPrice);
}


//ui
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var inputtedTopping = $("#topping").val();
    var inputtedSize = $("#size").val();

    var newPizza = new Pizza(inputtedTopping, inputtedSize);
    $("#paragraph").text(newPizza.cost());

  });
});
