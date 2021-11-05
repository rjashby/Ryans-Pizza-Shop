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
  
  if(this.topping1 === "pepperoni") {
    toppingOneAdd += 3;
  } else if(this.topping1 === "sausage") {
    toppingOneAdd += 3;
  } else if(this.topping1 === "ham") {
    toppingOneAdd += 3;
  } else if(this.topping1 === "bacon") {
    toppingOneAdd += 3;
  } else if(this.topping1 === "onions") {
    toppingOneAdd += 2;
  } else if(this.topping1 === "peppers") {
    toppingOneAdd += 2;
  } else if(this.topping1 === "mushrooms") {
    toppingOneAdd += 2;
  } else if(this.topping1 === "pineapple") {
    toppingOneAdd += 2;
  } else (this.topping1 === "cheese"); {
    toppingOneAdd += 0;
  };

  if(this.toppingTwoAdd === "pepperoni") {
    toppingTwoAdd += 3;
  } else if(this.topping2 === "sausage") {
    toppingTwoAdd += 3;
  } else if(this.topping2 === "ham") {
    toppingTwoAdd += 3;
  } else if(this.topping2 === "bacon") {
    toppingTwoAdd += 3;
  } else if(this.topping2 === "onions") {
    toppingTwoAdd += 2
  } else if(this.topping2 === "peppers") {
    toppingTwoAdd += 2;
  } else if(this.topping2 === "mushrooms") {
    toppingTwoAdd += 2;
  } else if(this.topping2 === "pineapple") {
    toppingTwoAdd += 2;
  } else (this.topping2 === "none"); {
    toppingTwoAdd += 0;
  };

  if(this.toppingThreeAdd === "pepperoni") {
    toppingThreeAdd += 3;
  } else if(this.topping3 === "sausage") {
    toppingThreeAdd += 3;
  } else if(this.topping3 === "ham") {
    toppingThreeAdd += 3;
  } else if(this.topping3 === "bacon") {
    toppingThreeAdd += 3;
  } else if(this.topping3 === "onions") {
    toppingThreeAdd += 2;
  } else if(this.topping3 === "peppers") {
    toppingThreeAdd += 2;
  } else if(this.topping3 === "mushrooms") {
    toppingThreeAdd += 2;
  } else if(this.topping3 === "pineapple") {
    toppingThreeAdd += 2;
  } else (this.topping3 === "none"); {
    toppingThreeAdd += 0;
  };

  priceTotal = sizeAdd + toppingOneAdd + toppingTwoAdd + toppingThreeAdd;
  return priceTotal;
};


$(document).ready(function() {
  $("form#make-pizza").submit(function(event) {
    event.preventDefault();
    let size = $("select#size option:selected").val();
    let topping1 = $("input:radio[name=radio1]:checked").val();
    let topping2 = $("input:radio[name=radio2]:checked").val();
    let topping3 = $("input:radio[name=radio3]:checked").val();
    let pizza1 = new Pizza(size, topping1, topping2, topping3);
    if (size === "none") {
      $("#total-cost").hide();
      alert("Please Choose Your Pizza Size")
    } else {
      $("#pizza-price").html("$" + pizza1.cost())
      $("#total-cost").show();
      window.scrollTo(0,document.body.scrollHeight);
    };
  });
});