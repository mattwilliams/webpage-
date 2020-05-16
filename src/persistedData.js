const fs = require('fs')

console.log(process.cwd())
console.log("current working directory: ")



module.exports.writeHistory = function writeHistory (selectionString) {
    console.log("writing history ... ")
    console.log(selectionString)
    if (!selectionString) {
        return
    }
    fs.writeFile('history.txt', selectionString + "\n", {flag: 'a+'}, (err) => {
        if (err) {
            throw err;
        }
        console.log("File is updated.");
    });
}