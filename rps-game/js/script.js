
const choices = document.querySelectorAll(".choice");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const choiceTextDisplay = document.getElementById("choices-text");
const resultTextDisplay = document.getElementById("result-text");

let playerScore = 0;
let computerScore = 0;

function ComputerChoice() {
    const options = ["✊", "✋", "✌️"];
    const randomIndex = Math.floor(Math.random() * 3);
    return options[randomIndex];
}

function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (playerChoice === "✊" && computerChoice === "✌️") ||
        (playerChoice === "✋" && computerChoice === "✊") ||
        (playerChoice === "✌️" && computerChoice === "✋")
    ) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        return "You win!";
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        return "You Lose!";
    }
}

function PlayerChoice(choice) {
    const playerChoice = choice.textContent;
    const computerChoice = ComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    choiceTextDisplay.textContent = `You chose ${playerChoice}, Computer chose ${computerChoice}.`;
    resultTextDisplay.textContent = result;
}

choices.forEach(choice => {
    choice.addEventListener("click", () => PlayerChoice(choice));
});
