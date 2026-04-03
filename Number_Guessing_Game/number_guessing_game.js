console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 3 to 10 chances based on difficulty level to guess the correct number.`);

var prompt = require("prompt-sync")();

function game() {
  console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`);

  const userInput = prompt("Enter your choice: ");
  // const userInput = 1
  let leftGuess = 0;

  let difficultyLevel = "";
  if (userInput == 1) {
    difficultyLevel = "Easy";
    leftGuess = 10;
  } else if (userInput == 2) {
    difficultyLevel = "Medium";
    leftGuess = 5;
  } else if (userInput == 3) {
    difficultyLevel = "Hard";
    leftGuess = 3;
  } else {
    console.log("Enter valid difficulty level.");
    return;
  }
  
  console.log(`Great! You have selected the ${difficultyLevel} difficulty level.
Let's start the game!`);
  const computerNumber = Math.floor(Math.random() * 100 + 1);
//   console.log(computerNumber);

  function numberGame(leftGuess) {
    console.log(`${userInput} ${leftGuess}`);
    if (leftGuess == 0) {
      console.log("You did not guess the number in given attempts");
      const validate = prompt(
        "if you want play again then enter 1 and not then 0: ",
      );

      if (validate == 1) {
        return game();
      } else {
        return;
      }
    }

    const userGuessedNumber = prompt("Enter your guess: ");

    if (userGuessedNumber > 100 || userGuessedNumber < 1) {
      console.log(`Please enter valid Number between 1 to 100.`);
      return numberGame(leftGuess);
    }

    if (userGuessedNumber > computerNumber) {
      console.log(`Incorrect! The number is less than ${userGuessedNumber}.`);
      return numberGame(leftGuess - 1);
    } else if (userGuessedNumber < computerNumber) {
      console.log(`Incorrect! The number is grater than ${userGuessedNumber}.`);
      return numberGame(leftGuess - 1);
    } else {
        
        
      console.log(
        `Congratulations! You guessed the correct number in ${userInput - leftGuess} attempts.`,
      );
      const validate = prompt(
        "if you want play again then enter 1 and not then 0: ",
      );

      if (validate == 1) {
        return game();
      } else {
        return;
      }
    }
  }

    numberGame(leftGuess);
}

game();
