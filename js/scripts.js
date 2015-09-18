function Pizza(size) {
  this.size = size;
}

function Topping(topping) {
  this.topping = topping;
}

function Order(customerName, numberOfPizzas) {
  this.customerName = customerName;
  this.numberOfPizzas = numberOfPizzas;
  this.price = null;
}
//
// function resetFields() {
//   $("input#   ").val("");
// }
