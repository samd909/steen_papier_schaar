let score = 0;
let highscore = 0;

function updateResult(result) {
  const resultElement = document.getElementById("result");
  resultElement.textContent = result;
}

function updateComputerChoice(computerChoice) {
  const computerChoiceElement = document.getElementById("computer-choice");
  computerChoiceElement.textContent = "De computer koos: " + computerChoice;
}

function updateScore(newScore) {
  const scoreElement = document.getElementById("score");
  scoreElement.textContent = newScore;
}

function updateHighscore(newHighscore) {
  const highscoreElement = document.getElementById("highscore");
  highscoreElement.textContent = newHighscore;
}

function play(userChoice) {
  const choices = ["steen", "papier", "schaar"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  const computerChoice = choices[randomIndex];

  let result;

  switch (userChoice) {
    case computerChoice:
      result = "Gelijkspel!";
      break;
    case "steen":
      if (computerChoice === "schaar") {
        result = "Je wint!";
        score++;
      } else {
        result = "Je verliest!";
        score = 0;
      }
      break;
    case "papier":
      if (computerChoice === "steen") {
        result = "Je wint!";
        score++;
      } else {
        result = "Je verliest!";
        score = 0;
      }
      break;
    case "schaar":
      if (computerChoice === "papier") {
        result = "Je wint!";
        score++;
      } else {
        result = "Je verliest!";
        score = 0;
      }
      break;
    default:
      result = "Ongeldige keuze!";
  }

  if (score > highscore) {
    highscore = score;
  }

  updateResult(result);
  updateComputerChoice(computerChoice);
  updateScore(score);
  updateHighscore(highscore);
}

