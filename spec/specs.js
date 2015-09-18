describe('Pizza', function() {
  it("creates a new pizza with the inputted specifications", function() {
    var testPizza = new Pizza("Medium");
    expect(testPizza.size).to.equal("Medium");
  });
});
