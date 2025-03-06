
function coinFlip(choice) {
    const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
    const resultMessage = (choice === result) ? 
    `You guessed, ${choice}. 
    The coin flip comes up ${result}.
    Good Guess!` : 
    `You guessed wrong. The toss came up ${result}.`
    document.getElementById('result').innerHTML = resultMessage;
}



// function coinFlip(choice) {
//     const result = Math.random() < 0.5 ? 'Heads' : 'Tails';
//     const resultMessage = (choice === result) ? 
//     ('You guessed', choice, 
//     'The coin flip comes up', result,
//     'Good Guess!') : 
//     ('You guessed wrong. The toss came up', result)
//     document.getElementById('result').innerHTML = resultMessage;
// }