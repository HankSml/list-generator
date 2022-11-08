const fs = require('fs');
const {base, managerCard, engineerCard, internCard} = require('./components')
const { Employee, Intern, Manager, Engineer } = require('../lib');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
    })
}

function generatePage(employees) {
    let cardList = [];
    employees.forEach(employee => {
        switch(employee.getRole()) {
            case 'Manager':
                cardList.push(managerCard(employee))
                break;
            case 'Engineer':
                cardList.push(engineerCard(employee))
                break;
            case 'Intern':
                cardList.push(internCard(employee))
            default:
                console.log(employee)
                console.log('Error assigning card type')
                break;
        }
        const pageData = base(cardList);
        writeToFile('../dist/index.html', pageData)
    });
}

module.exports = { writeToFile, generatePage };