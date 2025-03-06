
/* 
Read input from user, 
validate input, 
generate random rolls,
add results to an array,
print results
*/ 

//read user input
// let input = window.prompt("How many dice rolls should we make?");
// console.log(input);

//validate user input
let num_rolls;

while(isNaN(num_rolls) || num_rolls === undefined || num_rolls < 0) {
    let input = window.prompt("How many dice rolls should we make?");
    num_rolls = Number(input);
    console.log(num_rolls);
}

let rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

let die1;
let die2;
let roll;

// loop through dice rolling num_rolls times
for(let i = 0; i < num_rolls; i++) {

// generate a random number (1-6) for each dice
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;

// add dice rolls together and add it to the roll variable
    roll = die1 + die2;

//increment an element in our array based on a value of roll
    rolls[roll]++;
}

console.log("We rolled the dice", num_rolls, "times...")

//loop 2-12
for(let i = 2; i < rolls.length; i++) {
    let count = rolls[i];

//calculate percentage of roll 
    let percentage = Math.round(count / num_rolls * 100);
//print count and percentage that the result was rolled
    console.log(i, "was rolled", count, "times. ", percentage, "%");
}


console.log("end");


/* can also do this instead of round
//calculate percentage of roll 
    let percentage = count / num_rolls * 100;
//print count and percentage that the result was rolled
    console.log(i, "was rolled", count, "times. ", percentage.toFixed(2), "%");
*/