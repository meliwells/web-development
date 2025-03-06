const firstName = 'Mark';
const lastName = 'Scott';
const status = 'retired';

const wrestler1 = {
    firstName: firstName,
    lastName: lastName,
    status: status,
};

console.log(wrestler1);
console.log(JSON.stringify(wrestler1, null, 4));  //4 spaces to display different


//Object shorthand, same as above (wrestler1) but written different
const wrestler2 = {
    firstName,
    lastName,
    status,
};

console.log(wrestler2);
console.log(JSON.stringify(wrestler2, null, 2));  //2 spaces to display different