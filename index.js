let inquirer = require('inquirer');
const { Employee, Intern, Manager, Engineer } = require('./lib');
const { pageBase, managerPrompts, cardBase } = require('./src');


async function getInputs() {
    let managerInfo = await inquirer.prompt(managerPrompts);
    
}
