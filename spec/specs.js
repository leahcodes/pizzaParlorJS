describe('Pizza', function() {
  it("creates a new pizza with the inputted specifications", function() {
    var testPizza = new Pizza("Medium");
    expect(testPizza.size).to.equal("Medium");
  });

  it("adjusts the cost of the pizza based on the users size selection", function() {
    var testPizza = new Pizza("Large");
    expect(testPizza.priceAdjustedBySize()).to.equal(18);
  });
});

describe('Topping', function() {
  it("creates a topping with the inputted name", function() {
    var testTopping = new Topping("Pineapple");
    expect(testTopping.topping).to.equal("Pineapple");
  });
});

describe('Order', function() {
  it("creates an order for the customer", function () {
    var testOrder = new Order("Leah", 2);
    expect(testOrder.customerName).to.equal("Leah");
    expect(testOrder.numberOfPizzas).to.equal(2);
  });
});
