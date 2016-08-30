//business

function Pizza(topping, size) {
  this.pTopping = topping;
  this.pSize = size;
  this.price = 0;
  }

Pizza.prototype.cost = function() {
  var pizzaPrice = 10;
  for (i=0; i<=7; i++) {
    if (this.pTopping[i] === "Pepperoni"){
      pizzaPrice += 3;
    }
      else if (this.pTopping[i] === "Artichoke") {
        pizzaPrice += 2
    }
      else if (this.pTopping[i] === "Olives") {
        pizzaPrice += 1
      }
      else if (this.pTopping[i] === "Mushrooms") {
        pizzaPrice += 1;
    }
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
    return this.price =pizzaPrice;
}



//ui//////////////////////////////////
$(document).ready(function() {
  $("form").submit(function(event) {
    debugger;
    event.preventDefault();
    var toppings = [];
     $.each($("input:checked"), function() {
       toppings.push($(this).val());
     });
    var inputtedSize = $("#size").val();
    var newPizza = new Pizza(toppings, inputtedSize);
    $("#total").text(newPizza.cost());
    $("#totalHeader").show();
  });
    $("#thankYou").click(function(event){
    $("#totalHeader").hide();
    $("#thankYouMessage").show();
  });
});
