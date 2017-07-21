//buisnesss logic
var newCustomer = new Customer();
var meat = [];
var vegetable = [];
var orderTotal = 0;

function Customer(customerName,size, crust, sauce, cheese, veg) {
  this.customerName= customerName;
  this.pizzaCount = 1;
  this.pizzaSize = size;
  this.pizzaCrust = crust;
  this.pizzaSauce = sauce;
  this.pizzaCheese = cheese;
  this.pizzaMeat = meat;
  this.pizzaVeg = veg;
  this.total = 1;
}

//Add price as per size selected
Customer.prototype.size = function() {
  if (this.pizzaSize === "Small") {
    return this.total += 12;
  } else if (this.pizzaSize === "Medium") {
    return this.total += 15;
  } else if (this.pizzaSize === "Large") {
    return this.total += 18;
  } else {
    return this.total += 21;
  }
}


//form Reset
var resetValues = function(){
  $(".customerName").val("");
  $(".customerPhone").val("");
  $("#pizza-count").val("");
  $("#pizza-size").val("");
  $("#pizza-crust").val("");
  $("#pizza-sauce").val("");
  $("#cheese-type").val("");
}

var displayResult = function() {
  $("#customerName").text(customerName);
  $("#customerPhone").text(customerPhone);
  $(".sizePizza").text(newCustomer.pizzaSize);
  $(".crustPizza").text(newCustomer.pizzaCrust);
  $(".saucePizza").text(newCustomer.pizzaSauce);
  $(".cheesePizza").text(newCustomer.pizzaCheese);
  $(".meatPizza").text(newCustomer.pizzaMeat);
  $(".veggiesPizza").text(newCustomer.pizzaVeg);
  $(".pizza-price").text(newCustomer.total);
  $("#orderSummary").show();
}


//form submit
//User Interface
$(document).ready(function() {
  $("#pizzaForm").submit(function(event) {
    event.preventDefault();
    var customerName = $("#customerName").val();
    alert(customerName)
    var customerPhone = $("#customerPhone").val();
    var countNumber = $("#pizza-count").val();
    var size = $("#pizza-size").val();
    var crust = $("#pizza-crust").val();
    var sauces = $("#pizza-sauce").val();
    var cheese = $("#cheese-type").val();
    $("input:checkbox[name='meat']:checked").each(function(){
      (meat).push(this.value);
    });
    $("input:checkbox[name='vegetable']:checked").each(function(){
      (vegetable).push(this.value);
    });
    displayResult();
  });
});
    // $("#placeOrder").click(function(event) {
    //    $("#show-total-price").hide();
    //    $(".orderSubmitted").show();
    //    resetValues();
    //  });
    //
    //  $("#newOrder").click(function(even){
    //    resetValues();
    //    $("#orderForm").show();
    //    $(".orderSubmitted").hide();
    //  });
// });
