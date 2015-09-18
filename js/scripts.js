function Order(customerName, pizzaSize, numberOfPizzas, cost, toppings) {
  this.customerName = customerName;
  this.pizzaSize = pizzaSize;
  this.numberOfPizzas = numberOfPizzas;
  this.cost = 10;
  this.toppings = [];
}

Order.prototype.price = function() {
  if (this.pizzaSize === "Medium") {
      this.cost += 4;
  }

  if (this.pizzaSize === "Large") {
    this.cost += 8;
  }

  if (this.pizzaSize === "Planetoidal") {
    this.cost += 37000000;
  }

  if (this.toppings.length > 2) {
    this.cost += (this.toppings.length - 2);
  }

  if (this.numberOfPizzas > 1) {
    this.cost = (this.cost * this.numberOfPizzas);
  }

  return this.cost;
}

//// COULDN'T GET THIS TO WORK... ////
// Order.prototype.listToppings = function() {
//   this.toppings.each(function(topping) {
//     return "<li>" + topping + "</li>";
//   });
// }



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

    var customerName = $("input#customerName").val();
    var pizzaSize = $(this).find('#size-dropdown option:selected').val();
    var numberOfPizzas = parseInt($(this).find('#number-of-pizzas').val());

    var newOrder = new Order(customerName, pizzaSize, numberOfPizzas);

    $(".checkbox input:checkbox:checked").map(function() {
      newOrder.toppings.push($(this).val());
    });

    newOrder.cost = newOrder.price();

    $("#customer-name-receipt").text(newOrder.customerName);
    $("#pizza-size-receipt").text(newOrder.pizzaSize);
    $("#number-of-pizzas-receipt").text(newOrder.numberOfPizzas);
    $("#order-cost-receipt").text(newOrder.cost);
    $("#toppings-receipt").text(newOrder.toppings.join(", "));

    $("form#build-order").hide();
    $(".receipt").show();

  });
});
