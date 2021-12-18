const inquirer = require("inquirer");
const fs = require("fs");
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = () => {
  return inquirer.prompt([
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
      choices: [
        "MIT",
        "Monzilla public license",
        "Do what the fuck you want public license",
        "Public domain",
        "IBM",
      ],
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
  ]);
};

// TODO: Create a function to write README file
function writeToFile(answers) {
  return `# ${answers.title}:
## Description
${answers.description}
## Installation Instructions
${answers.installationInstructions}
## Usage Information
${answers.usageInformation}
## Contribution Guidelines
${answers.contributionGuidlines}
## Test Instructions
${answers.testInstructions}
## Questions
Have any other questions? Contact me!  
Email: ${answers.email}  
To check out this projet and others check out my Github
Github: [${answers.githubUsername}](https://www.github.com/${
    answers.githubUsername
  });
${renderLicenseSection(answers.license, answers.githubUsername)}
${renderLicenseLink(answers.license)}
${renderLicenseBadge(answers.license)}`;
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  }
  if (license === "Monzilla public license") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]`;
  }
  if (license === "Do what the fuck you want public license") {
    return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
  if (license === "Public Domain") {
    return `[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)]`;
  }
  if (license === "IBM") {
    return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)]`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
    return `(https://opensource.org/licenses/MIT)`;
  }
  if (license === "Monzilla public license") {
    return `(https://opensource.org/licenses/MPL-2.0)`;
  }
  if (license === "Do what the fuck you want public license") {
    return `(http://www.wtfpl.net/about/)`;
  }
  if (license === "Public Domain") {
    return `(https://opendatacommons.org/licenses/pddl/)`;
  }
  if (license === "IBM") {
    return `(https://opensource.org/licenses/IPL-1.0)`;
  } else {
    return " ";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license, username) {
  if (license === "MIT") {
    return `Copyright 2021 ${username}

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  }
  if (license === "Monzilla public license") {
    return `This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.`;
  }
  if (license === "Do what the fuck you want public license") {
    return `Copyright (C) 2021 ${username}

Everyone is permitted to copy and distribute verbatim or modified 
copies of this license document, and changing it is allowed as long 
as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
  TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.`;
  }
  if (license === "Public Domain") {
    return `Refer to link.`;
  }
  if (license === "IBM") {
    return `Copyright (C) 2021 International Business Machines Corporation and others. All Rights Reserved.`;
  } else {
    return " ";
  }
}

// TODO: Create a function to initialize app
function init() {
  questions()
    .then((answers) => fs.writeFileSync("README.md", writeToFile(answers)))
    .then(() => console.log("Successfully written README file"))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
