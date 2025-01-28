// Define the Car constructor
function Car(make, model) {
  this.make = make;
  this.model = model;
}

// Add the getMakeModel method to the Car prototype
Car.prototype.getMakeModel = function () {
  return `${this.make} ${this.model}`;
};

// Define the SportsCar constructor
function SportsCar(make, model, topSpeed) {
  // Call the Car constructor to inherit make and model
  Car.call(this, make, model);
  this.topSpeed = topSpeed;
}

// Inherit the Car prototype
SportsCar.prototype = Object.create(Car.prototype);

// Correct the constructor reference for SportsCar
SportsCar.prototype.constructor = SportsCar;

// Add the getTopSpeed method to the SportsCar prototype
SportsCar.prototype.getTopSpeed = function () {
  return this.topSpeed;
};

// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;

