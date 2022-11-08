let inquirer = require('inquirer');
const { Employee, Intern, Manager, Engineer } = require('./lib');
const { managerPrompts, menuPrompts, engineerPrompts, internPrompts } = require('./src/prompts');
const { writeToFile, generatePage } = require('./src/utils')


async function app() {
    let employees = [];

    let managerData = await inquirer.prompt(managerPrompts);

    let {name, id, email, office} = managerData;
    const manager = new Manager(name, id, email, office);
    employees.push(manager);
    
    let cont = true;
    while (cont === true) {
        let answer = await inquirer.prompt(menuPrompts);

        if (answer.menuChoice === 'Finish and get my webpage') {
            generatePage(employees)
            console.log('Goodbye!')
            cont = false
        } else if (answer.menuChoice === 'Add an engineer') {
            let engineerData = await inquirer.prompt(engineerPrompts)

            let {name, id, email, github} = engineerData
            let engineer = new Engineer(name, id, email, github)
            employees.push(engineer)

            console.log('Employee Added!')
        } else {
            let internData = await inquirer.prompt(internPrompts)

            let {name, id, email, school} = internData
            let intern = new Intern(name, id, email, school)
            employees.push(intern)

            console.log('Employee Added!')
        }
    }
}

app();