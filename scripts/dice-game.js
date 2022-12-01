const player1 = {}
const player2 = {}
player1.totalScore = 0;
player2.totalScore = 0;
roundsFinished = 0;

$("#roll-dice-button").click(function () {
    player1.dice1 = Math.floor(Math.random() * 6) + 1;
    player1.dice2 = Math.floor(Math.random() * 6) + 1;
    player2.dice1 = Math.floor(Math.random() * 6) + 1;
    player2.dice2 = Math.floor(Math.random() * 6) + 1;

    $("#player1-dice1").attr("src", `images/dice${player1.dice1}.png`);
    $("#player1-dice2").attr("src", `images/dice${player1.dice2}.png`);
    $("#player2-dice1").attr("src", `images/dice${player2.dice1}.png`);
    $("#player2-dice2").attr("src", `images/dice${player2.dice2}.png`);

    player1.currentScore = getScore(player1.dice1, player1.dice2);
    player2.currentScore = getScore(player2.dice1, player2.dice2);

    $("#player1-score").html("Score this Round: " + player1.currentScore);
    $("#player2-score").html("Score this Round: " + player2.currentScore);

    player1.totalScore += player1.currentScore;
    player2.totalScore += player2.currentScore;

    $("#player1-total").html("Total Score: " + player1.totalScore);
    $("#player2-total").html("Total Score: " + player2.totalScore);

    roundsFinished++;

    if (roundsFinished == 3) {
        $("#roll-dice-button").prop("disabled", true);
        setTimeout(function () {
            if (player1.totalScore > player2.totalScore) {
                alert("Congratulations! You have won the game");
            }

            else {
                alert("Game Over. You lost");
            }
        }, 1000);
    }

});

function getScore(dice1, dice2) {
    if (dice1 == 1 || dice2 == 1) {
        return 0;
    }

    if (dice1 == dice2) {
        return (dice1 + dice2) * 2;
    }

    return dice1 + dice2;
}

$("#new-game-button").click(function () {
    const player1 = {}
    const player2 = {}
    player1.totalScore = 0;
    player2.totalScore = 0;
    roundsFinished = 0;
    $("#player1-score").html("Score this Round: " + (player1.currentScore || 0));
    $("#player2-score").html("Score this Round: " + (player2.currentScore || 0));

    $("#player1-total").html("Total Score: " + player1.totalScore);
    $("#player2-total").html("Total Score: " + player2.totalScore);

    $("#roll-dice-button").prop("disabled", false);
});


$("#begin-game").click(function () {
    if ($("#introduction").is(":visible")) {
        $("#introduction").hide();
    }

    else {
        $("#introduction").show();
    }
});

$("#begin-rules").click(function () {
    if ($("#introduction").is(":visible")) {
        $("#rules").hide();
    }

    else {
        $("#rules").show();
    }
});