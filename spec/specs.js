// function Order(customerName, pizzaSize, numberOfPizzas, cost, toppings)

describe('Order', function() {
  it("gathers order information", function() {
    var testOrder = new Order("Leah", "Medium", 3);
    expect(testOrder.customerName).to.equal("Leah");
    expect(testOrder.pizzaSize).to.equal("Medium");
    expect(testOrder.numberOfPizzas).to.equal(3);
  });

  it("adjusts price of order based on size and quantity", function() {
    var testOrder = new Order("Leah", "Large", 2);
    expect(testOrder.price()).to.equal(36);
  });

  it("determines the toppings the customer wants", function() {
    var testOrder = new Order("Leah", "Medium", 2, null, []);
    testOrder.toppings.push("Pepperoni", "Canadian Bacon", "Mushrooms", "Space Dust");
    expect(testOrder.toppings).to.eql(["Pepperoni", "Canadian Bacon", "Mushrooms", "Space Dust"]);
  });

  it("determines the price based on all factors", function() {
    var testOrder = new Order("Leah", "Medium", 2, null, []);
    testOrder.toppings.push("Pepperoni", "Canadian Bacon", "Mushrooms", "Space Dust");
    expect(testOrder.price()).to.equal(32);
  });
});
