const computerPlay = function(){
    let randomNum = (Math.random()).toFixed(3);
    let result = '';

    if (randomNum >= 0 && randomNum <= .333)    result = 'ROCK';
    if (randomNum >= .334 && randomNum <= .666) result = 'PAPPER';
    if (randomNum >= .667 && randomNum <= 1)    result = 'SCISSORS';
    return result;
};
    let hCount = 0;
    let cCount = 0;
const playRound = function(playerSelection, computerSelection){
    console.log(`Computer selection is: ${computerSelection} Player selection is: ${playerSelection}`);
    if( playerSelection == computerSelection) return console.log('Draw');

    if( playerSelection == 'SCISSORS'   && computerSelection == 'PAPPER'  || 
        playerSelection == 'PAPPER'     && computerSelection == 'ROCK'    ||
        playerSelection == 'ROCK'       && computerSelection == 'SCISSORS'){
            hCount++;
            return console.log('Player wins');
        } 
    cCount++;    
    return console.log('Computer wins');
};

let game = function(){
    for(i=0; i <5; i++){
        const playerSelection = prompt('Select rock, papper or scissors').toUpperCase();
        const computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    }
    if (hCount == cCount) return `Draw, computer: ${cCount}, player: ${hCount}`;
    if (hCount < cCount) return `Computer wins: ${cCount} to ${hCount}`; 
    return `Player wins: ${hCount} to ${cCount}`;
};

game();

