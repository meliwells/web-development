
const me = {
    name: 'meli@email.com',
    age: 25,
    stats: {
        mileTime: '3.55',
        maxBench: 500,
    },
    isLying: true,
};

const you = {
    name: 'your name',
    myOwnKey: 'Hi',
};

const someoneElse = {
    name: 'Unknown',
    age: 500,
};

//Assigning
// Object.assign(me, you, someoneElse);

// console.log('me', me);
// console.log('you', you);
// console.log('someoneElse', someoneElse);


// use this instead of above Object.assign(me, you, someoneElse);
//const newObject = Object.assign({}, me, you, someoneElse);

// console.log('New object', newObject);
// console.log('me', me);
// console.log('you', you);
// console.log('someoneElse', someoneElse);

// Ben does it this way - this might be an easier way of combining objects, depends on use
const bensObject = {
    me: me,
    you, you,
    someoneElse: someoneElse,
};

console.log(bensObject.me);


//Spread operator
const newObject = {...me, ...you, ...someoneElse};
//console.log(newObject);

const obj = {
    name: 'meli@email.com',
    address: {
        street: '123 Main St.',
        city: 'Any Town',
        state: 'IL',
        country: 'USA',
    }
};

const objCopy = {...obj};

// objCopy.address.street = '456 Main St.';
// console.log(obj);
// console.log(objCopy);

const objDeepCopy = JSON.parse(JSON.stringify(obj));  //clone in javascript

objDeepCopy.address.street = '456 Main St.';
console.log(obj);
console.log(objDeepCopy);