'use strict';      

let scoreValue = 20;
document.querySelector('.score').textContent = scoreValue;
let currentHighScore = 0;

// created a random number generator function
const randomGenerator = function(){
    const guessnumber = Math.trunc(Math.random()*20)+1;
    return guessnumber;
};

let guess = randomGenerator();

// document.querySelector('.centerBox').textContent = guess;

// created a check button action what should happen when button is clicked
document.querySelector('.compare').addEventListener('click',function(){
    const userNumber = Number(document.querySelector('.inputNumber').value);
    // console.log(userNumber);

    if(!userNumber){
        document.querySelector('.message').textContent = 'No number found👀';
    }else if(userNumber === guess){
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.message').style.backgroundColor = 'green';
        document.querySelector('.score').style.backgroundColor = 'green';
        document.querySelector('.highscore').style.backgroundColor = 'green';
        document.querySelector('.myscore').style.backgroundColor = 'green';
        document.querySelector('.myhighscore').style.backgroundColor = 'green';
        document.querySelector('.centerBox').textContent = guess;
        document.querySelector('.message').textContent = '🏆 Correct number';
        if(currentHighScore < scoreValue){
            currentHighScore = scoreValue;
            document.querySelector('.highscore').textContent = currentHighScore;
        }
    }
    // else if(userNumber > guess){
    //     document.querySelector('.message').textContent = 'Too high number';
    //     if(scoreValue > 0){
    //         scoreValue--;
    //         document.querySelector('.score').textContent = scoreValue;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game noop';
    //     }
    // }
    // else if(userNumber < guess){
    //     document.querySelector('.message').textContent = 'Too low number';
    //     if(scoreValue > 0){
    //         scoreValue--;
    //         document.querySelector('.score').textContent = scoreValue;
    //     }else{
    //         document.querySelector('.message').textContent = 'You lost the game noop';
    //     }
    // }
    
    // ⬇⬇⬇⬇⬇

    // ** code refctoring **

            // Here we can even use function to display message ex:- const displayMessage = function(message){
            //     document.querySelector('.message').textContent = message;
            // }
    
    else if(scoreValue > 0){
        document.querySelector('.message').textContent = userNumber > guess ? '📈Too high number' : '📉Too Low number';
        scoreValue--;
        document.querySelector('.score').textContent = scoreValue;
    }else{
            document.querySelector('.message').textContent = 'You lost the game noop';
            document.querySelector('.score').textContent = 0;
        }
});


//Again button implementation
document.querySelector('.reset').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.mainHeading').style.color = 'black';
    document.querySelector('.inputNumber').style.color = 'black';
    document.querySelector('.inputNumber').style.backgroundColor = 'white';
    document.querySelector('.reset').style.color = 'black';
    document.querySelector('.reset').style.backgroundColor = 'white';
    document.querySelector('.mainHeading').style.color = 'white';
    document.querySelector('.message').style.backgroundColor = 'black';
    document.querySelector('.score').style.backgroundColor = 'black';
    document.querySelector('.highscore').style.backgroundColor = 'black';
    document.querySelector('.myscore').style.backgroundColor = 'black';
    document.querySelector('.myhighscore').style.backgroundColor = 'black';
    // document.querySelector('h4').style.backgroundColor = 'black';
    
    scoreValue = 20;
    document.querySelector('.score').textContent = scoreValue;
    guess = randomGenerator();
    // document.querySelector('.centerBox').textContent = guess;
    document.querySelector('.centerBox').textContent = '?';
});