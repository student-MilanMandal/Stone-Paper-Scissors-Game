let userScore = 0;
let computerScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const GenCompChoice = () => {
  //rock,paper,scissors
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3); //genarate 0-2 many random number but choice this time random index (and floor means first number) Ex- 2.6584584 only display 2
  return options[randIdx];
};

const drawGame = () => {
  console.log("Game was draw.");
  msg.innerText = "Game was Draw. Play again."; //msg id only
  msg.style.backgroundColor = "#59981A";
};

const showWiner = (userWin, userChoice, ComputerChoice) => {
  if (userWin) {
    console.log("you win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! Your ${userChoice} beats ${ComputerChoice}`;
    msg.style.backgroundColor = "#0000FF";
  } else {
    console.log("You lose");
    computerScore++;
    compScorePara.innerText = computerScore;
    msg.innerText = `You lose. ${ComputerChoice} beats  your ${userChoice}`;
    msg.style.backgroundColor = "#FC2E20";
  }
};

const playGame = (userChoice) => {
  console.log("user choice= ", userChoice);
  //Generate computer choice
  const ComputerChoice = GenCompChoice();
  console.log("comp choice= ", ComputerChoice);

  if (userChoice === ComputerChoice) {
    //Draw Game
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //scissors,paper
      userWin = ComputerChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = ComputerChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = ComputerChoice === "rock" ? false : true;
    }
    showWiner(userWin, userChoice, ComputerChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    //     console.log("choice was clicked", userChoice);
    playGame(userChoice);
  });
});
