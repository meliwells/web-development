let cat = {
    name: 'Fluffy',
    breed:'Bombay Cat',
    age: 3,
    meow: function() {
        console.log(this.name, 'Says Meow!');
    }
}

console.log(cat.name);
console.log(cat.age);

cat.meow();

cat.age = 4;  //changing the value
console.log(cat.age);

cat.color = 'Black';  // adding new property
console.log(cat.color);

delete cat.color;  // deleting a property
console.log(cat.color);

// create owner object
let owner = {
    name: 'Randi',
    city: 'Somewhere',
};

cat.owner = owner; // creating property with object as value
console.log(cat.owner.name);
console.log(cat.owner.city);

//compare objects
let cup1 = {color: 'blue', volume: 12};
let cup2 = {color: 'blue', volume: 12};

console.log(cup1 == cup2); // not comparing its properties, comparing its existence - these are seperate things

let cup3 = cup2;

console.log(cup3 == cup2);

cup2.color = 'red';
cup2.material = 'glass';
console.log(cup3.color);
console.log(cup3.material);

cup3.material = 'wood';
console.log(cup2.material);

//convert objects to JSOn - stringify
let catJSON = JSON.stringify(cat);
console.log(catJSON);
