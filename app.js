let rock = document.getElementById("rock");
    paper = document.getElementById("paper");
    scissors = document.getElementById("scissors");
    result = document.getElementById("result");
    report = document.getElementById("report");
    playerScore = document.getElementById("player-score");
    playerMatch = document.getElementById("player-matches")
    computerScore = document.getElementById("computer-score");
    computerMatch = document.getElementById("computer-matches");
    sidebarLeft = document.getElementById("sidebar-left");
    sidebarRight = document.getElementById("sidebar-right");
    arr = ["rock", "paper", "scissors"];
    playerArr = [rock, paper, scissors];
    incrementScore = (function(){
    return function(){
        this.scorePointer.innerText= this.currentScore +1;
        this.currentScore++;
    }
})();
    incrementMatch = (function(){
    return function(){
        this.matchPointer.innerText= this.currentMatches +1;
        this.currentMatches++;
    }
    
})();
    updateMatch = function(){
        if(this.currentScore%5==0 && this.currentScore>0){
            this.incrementMatch();
        }
};
    animateScore = function(){this.scorePointer.classList.toggle("animate__bounceInDown");
    this.scorePointer.addEventListener('animationend',()=>{
        this.scorePointer.classList.remove("animate__bounceInDown");
    });
};
    animateDraw = function(){sidebarLeft.classList.toggle("animate__headShake");
    sidebarRight.classList.toggle("animate__headShake");
    sidebarLeft.addEventListener('animationend', ()=>{
        sidebarLeft.classList.remove("animate__headShake");
        sidebarRight.classList.remove("animate__headShake");
    })

};
    User = function(currentScore, currentMatches, scorePointer, matchPointer){
    this.currentScore = currentScore;
    this.currentMatches = currentMatches;
    this.scorePointer = scorePointer;
    this.matchPointer = matchPointer;
    this.incrementScore = incrementScore;
    this.incrementMatch = incrementMatch;
    this.updateMatch = updateMatch;
    this.animateScore = animateScore;
};
    newPlayer= new User(0,0,playerScore, playerMatch);
    newComputer=  new User(0,0,computerScore, computerMatch);

//Adds animation class to the scores//
    classData = [playerScore, playerMatch, computerScore, computerMatch,sidebarLeft,sidebarRight];
    for(let _data of classData){
        _data.classList.add("animate__animated");
    };

const numGen = function(lengthOfArray, targetArray){
    let num = Math.floor(Math.random()*lengthOfArray);
    nameOfReturn = targetArray[num];
    return nameOfReturn;
};

function computerPlay(){
    numGen(arr.length, arr);
    return nameOfReturn;
};

function playerPlay(choice){
    let playerSelection = choice.id;
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
//~~Best of 5 wins!~~>>>>>>>>>>>>>>>>>>Match incrementer works
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
                animateDraw();
            } else if (computer=="paper"){
                outcome = numGen(Messages.lose.length, Messages.lose);
                newComputer.incrementScore();
                newComputer.updateMatch();
                newComputer.animateScore();
            } else {outcome = numGen(Messages.win.length, Messages.win);
                newPlayer.incrementScore();
                newPlayer.updateMatch();
                newPlayer.animateScore();
            }
            break;
        case "paper":
            if(computer=="rock"){
                outcome = numGen(Messages.win.length, Messages.win);
                newPlayer.incrementScore();
                newPlayer.updateMatch(); 
                newPlayer.animateScore();
            } else if (computer=="paper"){
                outcome = numGen(Messages.draw.length, Messages.draw);
                animateDraw();
            } else {outcome = numGen(Messages.lose.length, Messages.lose);
                newComputer.incrementScore();
                newComputer.updateMatch();
                newComputer.animateScore();
                }
            break;
        case "scissors":
            if(computer=="rock"){
                outcome = numGen(Messages.lose.length, Messages.lose);
                newComputer.incrementScore();
                newComputer.updateMatch();
                newComputer.animateScore();
            } else if (computer=="paper"){
                outcome = numGen(Messages.win.length, Messages.win);
                newPlayer.incrementScore();
                newPlayer.updateMatch();
                newPlayer.animateScore();
            } else {outcome = numGen(Messages.draw.length, Messages.draw);
                animateDraw();
                }
            break;
    };
    statusUpdate(computer,outcome);

};