const ExplorerController = require("./controllers/ExplorerController.js");
const express = require("express");
const app = express();

app.use(express.json());
const port = 3001 ;

app.get("/",(request,response) => {
    response.json({message:"Fizzbuzz Api Welcome!"});
});

app.get("/v1/explorers/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorersInMission = ExplorerController.getExplorersByMission(mission);
    response.json(explorersInMission);
});

app.get("/v1/explorers/amount/:mission",(request,response)=>{
    const mission = request.params.mission;
    const ExplorersAmountInMission = ExplorerController.getExplorerAmountByMission(mission);
    response.json({mission:request.params, quantity:ExplorersAmountInMission});
});

app.get("/v1/explorers/usernames/:mission",(request,response)=>{
    const mission = request.params.mission;
    const explorers = ExplorerController.getExplorersUsernamesBy(mission);

    response.json({mission:mission,explorers:explorers});
});

app.get("/v1/fizzbuzz/:score",(request,response)=>{
    const score = request.params.score;
    const number = ExplorerController.Fizzbuzz(score);
    response.json({score:score, trick:number})
})
app.listen(port,()=>{
    console.log(`FizzBuzz API in localhost: ${port}`);
});