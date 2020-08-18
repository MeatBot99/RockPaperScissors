let rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissors = document.getElementById("scissors");
    result = document.getElementById("result");
    report = document.getElementById("report");
    playerScore = document.getElementById("player-score");
    playerMatch = document.getElementById("player-matches")
    computerScore = document.getElementById("computer-score");
    computerMatch = document.getElementById("computer-matches");
    arr = ["rock", "paper", "scissors"];
    playerArr = [rock, paper, scissors];

const numGen = function(lengthOfArray, targetArray){
    let num = Math.floor(Math.random()*lengthOfArray);
    nameOfReturn = targetArray[num];
    return nameOfReturn;
};

//This is a working incrementing function with closure. thanks cat clicker//
let incrementScore = (function(){
    return function(){
        this.scorePointer.innerText= this.currentScore +1;
        this.currentScore++;
    }
})();

let User = function(currentScore, currentMatches, scorePointer, matchPointer){
    this.currentScore= currentScore;
    this.currentMatches= currentMatches;
    this.scorePointer= scorePointer;
    this.matchPointer= matchPointer;
    this.incrementScore= incrementScore;
};

let newPlayer= new User(0,0,playerScore, playerMatch);
let newComputer=  new User(0,0,computerScore, computerMatch);

function computerPlay(){
    numGen(arr.length, arr);
    console.log(nameOfReturn);
    return nameOfReturn;
};

function playerPlay(choice){
    let playerSelection = choice.id;
    console.log(playerSelection);
    return playerSelection;
};

for (let choice of playerArr){
choice.addEventListener('click', function(){
    playerChoice = playerPlay(choice);
    computerChoice = computerPlay();
    playRound(playerChoice, computerChoice);
});
};
//TODO: Fancy up the result messages 
//~~Create a counter to keep score~~>>>>>>>>>>>>Counter now works
//Best of 5 wins!
//use local storage to persist matches won and enable clearing the local storage for a "prestige" reset
//Also refactor the monster list of if/else statements somehow.
//Sound effects?
//Victory Defeat and Draw screens/animations

let statusUpdate = function(computer, outcome){
    result.innerText = "Result: Computer chose "+ computer + ". " + outcome;
};

function playRound(player, computer){
    let outcome = "";
    switch (player){
        case "rock":
            if(computer=="rock"){
                outcome = numGen(Messages.draw.length, Messages.draw);
                console.log("draw")
            } else if (computer=="paper"){
                outcome = numGen(Messages.lose.length, Messages.lose);
                newComputer.incrementScore();
                console.log("lose");
            } else {outcome = numGen(Messages.win.length, Messages.win);
                newPlayer.incrementScore();
                console.log("win")}
            break;
        case "paper":
            if(computer=="rock"){
                outcome = numGen(Messages.win.length, Messages.win);
                newPlayer.incrementScore();
                console.log("win")
            } else if (computer=="paper"){
                outcome = numGen(Messages.draw.length, Messages.draw);
                console.log("draw");
            } else {outcome = numGen(Messages.lose.length, Messages.lose);
                newComputer.incrementScore();
                console.log("lose")}
            break;
        case "scissors":
            if(computer=="rock"){
                outcome = numGen(Messages.lose.length, Messages.lose);
                newComputer.incrementScore();
                console.log("lose")
            } else if (computer=="paper"){
                outcome = numGen(Messages.win.length, Messages.win);
                newPlayer.incrementScore();
                console.log("win");
            } else {outcome = numGen(Messages.draw.length, Messages.draw);
            console.log("draw")}
            break;
    }
    statusUpdate(computer,outcome);
};