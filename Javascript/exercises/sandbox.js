// let x = 10;
// let y = 5;

// let val = x + y;
// console.log(`${x} + ${y} is ${val}`);

// val = x - y;
// console.log(`${x} - ${y} is ${val}`);

// val = x * y;
// console.log(`${x} * ${y} is ${val}`);

// val = x / y;
// console.log(`${x} / ${y} is ${val}`);

// y = 3;
// val = x % y;
// console.log(`${x} % ${y} is ${val}`);

console.log("Hello World!")

console.log("Hello World", "My name is Meli")

//-- declaring variables --
var x = 10; //var isn't used much, can cause scoping issues
let y = 5;
let z = x*(y+2);

//const x = 10; //variable that can never be changed
//x = 20; //this will throw an error becasue x was declared as 10

console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x % y);

console.log(z);

let a = .5, b = 7, c = "some kind of string";

console.log(a, b, c);

let name = "Meli";
console.log(name); // can use underscores in name exp: _name

//-- String functions --
let testString = "\"The Horse's saddle was too small\""; //can use single or double quotes, use double if you will have an aposterphy
let testString2 = 'testing " " " " " " string'; //use single if you will have quotes
//"\"testing string\""; is to escape reserved characters
console.log(testString.length);

console.log(testString.charAt(0));

let position = 0;
console.log("The character at position", position, "is", testString.charAt(position));

console.log(testString.indexOf("e"));
console.log(testString.indexOf("st"));
console.log(testString.indexOf("string"));

let horseIndex = testString.indexOf("horse");
let animal = testString.substring(horseIndex, horseIndex + 5); // or use substr()

console.log(horseIndex, animal);

let sliceString = testString.slice(1, 4);
console.log(sliceString);

let sliceString1 = testString.slice(-9);
console.log(sliceString1);

console.log("cHaRliERoHuS@gmail.com".toUpperCase());

let testString3 = testString2.replace('"', "exciting");  //replaceAll will replace all instances
console.log(testString3);

//--- Using Math --
let number = 1.5;
console.log(Math.PI);
console.log(Math.abs(-7));
console.log(Math.floor(number), Math.ceil(number));
console.log(Math.hypot(3, 7,));
console.log(Math.floor(3.5));
console.log(Math.pow(2, 3)); // 2 to the power of 3
console.log(Math.sqrt(16));
console.log(Math.round(3.4));  //5 and up rounds up, 4 and below rounds down unless a lot or repeating 9's after 4 then it rounds up
console.log(Math.round(Infinity));
console.log(123.123456.toFixed(2));
console.log(123.128456.toFixed(2)); //rounds

//--- Rounding ---
console.log("A number between 0 and 10: ", Math.random()*10);
console.log("A number between 0 and 10: ", (Math.random()*10).toFixed(), " rounded"); // toFixed to get a whole number, toFixed returns a string
console.log("A number between 0 and 3: ", Math.floor(Math.random()*4));
console.log("A number between 1 and 3: ", Math.floor(Math.random()*3)+1);


//Part 1: String Manipulation exercise
let message = "Welcome to Javascript!";
console.log(message);
console.log("First character:", message.charAt(0), "Last character:", message.charAt(message.length-1));
console.log(message.toUpperCase());
console.log(message.toLowerCase());
console.log(message.indexOf("Javascript"));
let extractWord = message.substring(11, 21)
console.log(extractWord);
let replace = message.replace("Javascript", "Coding")
console.log(replace);


//Part 2: Working with Math Object
console.log("A number between 0 and 100: ", Math.random()*100);
console.log(Math.sqrt(144));
console.log(Math.abs(-25));
console.log(Math.round(7.8));
console.log(Math.ceil(7.8) );
console.log(Math.floor(7.8));
console.log(Math.trunc(7.8));

let random = Math.random(); 
console.log(random);
console.log(random * 10);
console.log(Math.floor(random * 10));

let fullName = prompt("Please enter your full name:");
let lengthName = fullName.length;
console.log("Hello", fullName,"!", "Your name has", lengthName, "characters" )

let lucky = Math.floor(Math.random()*11);
console.log("Did you know your lucky number for today is", lucky)


