// const prompt = require("prompt-sync")();

// const deposit = () => {
//     while (true) {
//         const depositAmount = prompt("Enter a Deposit Amount: ");
//         const numberDepositAmount = parseFloat(depositAmount);

//         if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
//             console.log("Invalid deposit value, try again.");
//         } else { return numberDepositAmount; }
//     }
// }

// const getNumberOfLines = () => {
//     while (true) {
//         const lines = prompt("Enter a Number of Lines to Bet On (1-3): ");
//         const numberOfLines = parseFloat(lines);

//         if (isNaN(numberOfLines) || numberOfLines <= 0  || numberOfLines > 3) {
//             console.log("Invalid number of lines, try again.");
//         } else { return numberOfLines; }
//     }
// }

// const getBet = (balance, lines) => {
//     while (true) {
//         const bet = prompt("Enter a Number of Bet per line: ");
//         const numberBet = parseFloat(bet);

//         if (isNaN(numberBet) || numberBet <= 0  || numberBet > balance / lines) {
//             console.log("Invalid number of Bets, try again.");
//         } else { return numberBet; }
//     }
// }

// let balance = deposit();
// const numberOfLines = getNumberOfLines();
// const numberBet = getBet(balance ,numberOfLines)
 

var arr = [12,13,45,65,756];

arr[1]