//buisnesss logic
function Pizza(size, customerName, customerPhone) {
  this.pizzaSize = size;
  this.customerName = customerName;
  this.customerPhone = customerPhone;
  this.pizzaIngredients = [];
};

Pizza.prototype.price = function () {
  var price = 8;

  if (this.pizzaSize === "Large") {
    price *= 3;
  } else if (this.pizzaSize === "Medium") {
    price *= 2;
  } else {
    price *= 1;
  }

  if (this.pizzaIngredients.length === 0) {
    price *= 1;
  } else {
    price += this.pizzaIngredients.length;
  }
  return price;
};

//User Interface
$(document).ready(function () {
  $("#pizzaForm").submit(function (event) {
    event.preventDefault();
    var customerName = $("#customerName").val();
    var customerPhone = $("#customerPhone").val();
    var countNumber = $("#pizza-count").val();
    var inputtedPizzaSize = $("#pizza-size").val();
    //Creating an instance
    var newPizza = new Pizza(inputtedPizzaSize, customerName, customerPhone);
    var crust = $("#pizza-crust").val();
    var cheese = $("#cheese-type").val();


    $("input:checkbox[name='meat']:checked").each(function () {
      newPizza.pizzaIngredients.push($(this).val());
    });
    $("input:checkbox[name='vegetable']:checked").each(function () {
      newPizza.pizzaIngredients.push($(this).val());
    });


    $("ul#pizza-order-list").append("<li><button type='submit' class='btn btn-success btn-margin'><span class='pizzaOrder'>" + newPizza.pizzaSize + " Pizza Order" + "</button></span></li>");

    $(".pizzaOrder").last().click(function () {
      $("#pizza-order-detail").show();
      $(".pizza-customerName").text(newPizza.customerName);
      $(".pizza-customerPhone").text(newPizza.customerPhone);
      $(".pizza-size").text(newPizza.pizzaSize);
      $(".pizza-ingredients").text(newPizza.pizzaIngredients);
      $(".order-total").text(newPizza.price());

    });
  });
});


// Calculate Price for pizza
// Customer.prototype.meatPrice = function () {
//   if (this.pizzasize === "Small") {
//     for (index = 0; index < this.pizzameat.length; index++) {
//       this.total += 1;
//     }
//   } else if (this.pizzasize === "Medium") {
//     for (index = 0; index < this.pizzameat.length; index++) {
//       this.total += 2;
//     }
//   } else if (this.pizzasize === "Large") {
//     for (index = 0; index < this.pizzameat.length; index++) {
//       this.total += 3;
//     }
//   } else {
//     for (index = 0; index < this.pizzameat.length; index++) {
//       this.total += 4;
//       console.log(this.total);
//     }
//   }
// }

//form Reset
var resetValues = function () {
  $(".customerName").val("");
  $(".customerPhone").val("");
  $("#pizza-count").val("");
  $("#pizza-size").val("");
  $("#pizza-crust").val("");
  $("#pizza-sauce").val("");
  $("#cheese-type").val("");
}


// $("#placeOrder").click(function (event) {
//   $("#show-total-price").show();
//   $(".orderSubmitted").show();
//   resetValues();
// });
