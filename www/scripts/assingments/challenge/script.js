// Get reference to the buttons
const btns = document.querySelectorAll("button");

// Get reference to text fields
const playerText = document.querySelector("#player-choice");
const computerText = document.querySelector("#computer-choice");
const resultText = document.querySelector("#result");

// Define variables for player and computer
let player, computer;

// Put all the options in the array for computer
const options = ["rock", "paper", "scissors"];

// Loop through each button and attach an event to them
for (const btn of btns)
{
    btn.addEventListener("click", () =>
    {
        // Get value from player and computer
        player = btn.value;
        computer = options[Math.floor(Math.random() * 3)];

        // Set the choice texts for player and computer
        playerText.textContent = `Your Choice: ${player}`;
        computerText.textContent = `Computer Choice: ${computer}`;

        // Display the result based on outcome
        if (player === "rock")
        {
            if (computer === "paper")
            {
                resultText.textContent = "Result: you lose!";
            }
            else if (computer === "scissors")
            {
                resultText.textContent = "Result: you win!";
            }
            else
            {
                resultText.textContent = "Result: you draw!";
            }
        }
        else if (player === "paper")
        {
            if (computer === "scissors")
            {
                resultText.textContent = "Result: you lose!";
            }
            else if (computer === "rock")
            {
                resultText.textContent = "Result: you win!";
            }
            else
            {
                resultText.textContent = "Result: you draw!";
            }
        }
        else if (player === "scissors")
        {
            if (computer === "rock")
            {
                resultText.textContent = "Result: you lose!";
            }
            else if (computer === "paper")
            {
                resultText.textContent = "Result: you win!";
            }
            else
            {
                resultText.textContent = "Result: you draw!";
            }
        }
    });
}