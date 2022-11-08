const managerPrompts = [
    {
        name: 'name',
        message: "What is the team manager's name?",
        type: 'input'
    },
    {
        name: 'id',
        message: "What is the team manager's ID?",
        type: 'input'
    },
    {
        name: 'email',
        message: "What is the team manager's email address?",
        type: 'input'
    },
    {
        name: 'office',
        message: "What is the team manager's office number?",
        type: 'input'
    }
];

const menuPrompts = {
        name: 'menuChoice',
        message: 'What would you like to do?',
        type: 'list',
        choices: [
            'Add an engineer',
            'Add an intern',
            'Finish and get my webpage'
        ],
        loop: true
    };

const engineerPrompts = [
    {
        name: 'name',
        message: "What is the engineer's name?",
        type: 'input'
    },
    {
        name: 'id',
        message: "What is the engineer's ID?",
        type: 'input'
    },
    {
        name: 'email',
        message: "What is the engineer's email address?",
        type: 'input'
    },
    {
        name: 'github',
        message: "What is the engineer's github username?",
        type: 'input'
    }
];

const internPrompts = [
    {
        name: 'name',
        message: "What is the intern's name?",
        type: 'input'
    },
    {
        name: 'id',
        message: "What is the intern's ID?",
        type: 'input'
    },
    {
        name: 'email',
        message: "What is the intern's email address?",
        type: 'input'
    },
    {
        name: 'school',
        message: "What is the name of the intern's school?",
        type: 'input'
    }
];

module.exports = { managerPrompts, menuPrompts, engineerPrompts, internPrompts }