const computerPlay = function(){
    let randomNum = (Math.random()).toFixed(3);
    let result = '';

    if (randomNum >= 0 && randomNum <= .333)    result = 'ROCK';
    if (randomNum >= .334 && randomNum <= .666) result = 'PAPPER';
    if (randomNum >= .667 && randomNum <= 1)    result = 'SCISSORS';
    return result;
};
//computerPlay();


const playRound = function(playerSelection, computerSelection){
    let winner ='';
    console.log(`Computer selection is: ${computerSelection} Player selection is: ${playerSelection}`);
    if(playerSelection == 'SCISSORS' && computerSelection == 'PAPPER' || 
        playerSelection == 'PAPPER' && computerSelection == 'ROCK' ||
        playerSelection == 'PAPPER' && computerSelection == 'ROCK') return 'Human wins;'

/*     if(playerSelection == 'SCISSORS' && computerSelection == 'PAPPER') return 'Human wins';
    if(playerSelection == 'PAPPER' && computerSelection == 'ROCK') return 'human wins';
    if(playerSelection == 'ROCK' && computerSelection == 'SCISSORS') return 'human wins'; */
    return 'computer wins';
};

const playerSelection = 'rock'.toUpperCase();
const computerSelection = computerPlay();
playRound(playerSelection, computerSelection);