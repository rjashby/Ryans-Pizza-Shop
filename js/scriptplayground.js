function Soda(soda) {
  this.soda = soda
}

Soda.prototype.cost = function () {
  let sodaCost = 0;
  if(this.soda === "coke") {
    sodaCost += 3;
  } else if(this.soda === "dietcoke") {
    sodaCost += 3;
  } else if(this.soda === "sprite") {
    sodaCost += 3;
  } else (this.soda === "mountaindew"); {
    sodaCost += 3;
  };
  return sodaCost;
};

let sodaOrder = new Soda()

let sodaSelect =$("input:checkbox[name=soda]:checked").val();

function Soda() {
  this.choice = []
}

Soda.prototype.cost = function () {
  let sodaCost = 0;
  if(this.choice === "coke") {
    Soda.choice.push("coke")
    sodaCost += 3;
  } else if(this.choice === "dietcoke") {
    Soda.choice.push("diet coke")
    sodaCost += 3;
  } else if(this.soda === "sprite") {
    Soda.choice.push("sprite")
    sodaCost += 3;
  } else (this.soda === "mountaindew"); {
    Soda.choice.push("mountain dew")
    sodaCost += 3;
  };
  return sodaCost;
};
