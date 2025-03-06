//Part 1:
let fruits = ["apple", "banana", "cherry", "date"]
console.log("Fruits array:", fruits);

console.log("First element:", fruits[0]);
console.log("Last element:", fruits[3]);

//Part 2:
fruits[1] = "blueberry";
console.log("Updated fruits array:", fruits);

fruits.push("elderberry");
console.log("After adding elderberry:", fruits);

fruits.unshift("apricot");
console.log("After adding apricot:", fruits);

let removed = fruits.splice(0,1);
console.log("Removed element:", removed);

let removed2 = fruits.splice(4,4);
console.log("Removed element:", removed2);

console.log("Updated array:", fruits);

//Part 3:
for (let i = 0; i < fruits.length; i++) { 
    console.log("Index:", i, "Value:", (fruits[i])); 
} 

for (let i = 0; i < fruits.length; i += 2) { 
    console.log("Skipping every other: Index", i, "Value", fruits[i]); 
}  

//Part 4:
let index = fruits.indexOf("cherry"); 
console.log("Index of Cherry:", index); 

let removedCherry = fruits.splice(2,1);
console.log("Updated array:", fruits);

let addedFruitsArray = ["fig", "grape", "honeydew"]
console.log("Added array:", fruits, addedFruitsArray);

//Bonus Challenge
let randomNumbers = [];

for (let i = 1; i <= 10; i++) { 
    randomNumbers.push(Math.round((Math.random() * 5) + 1))
    }

console.log(randomNumbers);   

//need to do #2 of bonus challenge 
// Count how many times each number appears and print the most frequent number. 
function mostFrequent(randomNumbers) {
    let n = randomNumbers.length, maxCount = 0, result = randomNumbers[0];
}
