let cardBase =
    `<div class="card">
        <div class="card-head">
            <h2></h2>
            <h3></h3>
        </div>
        <div class="card-body">
            <div>
                <p></p>
                <p></p>
                <p></p>
            </div>
        </div>
    </div>`;

let pageBase = 
`<!DOCTYPE html>
<html lang="en-us">
<head>
    <meta charset="UTF-8" />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./style.css"/>
    <title>My Team</title>
    <div class="header">
        <h1>My Team</h1>
    </div>
</head>
<body>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
    <script src="./assets/script.js"></script>
</body>
</html>`;

// function writeToFile(fileName, data) {
//     fs.writeFile(fileName, data, err => {
//         if (err) {
//             console.error(err);
//         }
//     })
// }

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
    cardBase,
    pageBase,
    managerPrompts
};
