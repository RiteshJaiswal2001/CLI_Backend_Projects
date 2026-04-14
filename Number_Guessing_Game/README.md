
# 🎮 Number Guessing Game (CLI)

A fun, interactive Command Line Interface (CLI) game built with Node.js. The player tries to guess a randomly generated number between 1 and 100 within a limited number of attempts.

## 🚀 Features

- **Difficulty Levels**: Choose between Easy (10 chances), Medium (5 chances), and Hard (3 chances).
- **High Score Tracking**: The game keeps track of your best (fewest) attempts for each difficulty level during your session.
- **Performance Timer**: Tracks exactly how many seconds it took you to find the correct number.
- **Input Validation**: Ensures users enter valid numbers within the 1-100 range.
- **Replayability**: Option to play multiple rounds without restarting the script.

## 📋 Prerequisites

Before running this game, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v12 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## 🛠️ Installation

1. **Clone the repository** (or create a new folder for your project).
2. **Initialize the project** (if you haven't already):
   ```bash
   npm init -y
   ```
3. **Install the required dependency**:
   This project uses `prompt-sync` to handle user input.
   ```bash
   npm install prompt-sync
   ```

## 🕹️ How to Play

1. Run the game using Node.js:
   ```bash
   node number_guessing_game.js
   ```
   
2. Select your difficulty level (1, 2, or 3).
3. Type your guess when prompted.
4. Follow the hints:
   - **"The number is less than X"**: Your guess was too high.
   - **"The number is greater than X"**: Your guess was too low.
5. Win by guessing the number before your attempts run out!

## 📊 Difficulty Table

| Level  | Chances | Description |
| :----- | :------ | :---------- |
| 1. Easy   | 10      | Perfect for beginners |
| 2. Medium | 5       | A solid challenge |
| 3. Hard   | 3       | For the experts |

## 📸 Example Output

```text
Welcome to the Number Guessing Game!
I'm thinking of a number between 1 and 100.

Please select the difficulty level:
1. Easy (10 chances)
2. Medium (5 chances)
3. Hard (3 chances)
Enter your choice: 2

Great! You have selected the Medium difficulty level.
Let's start the game!

Enter your guess: 50
Incorrect! The number is less than 50.
Now you have 4 attempts left.

Enter your guess: 25
Congratulations! You guessed the correct number in 2 attempts.
It took you 4.12 seconds.
🎉 New High Score for Medium difficulty!

If you want to play again enter 1 and not then 0: 
```

## 🛠️ Technologies Used

- **JavaScript (ES6+)**
- **Node.js**
- **prompt-sync** (Library for synchronous user input)

## 📝 License
This project is open-source and free to use.

---

## Project URL
https://roadmap.sh/projects/number-guessing-game