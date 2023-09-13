
// Include and set up packages needed for this application
const logo = require('./lib/generateLogo');
const inquirer = require('inquirer');
const MaxLengthInputPrompt = require('inquirer-maxlength-input-prompt');
inquirer.registerPrompt('max-length-input', MaxLengthInputPrompt);
const fs = require('fs');

// Create an array of questions for user input via Inquirer

inquirer
    .prompt([

        // Specify the max length of the user response to the first prompt with the help of this topic https://github.com/jwarby/inquirer-maxlength-input-prompt

        {
            type: 'max-length-input',
            name: 'inputText',
            message: 'What text should be displayed on the logo?',
            maxLength: "3"
        },

        {
            type: 'input',
            name: 'textColor',
            message: 'What should be the color of the text displayed on the logo?',
        },

        {
            type: 'list',
            message: 'What should be the main shape of the logo?',
            name: 'type',
            choices: ['Triangle', 'Circle', 'Square'],
        },

        {
            type: 'input',
            name: 'shapeColor',
            message: 'What should be the color of the shape of the logo?',
        },

    ])
    .then((data) => {

        // Use data entered by user to create a new logo object

        let logoValue = new logo;

        // Use new logo object method to generate logo code from data entered by user

        let logoCode = logoValue.generateLogoCode(data);

        // Create function to write SVG file

        fs.writeFile("logo.svg", logoCode, (err) =>
            err ? console.log(err) : console.log('Generated logo.svg')
        );
    });


