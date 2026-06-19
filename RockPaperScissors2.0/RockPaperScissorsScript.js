let setupMenu =  document.getElementById('setupMenu');
let playingMenu =  document.getElementById('gameMenu');
let playerImage =  document.getElementById('playerImage');
let gameStartButton = document.getElementById('startButton');
let roundInput = document.getElementById('rounds');
let roundDisplay = document.getElementById('roundDisplay');
let playerAttackButton = document.getElementById('doAction');
let playerAttackInput = document.getElementById('playerChoice');
let scoreDisplayPlayer = document.getElementById('scoreCountPlayer');
let scoreDisplayTies = document.getElementById('scoreCountTies');
let scoreDisplayComputer = document.getElementById('scoreCountComputer');
let endMessageDisplay = document.getElementById('endMessage');
let playerMoveDisplay = document.getElementById('playerImage');
let computerMoveDisplay = document.getElementById('computerImage');
let playerChoiceLabel = document.getElementById('playerChoiceLabel');
let replayButton = document.getElementById('replayButton');

//initializes values
let wins = 0;
let losses = 0;
let ties = 0;
let result = "";
let randomNumber = 0;
let computerChoice = "";
let playerChoice = "";
let numberOfRounds = 0;
let currentRound = 1;

//welcome message
setupGame();

function setupGame()
{
    replayButton.style.display = "none";
    setupMenu.style.display = "block";
    playingMenu.style.display = "none";
    playerAttackInput.style.display = "inline";
    playerAttackButton.style.display = "inline";
    playerChoiceLabel.style.display = "inline";
    wins = 0;
    losses = 0;
    ties = 0;
    result = "";
    randomNumber = 0;
    computerChoice = "";
    playerChoice = "";
    numberOfRounds = 0;
    currentRound = 1;

    roundDisplay.innerHTML = "Round " + currentRound;

    endMessageDisplay.innerHTML = "";

    scoreDisplayPlayer.innerHTML = "Player Wins: " + wins;
    scoreDisplayComputer.innerHTML = "Computer Wins: " + losses;
    scoreDisplayTies.innerHTML = "Ties: " + ties;
}

function setRounds()
{
    if(parseInt(roundInput.value) > 0 && roundInput.value.length > 0)
    {
        numberOfRounds = parseInt(roundInput.value);
        playGame();
    }
    else
    {
        alert("Error. Please input the number of rounds you would like to play.");
    }
}

function playGame()
{
    setupMenu.style.display = "none";
    playingMenu.style.display = "block";
}

function endGame()
{
    //ends game
    alert(numberOfRounds + " rounds complete! The game is over!");

    //gives the final winner
    if(wins > losses)
    {
        endMessageDisplay.innerHTML = "You beat the computer this game! Good job!";
    }
    else if(losses > wins)
    {
        endMessageDisplay.innerHTML = "The computer beat you this game! You suck!";
    }
    else
    {
        endMessageDisplay.innerHTML = "You tied against the computer this game! Meh.";
    }

    playerAttackInput.style.display = "none";
    playerAttackButton.style.display = "none";
    playerChoiceLabel.style.display = "none";
    replayButton.style.display = "inline";
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}

function playerAttack()
{
    if(playerAttackInput.value.toUpperCase() === "R" || playerAttackInput.value.toUpperCase() === "ROCK")
    {
        //rock selected
        playerChoice = "ROCK";
    }
    else if(playerAttackInput.value.toUpperCase() === "P" || playerAttackInput.value.toUpperCase() === "PAPER")
    {
        //paper selected
        playerChoice = "PAPER";
    }
    else if(playerAttackInput.value.toUpperCase() === "S" || playerAttackInput.value.toUpperCase() === "SCISSORS")
    {
        //scissors selected
        playerChoice = "SCISSORS";
    }
    else if(playerAttackInput.value.toUpperCase() === "IAN")
    {
        //secret move
        playerChoice = "IAN";
    }
    else
    {
        alert("Error. Please input the move you would like to make.");
        return;
    }
   
    //predetermines the robot's choice
    randomNumber = Math.floor(Math.random() * 3);
    switch(randomNumber)
    {
        case 0:
            computerChoice = "ROCK";
            break;
        case 1:
            computerChoice = "PAPER";
            break;
        default:
            computerChoice = "SCISSORS";
            break;
    }

    //finds who won
    if(playerChoice === "ROCK")
    {
        playerMoveDisplay.src = "RockImage.jpg";
        sleep(200);
        if(computerChoice === "ROCK")
        {
            computerMoveDisplay.src = "RockImage.jpg";
            result = "tie";
        }
        else if(computerChoice === "PAPER")
        {
            computerMoveDisplay.src = "PaperImage.jpg";
            result = "lose";
        }
        else
        {
            computerMoveDisplay.src = "ScissorsImage.jpg";
            result = "win";
        }
    }
    else if(playerChoice === "PAPER")
    {
        playerMoveDisplay.src = "PaperImage.jpg";
        sleep(200);
        if(computerChoice === "ROCK")
        {
            computerMoveDisplay.src = "RockImage.jpg";
            result = "win";
        }
        else if(computerChoice === "PAPER")
        {
            computerMoveDisplay.src = "PaperImage.jpg";
            result = "tie";
        }
        else
        {
            computerMoveDisplay.src = "ScissorsImage.jpg";
            result = "lose";
        }
    }
    else if(playerChoice === "SCISSORS")
    {
        playerMoveDisplay.src = "ScissorsImage.jpg";
        sleep(200);
        if(computerChoice === "ROCK")
        {
            computerMoveDisplay.src = "RockImage.jpg";
            result = "lose";
        }
        else if(computerChoice === "PAPER")
        {
            computerMoveDisplay.src = "PaperImage.jpg";
            result = "win";
        }
        else
        {
            computerMoveDisplay.src = "ScissorsImage.jpg";
            result = "tie";
        }
    }
    else if(playerChoice === "IAN")
    {
        playerMoveDisplay.src = "QuestionMark.jpg";
        sleep(200);
        result = "win";
        if(computerChoice === "ROCK")
        {
            computerMoveDisplay.src = "RockImage.jpg";
        }
        else if(computerChoice === "PAPER")
        {
            computerMoveDisplay.src = "PaperImage.jpg";
        }
        else
        {
            computerMoveDisplay.src = "ScissorsImage.jpg";
        }
    }

    sleep(300);

    //updates score and gives the alert
    if(result === "win")
    {
        wins++;
    }
    else if(result === "lose")
    {
        losses++;

    }
    else
    {
        ties++;

    }

    currentRound++;

    //outputs the current score
    scoreDisplayPlayer.innerHTML = "Player Wins: " + wins;
    scoreDisplayComputer.innerHTML = "Computer Wins: " + losses;
    scoreDisplayTies.innerHTML = "Ties: " + ties;
    if(currentRound > numberOfRounds)
    {
        endGame();
    }
    else
    {
        //alerts the round number
        roundDisplay.innerHTML = "Round " + currentRound;
    }
}

gameStartButton.onclick = setRounds;
playerAttackButton.onclick = playerAttack;
replayButton.onclick = setupGame;