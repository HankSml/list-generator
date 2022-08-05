let inquirer = require('inquirer');
const library = require('./lib');
const { managerPrompts } = require('./src');

async function getInputs() {
    let managerInfo = await inquirer.prompt(managerPrompts);
    let 
}
