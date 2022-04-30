const ExplorerService = require('./../services/ExplorerService.js')
const FizzbuzzService = require('./../services/FizzbuzzService.js')
const Reader = require('./../utils/Reader.js')

class ExplorerController{

    static getExplorersByMission(mission){

        const path = 'explorers.json';
        const explorers = Reader.readJsonFile(path);
        return ExplorerService.filterByMission(explorers,mission)

    }
}

const explorers = ExplorerController.getExplorersByMission('node')
console.log(explorers)
module.exports = ExplorerController