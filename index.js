const Reader = require("./lib/utils/Reader.js");
const explorers = Reader.readJsonFile("explorers.json");
//console.log(explorers)

const ExplorerService = require("./lib/services/ExplorerService.js");
// Aplicación del ExplorerService sobre la lista de explorers
console.log(ExplorerService.filterByMission(explorers, "node"));

const explorers1 = [{mission:"node"}];
console.log(ExplorerService.getAmounOfExplorersByMission(explorers1,"node"));

const explorers2 = [{githubUsername: "Jose",mission:"node"},{githubUsername: "Luis",mission:"node"}];
console.log(ExplorerService.getExplorersUsernamesByMission(explorers2, "node"));

const FizzbuzzService = require("./lib/services/FizzbuzzService.js");

const explorer1 = {name: "Explorer1", score: 1, mission:"node"};
console.log(FizzbuzzService.applyValidationInExplorer(explorer1));// {name: "Explorer1", score: 1, trick: 1} 

const explorer3 = {name: "Explorer3", score: 3};
console.log(FizzbuzzService.applyValidationInExplorer(explorer3)); // {name: "Explorer3", score: 3, trick: "FIZZ"}

const explorer5 = {name: "Explorer5", score: 5};
console.log(FizzbuzzService.applyValidationInExplorer(explorer5)); // {name: "Explorer5", score: 5, trick: "BUZZ"}

const explorer15 = {name: "Explorer15", score: 15};
console.log(FizzbuzzService.applyValidationInExplorer(explorer15));// {name: "Explorer15", score: 15, trick: "FIZZBUZZ"}