class FizzbuzzService{

    static applyValidationInExplorer(explorer){

        if(explorer.score%3 == 0){
            explorer.trick = "FIZZ";
            const explorersInNodeAndFizzTrick = explorersInNode.map((explorer) => assignFizzTrick(explorer));
            return explorersInNodeAndFizzTrick;
        }if(explorer.score%5 == 0){
            explorer.trick = "BUZZ";
            const explorersInNodeAndBuzzTrick = explorersInNode.map((explorer) => assignBuzzTrick(explorer));
            return explorersInNodeAndBuzzTrick;
        }if(explorer.score%5 == 0 && explorer.score%3 == 0){
            explorer.trick = "FIZZBUZZ";
            const explorersInNodeAndFizzBuzzTrick = explorersInNode.map((explorer) => assignFizzBuzzTrick(explorer));
            return explorersInNodeAndFizzBuzzTrick;
        }else{
            explorer.trick = explorer.score;
            return explorer;
        }
    }
}

module.exports=FizzbuzzService;