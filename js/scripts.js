function Pizza(size, cost) {
  this.size = size;
  this.cost = 10;
  // this.toppings = [];
}

Pizza.prototype.priceAdjusted = function() {
  if (this.size === "Medium") {
    this.cost += 4;
  }

  if (this.size === "Large") {
    this.cost += 8;
  }

  if (this.size === "Planetoidal") {
    this.cost += 37000000;
  }

  return this.cost;
}

// function Topping(topping) {
//
// }
//
// Topping.prototype.addTopping = function() {
//
// }

function Order(customerName, numberOfPizzas) {
  this.customerName = customerName;
  this.numberOfPizzas = numberOfPizzas;
  this.price = null;
}

function resetFields() {
  $("select#size-dropdown").val("");
  $("input#topping1").val("");
  $("input#topping2").val("");
  $("input#topping3").val("");
  $("input#topping4").val("");
  $("input#topping5").val("");
  $("input#topping6").val("");
  $("input#topping7").val("");
  $("input#topping8").val("");
  $("input#topping9").val("");
  $("input#topping10").val("");
  $("input#topping11").val("");
  $("input#numberOfPizzas").val("");
  $("input#customerName").val("");
}

$(document).ready(function() {
  $("form#build-order").submit(function() {
    event.preventDefault();

    var size = $("input#size-dropdown option:selected").val();

  });
});
