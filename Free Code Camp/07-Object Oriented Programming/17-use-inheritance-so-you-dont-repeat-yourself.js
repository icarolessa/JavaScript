function Cat(name) {
  this.name = name;
}

Cat.prototype = {
  constructor: Animal
};

function Bear(name) {
  this.name = name;
}

Bear.prototype = {
  constructor: Animal
};

function Animal() { }

Animal.prototype = {
  constructor: Animal,
  eat: function() {
    console.log("nom nom nom");
  }

};