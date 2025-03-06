//need to attach an html if want to view in console

let nums = [5, 10, 7, 3, 14, 20]
console.log("The array contains:", nums);

console.log("The value at index 0 is:", nums[0]);
console.log("The value at index 4 is:", nums[4]);

let i = nums.indexOf(7);
console.log("The value of 7 is at index:", i);

//look for 7 starting at index 3
i = nums.indexOf(7, 3);
if(i === -1) {
    console.log("We could not find the value of 7 on or after index 3.")
} else {
    console.log("The value 7 appears after index 3 at index:", i)
}

nums[1] = 6;
console.log("The value at index 1 is:", nums);

nums.unshift(12); //push 12 to the front
nums.push(17); //push 17 to the back

let n = nums.shift();
console.log("Shifted value", n, "off the front");
n = nums.pop();


n = nums.splice(1, 3); //start at 1 and move 3 values