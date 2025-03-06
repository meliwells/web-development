let val = Math.floor(Math.random() * 50) + 1;

if (val % 2 === 0) {
    console.log(val, "is even.");
} else {
    console.log(val, "is odd.");
}


let dayNumber = parseInt(prompt("enter a number between 0 and 6"));
let dayName;

switch(dayNumber) {
    case 0: dayName = "Sunday"; break;
    case 1: dayName = "Monday"; break;
    case 2: dayName = "Tuesday"; break;
    case 3: dayName = "Wednesday"; break;
    case 4: dayName = "Thursday"; break;
    case 5: dayName = "Friday"; break;
    case 6: dayName = "Saturday"; break;
    default: dayName = "Unknown";
}

console.log("Today is", dayName);


let roll = 0; 
while (roll !== 6) { 
roll = Math.floor(Math.random() * 6) + 1;
console.log("You rolled a", roll); 
} 


let startNumber = parseInt(prompt("enter a number between 0 and 10"));
for (let i = startNumber; i >= 0; i--) { 
    console.log(i); 
    } 