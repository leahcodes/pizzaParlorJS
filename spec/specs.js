describe('Pizza', function() {
  it("creates a new pizza with the inputted specifications", function() {
    var testPizza = new Pizza("Medium");
    expect(testPizza.size).to.equal("Medium");
  });
});

describe('Topping', function() {
  it("creates a topping with the inputted name", function() {
    var testTopping = new Topping("Pineapple");
    expect(testTopping.topping).to.equal("Pineapple");
  });
});
