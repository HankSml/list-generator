let inquirer = require('inquirer');
const { Employee, Intern, Manager, Engineer } = require('./lib');
const { pageBase, cardBase } = require('./src/pages');
const { managerPrompts } = require('./src/prompts')


async function getInputs() {
    let managerInfo = await inquirer.prompt(managerPrompts);
    
}
