const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Include packages needed for this application

// TODO: Create a function to write README file
function writeToFile(userInput) {
  return `${userInput.title}:
  ## Description
  ${userInput.description}
  ## Installation Instuctions
  ${userInput.installationInstructions}
  ## Usage Information
  ${userInput.usageInformation}
  ## Contribution Guidelines
  ${userInput.contributionGuidlines}
  ## Test Instructions
  ${userInput.testInstructions}`;
}

let mit = {
  license = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
  badge
};

const WTFPL = {
  license = "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)"
}

const monz = {
  license = "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
}

const pubDom = {
  license = "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]"
}

var IBM = {
  license = "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]"
}

// TODO: Create an array of questions for user input
const questions = [
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is your README title?",
      },
      {
        type: "input",
        name: "description",
        message: "Write a description:",
      },
      {
        type: "input",
        name: "installationInstructions",
        message: "Write your installation instructions: ",
      },
      {
        type: "input",
        name: "usageInformation",
        message: "Write your usage information: ",
      },
      {
        type: "input",
        name: "contributionGuidelines",
        message: "Write your contribution guidelines: ",
      },
      {
        type: "input",
        name: "testInstructions",
        message: "Write your test instructions: ",
      },
      {
        type: "list",
        message: "What is your preferred license?",
        name: "license",
        choices: ["MIT", "Monzilla public license", "Do what the fuck you want public license", "Public domain", "IBM"],
      },
      {
        type: "input",
        name: "githubUsername",
        message: "What's your Github username?",
      },
      {
        type: "input",
        name: "email",
        message: "What's your email?",
      },
    ])
    .then((data) => {
      const filename = `README.md`;
      const readmeText = writeToFile(data);
      console.log(readmeText);
      if (userInput.license === "MIT"){
        userInput.license = mit
      }
      if (userInput.license === "Monzilla public license") {
        userInput.license = monz
      }
      if(userInput.license === "Do what the fuck you want public license"){
        userInput.license = WTFPL
      }
      if(userInput.license === "Public Domain"){
        userInput.license = pubDom
      }
      if(userInput.license === "IBM"){
        userInput.license = IBM
      }
      fs.writeFile(filename, readmeText, (err) =>
        err ? console.log(err) : console.log("Success!")
      );
    }),
];

// TODO: Create a function to write README file
function writeToFile(userInput) {
  return `# ${userInput.title}:
  ## Description
  ${userInput.description}
  ## Installation Instuctions
  ${userInput.installationInstructions}
  ## Usage Information
  ${userInput.usageInformation}
  ## Contribution Guidelines
  ${userInput.contributionGuidlines}
  ## Test Instructions
  ${userInput.testInstructions}
  ## Questions
  Have any other questions? Contact me! 
  Email: ${userInput.email}
  To check out this projet and others check out my Github
  Github: [${userInput.githubUsername}](https://www.github.com/${userInput.githubUsername});`
}

// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
