const base = (cards) => {
    return (
        `<!DOCTYPE html>
        <html lang="en-us">
        <head>
            <meta charset="UTF-8" name="viewport" content="width=device-width, initial-scale=1" />
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
            <link rel="stylesheet" type="text/css" href="./style.css"/>
            <title>My Team</title>
            <div class="header">
                <h1>My Team</h1>
            </div>
        </head>
        <body>
            <div id="card-box">
                ${cards.join('')}
                <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
                <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.min.js"></script>
                <script src="./assets/script.js"></script>
            <div/>
        </body>
        </html>`
    )
}


module.exports = base;
