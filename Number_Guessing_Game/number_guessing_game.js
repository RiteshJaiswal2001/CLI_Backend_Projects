console.log(`Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.
You have 3 to 10 chances based on difficulty level to guess the correct number.`);

console.log(`Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)`);

const userInput = prompt("Enter your choice: ");
let difficultyLevel = ""
if (userInput == 1) {
    difficultyLevel = "Easy"
}else if (userInput == 2) {
    difficultyLevel = "Medium"
}else if (userInput == 3) {
    difficultyLevel = "Hard"
}else{
    console.log("Enter valid difficulty level.");
    return
    
}

console.log(`Great! You have selected the Medium difficulty level.
Let's start the game!`);




