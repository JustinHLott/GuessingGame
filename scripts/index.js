/*Define the variables*/
const guessButton = document.getElementById('guess-button');
guessButton.addEventListener('click', processGuess)
const playAgainContainer = document.getElementById('again-container');
const playAgainButton = document.getElementById('again-button');
playAgainButton.addEventListener('click', startingGame)

//console.log('Button by id:', guessButton.textContent);

const guessInput = document.getElementById('guess-input');
const feedbackContainer = document.getElementById('feedback');

/*const buttons = document.getElementsByClassName('btn');
for (const ele of buttons) {
    console.log('Button by class:', ele.textContent);
}*/

let randomNumber
startingGame();

//supporting functions
function startingGame(){
    //console.log('starting game');
    displayPlayAgain(false);
    if(feedbackContainer){
        feedbackContainer.innerHTML='';
    }
    if(guessInput){
        guessInput.value='';
    }
    randomNumber = generateRandomNumber(20);
}
function displayPlayAgain(display){
if(playAgainContainer){
    if(display){
        playAgainContainer.style.display='block';
    }
    else{
        playAgainContainer.style.display = 'none';
    }
}
}
//This generages a random number.
function generateRandomNumber(max){
    const result = Math.floor(Math.random()*max)+1;
    console.log('Random number:',result);
    return result;
}
//This checks to see if your guess was correct or not
function processGuess(){
    let feedbackText;
    if (guessInput){
        const guess = guessInput.valueAsNumber;
        //console.log('The Guess:',typeof guess);
        if(guess===randomNumber){
            feedbackText = `You win! ${guess} is correct!`;
            displayPlayAgain(true);
        }
        else if(guess>randomNumber){
            feedbackText = `${guess} is too large.`;
        }
        else if(guess<randomNumber){
            feedbackText = `${guess} is too small.`;
        }
        else{
            feedbackText = 'Try again.';
        }
    }
    if (feedbackContainer){
        feedbackContainer.innerHTML+='<br>' + feedbackText;
    }
    
    
    //console.log('The Feedback:',feedbackText);
}