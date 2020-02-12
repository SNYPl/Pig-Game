const btnRoll = document.querySelector(".btn-roll");
let player1Score = document.getElementById("playerScore-0");
let player2Score = document.getElementById("playerScore-1");
const btnHold = document.querySelector(".btn-hold");
const btnNew = document.querySelector(".btn-new");
let currentScore1 = document.querySelector(".current-score0");
let currentScore2 = document.querySelector(".current-score1");
let player1 = document.querySelector(".player-side0");
let player2 = document.querySelector(".player-side1");
let diceImg = document.getElementById("diceImg");
let playerName1 = document.querySelector(".player-0");
let playerName2 = document.querySelector(".player-1");




let activePlayer, holdScore, scores;


init();



btnRoll.addEventListener("click", function() {
    dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
        holdScore += dice;
        document.querySelector("#playerScore-" +
            activePlayer).textContent = holdScore;
        imageDice();
    } else {
        nextPlayer();
    }

    function imageDice() {
        diceImg.style.display = "block";
        diceImg.src = "img/dice-" + dice + ".png";
    }

});



btnHold.addEventListener("click", function() {
    playerScoresZero()
    let hold = scores[activePlayer] += holdScore;
    if (hold <= 100) {
        holdScore = 0;
        document.querySelector(".current-score" +
            activePlayer).textContent = hold;
        hold = 0;
        diceImg.style.display = "none";
    } else {
        document.querySelector(".btn-roll").disabled = true;
        document.querySelector(".btn-hold").disabled = true;
        document.querySelector(".current-score" +
            activePlayer).textContent = hold;
        playerScoresZero()
        document.querySelector("#playerScore-" +
            activePlayer).textContent = hold;
        document.querySelector(".player-" + activePlayer).textContent = "WINNER!"
        diceImg.style.display = "none";

    }
});


function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    diceImg.style.display = "none";
    holdScore = 0;
    playerScoresZero()


    player1.classList.toggle("active");
    player2.classList.toggle("active");
}

btnNew.addEventListener("click", init);

function playerScoresZero() {
    player1Score.textContent = "0";
    player2Score.textContent = "0";

}


function init() {
    scores = [0, 0];
    activePlayer = 0;
    holdScore = 0;



    playerScoresZero()

    currentScore1.textContent = "0";
    currentScore2.textContent = "0";

    document.querySelector(".btn-roll").disabled = false;
    document.querySelector(".btn-hold").disabled = false;

    player1.classList.add("active");
    player2.classList.remove("active");

    playerName1.textContent = "PLAYER 1";
    playerName2.textContent = "PLAYER 2";
}