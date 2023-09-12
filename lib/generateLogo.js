// TODO: Include packages needed for this feature

const circle = require('./circle');
const triangle = require('./triangle');
const square = require('./square');
const text = require('./text');

function Logo() {

    this.generateLogoCode = function (data) {

    let generatedLogoCode = '';
    const textValue = new text(data.inputText, data.textColor);

    switch (data.type) {
        case 'Triangle':
            const triangleValue = new triangle(data.type, data.shapeColor);
            generatedLogoCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + triangleValue.render(data.type, data.shapeColor) + textValue.render(data.inputText, data.textColor) + '</svg>';
            break;
        case 'Circle':
            const circleValue = new circle(data.type, data.shapeColor);
            generatedLogoCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + circleValue.render(data.type, data.shapeColor) + textValue.render(data.inputText, data.textColor) + '</svg>';
            break;
        case 'Square':
            const squareValue = new square(data.type, data.shapeColor);
            generatedLogoCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + squareValue.render(data.type, data.shapeColor) + textValue.render(data.inputText, data.textColor) + '</svg>';
            break;
        default:
            const defaultValue = new triangle(data.type, data.shapeColor);
            generatedLogoCode = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">' + defaultValue.render(data.type, data.shapeColor) + textValue.render(data.inputText, data.textColor) + '</svg>';
    };

    return generatedLogoCode;

};
}

module.exports = Logo;