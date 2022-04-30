const fs = require("fs");

class Reader{

    static readJsonFile(filePath){
        const rawdata = fs.readFileSync(filePath);
        return JSON.parse(rawdata); 
    }

}
//const explorers = Reader.readJsonFile('explorers.json')
//console.log(explorers)
module.exports = Reader;