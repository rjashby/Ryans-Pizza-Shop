//Business Logic
function Pizza(size, topping1, topping2, topping3) {
  this.size = size;
  this.topping1 = topping1;
  this.topping2 = topping2;
  this.topping3 = topping3;
}

Pizza.prototype.cost = function () {
  let priceTotal = 0;
  let sizeAdd = 0;
  let toppingOneAdd = 0;
  let toppingTwoAdd = 0;
  let toppingThreeAdd = 0;

  if(this.size === "small") {
    sizeAdd += 6;
  } else if(this.size === "medium") {
    sizeAdd += 8;
  } else if(this.size === "large") {
    sizeAdd += 10;
  } else if(this.size === "giant") {
    sizeAdd += 80;
  } else (this.size === "none"); {
    sizeAdd += 0;
  };
  
  if(this.toppingOneAdd === "pepperoni:checked") {
    toppingOneAdd += 3;
  } else if(this.size === "sausage") {
    toppingOneAdd += 3;
  } else if(this.size === "ham") {
    toppingOneAdd += 3;
  } else if(this.size === "bacon") {
    toppingOneAdd += 3;
  } else if(this.size === "onions") {
    toppingOneAdd += 2;
  } else if(this.size === "peppers") {
    toppingOneAdd += 2;
  } else if(this.size === "mushrooms") {
    toppingOneAdd += 2;
  } else if(this.size === "pineapple") {
    toppingOneAdd += 2;
  } else (this.size === "cheese"); {
    toppingOneAdd += 2;
  };

  priceTotal = sizeAdd;
  return priceTotal;
};


//UI Logic

$(document).ready(function() {
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
    $("#total-cost").hide();
    let size = $("select#size option:selected").val();
    let topping1 = $("select#first-topping option:selected").val();
    let topping2 = $("select#second-topping option:selected").val();
    let topping3 = $("select#third-topping option:selected").val();
    let pizza1 = new Pizza(size, topping1, topping2, topping3);
    console.log(pizza1);
    console.log(size);
    $("#pizza-price").html("$" + pizza1.cost())
    $("#total-cost").show();
  });
});