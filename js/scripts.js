
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

//form submit
$(document).ready(function() {
  $("#orderForm").click(function(event){
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

});

});
