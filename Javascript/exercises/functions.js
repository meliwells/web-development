//Part 1
function greetUser(name) { 
    console.log("Hello!", name); 
} 

greetUser("Meli"); 

greetUser("Rob");
greetUser("Sam")

//Part 2
function squareNumber(num) {
    return (num * num);
}

console.log(squareNumber(4));
console.log(squareNumber(7));

//Part 3
function addNumbers(num1, num2) {
    return (num1 + num2);
}

sum1 = addNumbers(10, 5);
sum2 = addNumbers(3, 8);

console.log(sum1);
console.log(sum2);

//Part 4
let colors = ["red", "blue", "green", "yellow", "purple", "orange"]; 

function getRandomColor() {
    let colorIndex = Math.floor(Math.random() * colors.length);
    return colors[colorIndex];

}

console.log(getRandomColor());
console.log(getRandomColor());
console.log(getRandomColor());

//Part 5
let fortunes = [ 
    "You will have a great day!", 
    "A surprise is waiting for you.", 
    "Something exciting is coming soon.", 
    "Be cautious with your decisions today.", 
    "Happiness is around the corner." 
    ]; 

function tellFortune() {
    let fortuneIndex = Math.floor(Math.random() * fortunes.length);
    return fortunes[fortuneIndex];
}

console.log(tellFortune());