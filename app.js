let rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissors = document.getElementById("scissors");
    result = document.getElementById("result");

let arr = ["rock", "paper", "scissors"];

let playerArr = [rock, paper, scissors];

function computerPlay(){
    let num = Math.floor(Math.random()*3);
    computerSelection = arr[num];
    console.log(computerSelection);
    return computerSelection;
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
//TODO: Fancy up the result messages and create a counter to keep score.
//Something like "Computer chose rock, you win!" or something...
//A random list of things would be better but not needed right now.
//Best of 5 wins!
//Also refactor the monster list of if/else statements somehow.

let statusUpdate = function(outcome){
    result.innerText = "Result: " + outcome;
};

function playRound(player, computer){
    let outcome = "";
    switch (player){
        case "rock":
            if(computer=="rock"){
                outcome = "draw";
                console.log("draw")
            } else if (computer=="paper"){
                outcome = "lose";
                console.log("lose");
            } else {outcome = "win";
                console.log("win")}
            break;
        case "paper":
            if(computer=="rock"){
                outcome = "win";
                console.log("win")
            } else if (computer=="paper"){
                outcome = "draw";
                console.log("draw");
            } else {outcome = "lose";
                console.log("lose")}
            break;
        case "scissors":
            if(computer=="rock"){
                outcome = "lose";
                console.log("lose")
            } else if (computer=="paper"){
                outcome = "win";
                console.log("win");
            } else {outcome = "draw";
            console.log("draw")}
            break;
    }
    statusUpdate(outcome);
};