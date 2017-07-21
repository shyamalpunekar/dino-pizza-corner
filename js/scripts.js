//buisnesss logic
var newCustomer = new Customer();
var meat = [];
var vegetable = [];
var orderTotal = 0;

function Customer(customername,size, crust, sauce, cheese, veg) {
  this.customername= name;
  this.pizzanumber = 1;
  this.pizzasize = size;
  this.pizzacrust = crust;
  this.pizzasauce = sauce;
  this.pizzacheese = cheese;
  this.pizzameat = meat;
  this.pizzaveg = veg;
  this.total = 1;
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
  $("#orderForm").hide();
  $(".orderSummary").show();
  $(".customerName").text();
  $(".customerPhone").text();
  $(".sizePizza").text(newCustomer.pizzasize);
  $(".crustPizza").text(newCustomer.pizzacrust);
  $(".saucePizza").text(newCustomer.pizzasauce);
  $(".cheesePizza").text(newCustomer.pizzacheese);
  $(".meatPizza").text(newCustomer.pizzameat);
  $(".veggiesPizza").text(newCustomer.pizzaveg);
  $(".pizza-price").text(newCustomer.total);
}

//form submit
//User Interface
$(document).ready(function() {
  $("#orderForm").click(function(event){
    // alert("hi")
   event.preventDefault();
   var customerName = $(".customerName").val();
    var customerPhone = $(".customerPhone").val();
    var number = $("#pizza-count").val();
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
