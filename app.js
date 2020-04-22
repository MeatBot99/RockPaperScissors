let rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissors = document.getElementById("scissors");

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
    playerPlay(choice);
    computerPlay();
});
};

/*function playRound(playerSelection, computerSelection){
    console.log("you chose rock")
};*/