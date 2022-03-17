
// The completed application should meet the following criteria:

// As a user, I want to play Rock, Paper, Scissors against an automated opponent.

// As a user, I can enter R, P, or S to signify my choice of rock, paper, or scissors.

// As a user, I expect the computer to choose R, P, or S in return.

// As a user, I want the option to play again whether I win or lose.

// As a user, I want to see my total wins, ties, and losses after each round.

var wins = 0;
var losses = 0;
var ties = 0;

function playGame() {
    var input = ["R", "P", "S"]
    var player = prompt("Input R, P, or S");
    player = player.toUpperCase();
    if (!input.includes(player)) {
        alert("invalid input" + player);
    }
    var computer = input[Math.floor(Math.random() * input.length)];
    alert("Computer picks " + computer);
    if (player == computer) {
        alert("It's a tie");
        ties += 1;
    } else if (player == "R" && computer == "S" || player == "S" && computer == "P" || player == "P" && computer == "R"){
        alert("You win!");
        wins++;
    } else {
        alert("Computer wins");
        losses++;
    }

    alert("Wins: " + wins + "\nLosses: " + losses + "\nTies: " + ties)

    return;
}

playGame();

while (confirm("Play again?")) {
    playGame();
}