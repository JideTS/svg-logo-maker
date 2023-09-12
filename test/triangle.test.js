const Triangle = require("../lib/triangle");

describe('Triangle', () => {

    describe('difference', () => {
       
        it('should render a yellow triangle', () => {

            const shapeValue = new Triangle("Triangle", "yellow");

            expect(shapeValue.render("Triangle", "yellow")).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="yellow" />');

        });
    });
});