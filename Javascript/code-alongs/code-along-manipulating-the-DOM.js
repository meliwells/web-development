const changeTextBtn = document.getElementById('changeTextBtn');

changeTextBtn.addEventListener('click', function() {
    const paragraph = document.querySelector("p");
    paragraph.innerHTML = 'The text has been changed!';
});

// changeTextBtn.addEventListener('click', function() {
//     const paragraph = document.getElementById('p2');
//     paragraph.innerHTML = 'The text has been changed!';
// });

const addElementBtn = document.getElementById('addElementBtn');

addElementBtn.addEventListener('click', function() {
    const newParagraph = document.createElement('p');
    newParagraph.innerHTML = 'This is a new paragraph added dynamically!';
    document.querySelector('.container').appendChild(newParagraph);
});

const removeElementBtn = document.createElement('button');  //defining what the element is
removeElementBtn. innerHTML = 'Remove Last Element';  //defining the contents of the element
document.querySelector('.container').appendChild(removeElementBtn); // creating the element where we want it to be created

removeElementBtn.addEventListener('click', function() {  //when click button
    const paragraphs = document.querySelectorAll('p');  //create an array in paragraph
    const lastParagraph = paragraphs[paragraphs.length - 1];  // grab last paragraph from array
    lastParagraph.remove();
});

//index.html