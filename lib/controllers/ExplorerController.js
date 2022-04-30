const ExplorerService = require('./../services/ExplorerService.js')
const FizzbuzzService = require('./../services/FizzbuzzService.js')
const Reader = require('./../utils/Reader.js')

class ExplorerController{

    static getExplorersByMission(mission){

        const path = 'explorers.json';
        const explorers = Reader.readJsonFile(path);
        return ExplorerService.filterByMission(explorers,mission);

    }

    static getExplorersUsernamesBy(mission){

        const path = 'explorers.json';
        const explorers = Reader.readJsonFile(path);
        return ExplorerService.getExplorersUsernamesByMission(explorers,mission);

    }
}

const explorers = ExplorerController.getExplorersByMission('node')
console.log(explorers)

const explorers1 = ExplorerController.getExplorersUsernamesBy('node')
console.log(explorers1)

module.exports = ExplorerController