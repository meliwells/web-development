let randomNumber = Math.floor(Math.random() * 20) + 1;


function guessCheck() {  //called when user clicks the button
    let guess = parseInt(document.getElementById('guessEntered').value);
    let message = ''; //stores the feedback message for the user
    

    if (guess === randomNumber) {
        message = 'You got it!';
    } else if (guess < randomNumber) {
        message = 'No, try a higher number.'
    } else {
        message = 'No, try a lower number.'
    }
    document.getElementById('message').innerHTML = message;
}

//add check for numbers vs letters