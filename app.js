let rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissors = document.getElementById("scissors");
    status = document.getElementById("status");

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
//TODO: Change console logs into status updates to display in DOM not
//just in terminal

function playRound(player, computer){
    switch (player){
        case "rock":
            if(computer=="rock"){
                console.log("draw")
            } else if (computer=="paper"){
                console.log("lose");
            } else {console.log("win")}
            break;
        case "paper":
            if(computer=="rock"){
                console.log("win")
            } else if (computer=="paper"){
                console.log("draw");
            } else {console.log("lose")}
            break;
        case "scissors":
            if(computer=="rock"){
                console.log("lose")
            } else if (computer=="paper"){
                console.log("win");
            } else {console.log("draw")}
            break;
    }
};