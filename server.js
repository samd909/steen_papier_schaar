const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

let score = 0;
let highscore = 0;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/play/:userChoice', (req, res) => {
  const userChoice = req.params.userChoice;
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

  res.send({ result, computerChoice, score, highscore });
});

// Route voor het serveren van index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
