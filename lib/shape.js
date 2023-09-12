function Shape(type, color) {

    this.type = type;

    this.color = color;

    this.setColor = function (userColor) {
        this.color = userColor;
    };

    this.render = function (selectedType, selectedColor) {

        let coloredShapeCode = '';

        switch (selectedType) {
            case 'Triangle':
                coloredShapeCode = '<polygon points="150, 18 244, 182 56, 182" fill='+'"'+selectedColor+'"'+' />';
                break;
            case 'Circle':
                coloredShapeCode = '<circle cx="150" cy="100" r="100" fill='+'"'+selectedColor+'"'+' />';
                break;
            case 'Square':
                coloredShapeCode = '<rect x=50" y="0" width="200" height="200" fill='+'"'+selectedColor+'"'+' />';
                break;
            default:
                coloredShapeCode = '<rect x=50" y="0" width="200" height="200" fill='+'"'+selectedColor+'"'+' />';
    };

    return coloredShapeCode;
}
}

module.exports = Shape;