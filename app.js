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

//Need a number incrementer function. Figure it out. This one doesnt work.
let incrementScore = (function (team, scoreToIncrease){
    function scoring(){
        team ++;
        scoreToIncrease.innerText = team;};
})();

const playerObj = {
    currentScore: 0,
    currentMatches: 0
};

//This is the MDN example of closure. It works. I need to translate it for use.
///////////////////////////////////////////////
var counter = (function() {
    var privateCounter = 0;
    function changeBy(val) {
      privateCounter += val;
    }
  
    return {
      increment: function() {
        changeBy(1);
      },
  
      decrement: function() {
        changeBy(-1);
      },
  
      value: function() {
        return privateCounter;
      }
    };
  })();
///////////////////////////////////////////////

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
//Create a counter to keep score
//Best of 5 wins!
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
                console.log("lose");
            } else {outcome = numGen(Messages.win.length, Messages.win);
                console.log("win")}
            break;
        case "paper":
            if(computer=="rock"){
                outcome = numGen(Messages.win.length, Messages.win);
                console.log("win")
            } else if (computer=="paper"){
                outcome = numGen(Messages.draw.length, Messages.draw);
                console.log("draw");
            } else {outcome = numGen(Messages.lose.length, Messages.lose);
                console.log("lose")}
            break;
        case "scissors":
            if(computer=="rock"){
                outcome = numGen(Messages.lose.length, Messages.lose);
                console.log("lose")
            } else if (computer=="paper"){
                outcome = numGen(Messages.win.length, Messages.win);
                console.log("win");
            } else {outcome = numGen(Messages.draw.length, Messages.draw);
            console.log("draw")}
            break;
    }
    statusUpdate(computer,outcome);
};