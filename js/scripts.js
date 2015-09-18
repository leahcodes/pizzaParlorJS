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
    $("form#build-order").trigger("reset");
  });

  $("#back-to-order-form").click(function() {
    $(".receipt").hide();
    $("form#build-order").show();
  })
});
