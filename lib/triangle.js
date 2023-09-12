const Shape = require('./shape');

function Triangle(type, color) {
    Shape.call(this, type, color);
    this.type = "Triangle";
  }

  module.exports = Triangle;