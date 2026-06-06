var rollingDice = false

var winningHeading = document.querySelector(".who-won");

var playerOneHeading = document.querySelector(".player-one-heading h3");
var playerTwoHeading = document.querySelector(".player-two-heading h3");

var playerOneDiceElement = document.querySelector("#player-one-dice .dice");
var playerTwoDiceElement = document.querySelector("#player-two-dice .dice");

var rollingSound = new Audio("./Sounds/rolling-dice-sound.mp3")

var playButton = document.querySelector(".play-button");

playButton.addEventListener("click",function(){
    if(!rollingDice){
        rollingDice = true
        rollingSound.play();
        let playerOneDiceNumber = getRandomeDiceNumber();
        let playerTwoDiceNumber = getRandomeDiceNumber();
        winningHeading.innerText = "Rolling..."
        this.innerText = "Rolling..."
        setTimeout(() => {
            playerOneHeading.innerText = "Player 1 got : "+playerOneDiceNumber;
            playerTwoHeading.innerText = "Player 2 got : "+playerTwoDiceNumber;
            
            if(playerOneDiceNumber > playerTwoDiceNumber){
                winningHeading.innerText = "Player 1 won";
                winningHeading.style.color = "#2563eb";
            }
            else if (playerOneDiceNumber < playerTwoDiceNumber){
                winningHeading.innerText = "Player 2 won";
                winningHeading.style.color = "#FF5722";
            }
            else{
                winningHeading.innerText = "Match is draw!";
                winningHeading.style.color = "#F2B50B";
            }
            
            diceStyler(playerTwoDiceElement, playerTwoDiceNumber);
            diceStyler(playerOneDiceElement, playerOneDiceNumber);
            rollingDice = false;
            this.innerText = "Roll Dice";
        }, 1200);
    }
})
    
// Fucntions
function getRandomeDiceNumber(){
    return Math.floor(Math.random()*6) + 1;
}
function diceStyler(playerDiceElement, playerDiceNumber){
    if (playerDiceNumber == 5){
        playerDiceElement.className = "dice five";
    }else if (playerDiceNumber == 4){
        playerDiceElement.className = "dice four";
    }else if (playerDiceNumber == 3){
        playerDiceElement.className = "dice three";
    }else if (playerDiceNumber == 2){
        playerDiceElement.className = "dice two";
    }else if (playerDiceNumber == 1){
        playerDiceElement.className = "dice one";
    }else if (playerDiceNumber == 6){
        playerDiceElement.className = "dice";
    }
}