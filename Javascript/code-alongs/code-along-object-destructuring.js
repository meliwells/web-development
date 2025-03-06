const me = {
    name: 'Meli',
    age: 25,
    stats: {
        mileTime: '3.55',
        maxBench: 500,
    },
    isLying: true,
};

console.log(me.name, me.age);

const {name, age} = me;  //can't rename name because of const, should use this (if you don't use const to initialize a variable from a destructured object and modify it, the original object is not changed)
console.log(name, age);

const {stats: {mileTime, maxBench}} = me;

console.log(mileTime, maxBench);

/*
let{name1} = me;  //can rename name using let, but best not to use this in destructuring 
name1 = 'Jojo';
console.log(name1);
*/

//renaming variables while destructuring an object
const {name: email} = me;
console.log(email);



const you = {
    name: 'your name',
    myOwnKey: 'Hi',
};

const someoneElse = {
    name: 'Unknown',
    age: 500,
};