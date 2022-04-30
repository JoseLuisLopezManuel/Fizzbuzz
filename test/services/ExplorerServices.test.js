const Reader = require("./../../lib/utils/Reader.js");
const ExplorerService = require("./../../lib/services/ExplorerService.js");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService.js");

describe("Tests para ExplorerService",() =>{

    test("Requerimiento 1: Leer el path",()=>{
        const explorers = Reader.readJsonFile("explorers.json");
        expect(explorers).toMatchObject(  [ 
            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa2",
                "githubUsername": "ajolonauta2",
                "score": 2,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "groovy",
                    "elm"
                ]
            },
            {
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                    "elixir",
                    "groovy",
                    "reasonML"
                ]
            },
            {
                "name": "Woopa4",
                "githubUsername": "ajolonauta4",
                "mission": "node",
                "score": 4,
                "stacks": [
                    "javascript"
                ]
            },
            {
                "name": "Woopa5",
                "githubUsername": "ajolonauta5",
                "score": 5,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "elm"
                ]
            },
            {
                "name": "Woopa6",
                "githubUsername": "ajolonauta6",
                "score": 6,
                "mission": "java",
                "stacks": [
                    "elm"
                ]
            },
            {
                "name": "Woopa7",
                "githubUsername": "ajolonauta7",
                "mission": "java",
                "score": 7,
                "stacks": [
                ]
            },
            {
                "name": "Woopa8",
                "githubUsername": "ajolonauta8",
                "score": 8,
                "mission": "java",
                "stacks": [
                    "elm"
                ]
            },
            {
                "name": "Woopa9",
                "githubUsername": "ajolonauta9",
                "score": 9,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa10",
                "githubUsername": "ajolonauta10",
                "score": 10,
                "mission": "java",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa11",
                "githubUsername": "ajolonauta11",
                "score": 11,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ] );
    });

    test("Requerimiento 2: Calcular todos los explorers en una misión",()=>{
        const explorers = [{mission:"node"}];
        const explorersInNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersInNode.length).toBe(1);
    });

    test("Requerimiento 3: Calcular cantidad de explorers en una misión",()=>{
        const explorers = [{mission:"node"},{mission:"node"}];
        const explorersInNode = ExplorerService.getAmounOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(2);
    });

    test("Requerimiento 4: Mostrar nombre de los explorers en una misión",()=>{
        const explorers = [{githubUsername:"Jose",mission:"node"},{githubUsername:"Lopez",mission:"node"}];
        const explorersInNode = ExplorerService.getAmounOfExplorersByMission(explorers, "node");
        expect(explorersInNode).toBe(2);
    });
    test("Requerimiento 5: Refactorizando Fizzbuzz",()=>{
        const explorers = {name:"Jose",score: 1};
        const explorersInNode = FizzbuzzService.applyValidationInExplorer(explorers);
        expect(explorersInNode).toMatchObject({"name": "Jose", "score": 1, "trick": 1});
    });
});