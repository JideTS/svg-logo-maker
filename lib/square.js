const Shape = require('./shape');

function Square(type, color) {
    Shape.call(this, type, color);
    this.type = "Square";
  }

  module.exports = Square;