const ExplorerController = require('./../../lib/controllers/ExplorerController.js')

describe('Test ExplorerController',()=>{
    test('Requerimiento 1: Filtrar la lista de explorer mission node',()=>{
        const explorer1 = ExplorerController.getExplorersByMission('node')
        expect(explorer1).toMatchObject([
            {
              name: 'Woopa1',
              githubUsername: 'ajolonauta1',     
              score: 1,
              mission: 'node',
              stacks: [ 'javascript', 'reasonML', 'elm' ]
            },
            {
              name: 'Woopa2',
              githubUsername: 'ajolonauta2',     
              score: 2,
              mission: 'node',
              stacks: [ 'javascript', 'groovy', 'elm' ]
            },
            {
              name: 'Woopa3',
              githubUsername: 'ajolonauta3',     
              score: 3,
              mission: 'node',
              stacks: [ 'elixir', 'groovy', 'reasonML' ]
            },
            {
              name: 'Woopa4',
              githubUsername: 'ajolonauta4',     
              mission: 'node',
              score: 4,
              stacks: [ 'javascript' ]
            },
            {
              name: 'Woopa5',
              githubUsername: 'ajolonauta5',     
              score: 5,
              mission: 'node',
              stacks: [ 'javascript', 'elixir', 'elm' ]
            },
            {
              name: 'Woopa11',
              githubUsername: 'ajolonauta11',    
              score: 11,
              mission: 'node',
              stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
            },
            {
              name: 'Woopa12',
              githubUsername: 'ajolonauta12',    
              score: 12,
              mission: 'node',
              stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
            },
            {
              name: 'Woopa13',
              githubUsername: 'ajolonauta13',    
              score: 13,
              mission: 'node',
              stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
            },
            {
              name: 'Woopa14',
              githubUsername: 'ajolonauta14',    
              score: 14,
              mission: 'node',
              stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
            },
            {
              name: 'Woopa15',
              githubUsername: 'ajolonauta15',    
              score: 15,
              mission: 'node',
              stacks: [ 'javascript', 'elixir', 'groovy', 'reasonML', 'elm' ]
            }
          ])
    })

    test('Requerimiento 2: Nombres de los explorers en mission',()=>{
        const explorer1 = ExplorerController.getExplorersUsernamesBy('node')
        expect(explorer1).toMatchObject(    [
            'ajolonauta1',
            'ajolonauta2',
            'ajolonauta3',
            'ajolonauta4',
            'ajolonauta5',
            'ajolonauta11',
            'ajolonauta12',
            'ajolonauta13',
            'ajolonauta14',
            'ajolonauta15'
          ])
    })
})