const inquirer = require('inquirer');
const fs = require('fs');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));


const readmeGenerator = ({title, description, installation, usage, license, contributor, contri2, questions, tests, github, email, phone_number}) =>
`
###<h1 align="center">${title} </h1>

## Table Of Contents

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributor)
- [Tests](#tests)
- [Questions](#questions)

## Description 
${description}

## Installation
> ${installation}

## Usage
> ${usage}

## License
![badge](https://img.shields.io/badge/license-${license}-brightgreen)
<br />
This application is covered by the ${license} license. 

> ## Contibutors
> * ${contributor.map(item => item.contri2).join(", ")}

## Test
${tests}

## Questions
${questions}


*Find me on [GitHub Link](https://github.com/${github})
* Email me at ${email}
* or Contact me ${phone_number}

This README was generated with ❤️ by [README-generator](https://github.com/raphson1/README_generator)


`
inquirer.prompt([
    {
        type:"input",
        name:"title",
        message:"What is your readme Title?"
    }, 
    
    {
        type: "input",
        name: "description",
        message: "write your app description here in few lines."
    },
    {
        type: "input",
        name: "installation",
        message: "Describe your Installation process."
    },
    {
        type: "list",
        name: "license",
        message: "Chose the appropriate license for this project: ",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open"
        ]
    },
    {
        type: "input",
        name: "usage",
        message: "tell us how to use your application"
    },
    {
        type: "input",
        name: "email",
        message: "What is your Email address?",
    },
    {
        type:"number",
        name: "phone_number",
        message: "what is your Phone number?"
    },
    {
        type: "input",
        name: "github",
        message: "What is your GitHub user name?"
    },
    {
        type: "input",
        name: "questions",
        message: "What can i do if there is an issue?"
    },
    {
        type: "loop",
        name: "contributor",
        message: "Add another Contributor?",
        questions: [
            {
                type: "input",
                name: "contri2",
                message: "Enter Github user name of contributor",
            },
            
        ],
        },

])
.then((data) => {
    const pageContent = readmeGenerator(data);
    console.log(data.contributor)
    fs.writeFile('README.md', pageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README.md  created')
    );
    
});