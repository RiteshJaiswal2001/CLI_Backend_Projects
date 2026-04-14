var prompt = require("prompt-sync")();

const highScores = {
  Easy: Infinity,
  Medium: Infinity,
  Hard: Infinity,
};

console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 3 to 10 chances based on difficulty level to guess the correct number.`);

function game() {
  console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`);

  const totalAttempts = difficultyLevelChoice();
  const difficultyMap = {
    10: "Easy",
    5: "Medium",
    3: "Hard",
  };
  const difficulty_Name = difficultyMap[totalAttempts];
  console.log(`Great! You have selected the ${difficulty_Name} difficulty level.
Let's start the game!`);
  if (highScores[difficulty_Name] !== Infinity) {
    console.log(
      `The high score for ${difficulty_Name} level is currently ${highScores[difficulty_Name]} attempts.`,
    );
  }
  numberGame(totalAttempts, difficulty_Name);
}

function difficultyLevelChoice() {
  while (true) {
    const userInput = prompt("Enter your choice: ");

    if (userInput == "1") {
      return 10;
    }
    if (userInput == "2") {
      return 5;
    }
    if (userInput == "3") {
      return 3;
    }

    console.log("Invalid choice. Please enter 1, 2, or 3.");
  }
}

function numberGame(totalAttempts,difficulty_Name) {
  let attempt = 1;
  const computerNumber = Math.floor(Math.random() * 100 + 1);
  const start_time = Date.now()
  while (attempt <= totalAttempts) {
    const rawInput = prompt("Enter your guess: ");
    const userGuessedNumber = Number(rawInput);
    if (!validateGuess(userGuessedNumber)) continue;

    const check = validateGame(userGuessedNumber, computerNumber);
    if (check) {
      console.log(
        `Congratulations! You guessed the correct number in ${attempt} attempts.`,
      );
      const end_time = Date.now()
      const time_taken =Math.round( (end_time-start_time)/1000)
      console.log(`It took you ${time_taken} seconds.`);
       if (attempt < highScores[difficulty_Name]) {
        highScores[difficulty_Name] = attempt;
        console.log(`🎉 New High Score for ${difficulty_Name} difficulty!`);
      }
      break;
    }

    if (attempt < totalAttempts)
      console.log(`Now you have ${totalAttempts - attempt} attempt left.`);

    attempt++;
  }

  if (totalAttempts < attempt) {
    console.log(
      `You did not guess the number in given attempts , The number is ${computerNumber}`,
    );
  }
  startAgain();
}

function startAgain() {
  const validate = prompt(
    "if you want play again then enter 1 and not then press enter: ",
  );

  if (validate == 1) {
    return game();
  }

  console.log("Thanks for playing!");
}

function validateGuess(value) {
  if (isNaN(value) || value > 100 || value < 1) {
    console.log(`Please enter valid Number between 1 to 100.`);
    return false;
  }

  return true;
}

function validateGame(value, computerNumber) {
  if (value > computerNumber) {
    console.log(`Incorrect! The number is less than ${value}.`);
    return false;
  } else if (value < computerNumber) {
    console.log(`Incorrect! The number is grater than ${value}.`);
    return false;
  }
  return true;
}

game();
