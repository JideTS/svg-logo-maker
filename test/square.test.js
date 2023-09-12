const Square = require("../lib/square");

describe('Square', () => {

    describe('difference', () => {
       
        it('should render a green square', () => {

            const shapeValue = new Square("Circle", "green");

            expect(shapeValue.render('Square', "green")).toEqual('<rect x=50" y="0" width="200" height="200" fill="green" />');

        });
    });
});