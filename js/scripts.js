//business

function Pizza(topping, size) {
  this.pTopping = [topping];
  this.pSize = size;
  }

Pizza.prototype.cost = function() {
  var pizzaPrice = 10;
  if (this.pTopping === "Pepperoni"){
    pizzaPrice += 3;
  }
    else if (this.pTopping === "Artichoke") {
      pizzaPrice += 2
  }
    else if (this.pTopping === "Olives") {
      pizzaPrice += 1
    }
    else if (this.pTopping === "Mushrooms") {
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
}


//ui//////////////////////////////////
$(document).ready(function() {
  $("form").submit(function(event) {

    event.preventDefault();
    var inputtedTopping = $('.chk :checked').each(function() {
        return($(this).val());
        }).get();
    var inputtedSize = $("#size").val();
    var newPizza = new Pizza([inputtedTopping], inputtedSize);
    $("#total").text(newPizza.cost());
    $("#totalHeader").show();
  });
    $("#thankYou").click(function(event){
    $("#totalHeader").hide();
    $("#thankYouMessage").show();
  });
});
