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

module.exports = {
    managerPrompts: managerPrompts
}