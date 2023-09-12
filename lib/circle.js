const Shape = require('./shape');

function Circle(type, color) {
    Shape.call(this, type, color);
    this.type = "Circle";
  }

  module.exports = Circle;