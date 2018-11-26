var fs = require('fs');  //node file usage

console.log("Going to get a file");
fs.readFile('readFileSync.js'), function(err, file){
    console.log("Got the file");
}
console.log("app continues...");