// Task 1
let car = {
    make: 'Ford',
    model: 'Highboy',
    year: 1976,
    color: 'black',
    drive: function() {
        console.log('The car is driving.')
    }
}

car.drive();

//Task 2
car.color = 'blue';
console.log(car.color);

car.fuelType = 'gasoline';
console.log(car.fuelType);

delete car.year;
console.log(car.year);

//Task 3
let driver = {
    name: 'Mary',
    licenseNumber: 'ABC123456',
    age: 40,
};

car.driver = driver;
console.log(car.driver.name);

//Task 4
let carJSON = JSON.stringify(car);
console.log(carJSON);


//Task 5
let carObject = JSON.parse(carJSON);
console.log(carObject);


