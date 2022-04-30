class ExplorerService{

    static filterByMission(explorers,mission){
        const explorerByMission = explorers.filter((explorer) => explorer.mission === mission);
        return explorerByMission;
    }

    static getAmounOfExplorersByMission(explorers,mission){
        const explorersInNode = explorers.filter((explorer) => explorer.mission === mission);
        return explorersInNode.length;
    }

    static getExplorersUsernamesByMission(explorers,mission){
        const explorersInNodeToGetUsernames = explorers.filter((explorer) => explorer.mission === mission);
        const usernamesInNode = explorersInNodeToGetUsernames.map((explorer) => explorer.githubUsername);
        return usernamesInNode;
    }

}
//const explorers = [{mission:"node"}]
//console.log(ExplorerService.getAmounOfExplorersByMission(explorers,"node"))
module.exports=ExplorerService;