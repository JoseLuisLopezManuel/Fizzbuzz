const ExplorerController = require('./controllers/ExplorerController.js');
const express = require('express');
const app = express();

app.use(express.json());
const port = 3000 ;

app.get('/',(request,response) => {
    response.json({message:"Fizzbuzz Api Welcome!"});
})

app.get('/v1/explorers/:mission',(request,responde)=>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission)
    responde.json(explorersInMission)
})

app.listen(port,()=>{
    console.log(`FizzBuzz API in localhost: ${port}`);
})