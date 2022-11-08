const { pageBase, cardBase } = require('./pages');

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
    })
}

module.exports = { writeToFile };