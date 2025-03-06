/* Optional Chaining */

const person = {
    name: 'Alex',
    age: 25,
    contact: {
        email:'alex@example.com',
    }
};


//if statement to check for undefined/ null
if (person.socialMedia) {
    console.log(person.socialMedia.twitter);
};

//using && operator to avoid errors with short-circuiting
console.log(person.socialMedia && person.socialMedia.twitter);

//use a ternary operator ? to choose between a specific default option
console.log(person.socialMedia ? person.socialMedia.twitter : 'No twitter account');

// optional chaining with ? before the dot operator when accessing data in an object
console.log(person.socialMedia?.twitter);

// arrow function - return last operation by default, don't have to specify return
let sum = (x, y)  => x + y;
console.log(sum('Testing sum function', 3, 2));

let greeting = name => console.log('Hello', name);
greeting('Judy');

// Arrays and arrow functions
const users = [
    {name: 'John', profile: {website: 'johnsblog.com'}},
    {name: 'Emma'},
    {nmae: 'Mike', profile: {website: 'mikesite.net'}},
];

// returns every element in the array
users.forEach(user => {
    console.log(user.name, user.profile?.website || 'Now website available')  //can remove default text if you don't caree if it says undefined
});

