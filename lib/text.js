function Text(string, color) {

    this.string = string;

    this.color = color;

    this.setColor = function (userColor) {
        this.color = userColor;
    };

    this.render = function (inputString, inputColor) {

        let coloredTextCode = '<text text-anchor="middle" x="150" y="100" fill='+'"'+inputColor+'"'+'>'+inputString+'</text>';

    return coloredTextCode;
}

  }

  module.exports = Text;