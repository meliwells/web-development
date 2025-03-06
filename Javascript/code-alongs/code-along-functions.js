//declared function
function greeting() {
    console.log("Hello!")
}

//call (invoke) function
greeting();

function name_greeting(name) {
    console.log("Hello,", name +"!")
}

name_greeting("Meli");

//default value
greeting();

function name_greeting(name = "Annoymous") {
    console.log("Hello,", name +"!")
}

name_greeting();


// no parameters
function average() {
    let sum = 0; //for every function, there is an arguments array included with every function
    for(let i = 0; i < arguments.length; i++) {
        sum = sum + arguments[i];
    }
    return sum/arguments.length;;
}

console.log("Average of numbers is:", average(1, 2, 3, 4, 5, 6, 7, 8, 9));

//set a return value to not get undefined

function roll(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}

function log_roll(die) {
    console.log("The number that was rolled was:", die);
}

// let die1 = roll();  same as below, different way to write
// log_roll(die1);

log_roll(roll());

//get_input(prompt) gets input from user and validates that it is a valid number
function get_input(prompt) {
    let num_rolls;
    while(isNaN(num_rolls) || num_rolls === undefined || num_rolls < 0) {
        let input = window.prompt(prompt);
        num_rolls = Number(input);
        console.log(num_rolls);
    }
    return num_rolls;
}

//initialize_rolls() initialize dice roll storage array
function initialize_rolls(die = 6) {
    let rolls = [];

    for(let i = 0; i < (die * 2 + 1); i++) {
        rolls.push(0);
    }

    return rolls;
}

console.log(initialize_rolls()); //default created above die = 6
console.log(initialize_rolls(8));
console.log(initialize_rolls(20));

// roll() rolls an individual die
function roll(max = 6) {
    return Math.floor(Math.random() * max) + 1;
}
//--- converting dice roll code along into functions ---
//roll_dice() 
function roll_dice(num_rolls, die_size = 6) {
    let rolls = initialize_rolls(die_size);


    for(let i = 0; i < num_rolls; i++) {
        let die1 = this.roll(die_size);
        let die2 = this.roll(die_size);
        let roll = die1 + die2;
        rolls[roll]++;
    }

    return rolls;
}


//roll_results()
function roll_results(rolls_array, num_rolls) {
    for(let i = 2; i < rolls_array.length; i++) {
        let count = rolls_array[i];
    //calculate percentage of roll 
        let percentage = Math.round(count / num_rolls * 100);
    //print count and percentage that the result was rolled
        console.log(i, "was rolled", count, "times. ", percentage, "%");
    }
}

let num_rolls = get_input("How many dice rolls should we make?");
let rolls = roll_dice(num_rolls, 20) //added 20 to allow to roll larger dice otherwise keep as (num_rolls)
roll_results(rolls, num_rolls);


