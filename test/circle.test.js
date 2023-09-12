const Circle = require("../lib/circle");

describe('Circle', () => {

    describe('difference', () => {
       
        it('should render a blue circle', () => {

            const shapeValue = new Circle("Circle", "blue");

            expect(shapeValue.render('Circle', "blue")).toEqual('<circle cx="150" cy="100" r="100" fill="blue" />');

        });
    });
});