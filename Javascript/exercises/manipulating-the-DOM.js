 // Get references to the buttons and the list 
const changeColorBtn = document.getElementById('changeColorBtn');
const addItemBtn = document.getElementById('addItemBtn');
const itemList = document.getElementById('itemList');

// Change background color function
changeColorBtn.addEventListener('click', function() {
   document.body.style.backgroundColor = 'black';
   document.getElementById('footer').style.color = 'white';
});

// Add list item function 
addItemBtn.addEventListener('click', function() {
    const newList = document.createElement('li');
    newList.innerHTML = 'New item';
    itemList.appendChild(newList);
});



// const addElementBtn = document.getElementById('addElementBtn');

// addElementBtn.addEventListener('click', function() {
//     const newParagraph = document.createElement('p');
//     newList.innerHTML = 'New item';
//     document.querySelector('.container').appendChild(newParagraph);
// });