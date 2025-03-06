const user = { 
    name: "Alice", 
    age: 28, 
}; 

const job = { 
    title: "Software Engineer", 
    company: "Tech Corp", 
    name: "Job Name",
};

const userLocation = { 
    city: "New York",
    country: 'USA', 
}; 

const userProfile = Object.assign({}, user, job, userLocation);

console.log('User Profile', userProfile);


const newUserProfile = {...user, ...job, ...userLocation};
console.log(newUserProfile);
