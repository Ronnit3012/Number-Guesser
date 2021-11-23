/*
GAME FUNCTION:
-> Player must guess a number between a min and max
-> Player gets a certain amount of guesses
-> Notify player of guesses remaining
-> Notify the player of the correct answer if loose
-> Let player choose to play again
*/

// Game values
let min = 1,
    max = 10,     // this is another convention to initialize multiple variables of the same type
    winningNum = 2,
    guessesLeft = 3;

// UI Elements
const game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Listen for guess
guessBtn.addEventListener('click', function() {
    // console.log(guessInput.value);       // it will give the number entered in the guess field after pressing submit
    // the output we get is in black, it means it is a string, but we want a number so we need to parse it

    let guess = parseInt(guessInput.value);      // parseInt will convert from string to integer

    // validate
    if(isNaN(guess) || guess < min || guess > max) {       // for integer, nothing means NaN, isNan() checks whether a numbers is NaN or not, it returns boolean
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');
    }

    // Check if won
    if(guess === winningNum ) {
        /*   Game Over - Won   */

        // Disable Input
        guessInput.disabled = true;            // this will disable the input field after the guessed number is correct
        
        // Change Border color
        guessInput.style.borderColor = 'green';      // this will change the border to "Green"

        // Set Message
        setMessage(`${winningNum} is correct, YOU WIN!`, 'green');
    } else {
        // Wrong Number
        guessesLeft -= 1;

        if(guessesLeft === 0) {
            /*   Game Over - Lost  */

            // Disable Input
            guessInput.disabled = true;

            // Change Border color
            guessInput.style.borderColor = 'red';      // this will change the border to "Green"

            // Set Message
            setMessage(`Game Over, you lost. The correct number was ${winningNum}`, 'red');
        } else {
            /*  Game continues - Answer Wromg   */

            // Clear Input
            guessInput.value = '';       // this will clear the input firld after the guess is wrong and number of guesses is more than 0

            // Change Border color
            guessInput.style.borderColor = 'red';

            // Tell user it's the wrong number
            setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,'red');
        }
    }
});

// Set Message
function setMessage(msg, color) {
    message.style.color = color;         // this will print the message with the specific color passed as a parameter
    message.textContent = msg;
}














