'use strict';


/*for secret number */ 
    let secretNumber = Math.trunc(Math.random() * 20)+1;

/** for score values */
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);


    //when there is no number
    if (!guess) {
        document.querySelector('.message').textContent = '🚫 No Number!';
        

        //when player wins the game
    } else if (guess === secretNumber) {

        
        document.querySelector('.number').textContent = secretNumber;

        document.querySelector('.message').textContent = '🏆 Correct Number!';
       
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        //when guess is wrong
    } else if (guess !== secretNumber) {
        
        if (score > 1) {
            document.querySelector('.message').textContent =
                guess > secretNumber ? '🔺 Too high!' : '🔻 Too low!';
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            document.querySelector('.message').textContent =
                '  👎 You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    }
});


        //when guess is too high
//     } else if (guess > secretNumber) {

//         if (score > 1) {

//             document.querySelector('.message').textContent = '🔺 Too high!';
//             score--;
//             document.querySelector('.score').textContent = score;

//         } else {

//             document.querySelector('.message').textContent = '  👎 You lost the game!';
//             document.querySelector('.score').textContent = 0;
            
//         }
       
       
//         //when guess is too low
//     } else if (guess < secretNumber) {

//         if (score > 1) {

//             document.querySelector('.message').textContent = '🔻 Too low!';
//             score--;
//             document.querySelector('.score').textContent = score;

//         } else {

//              document.querySelector('.message').textContent =
//                 '  👎 You lost the game!';
//             document.querySelector('.score').textContent = 0;
            
//         }
//     }
// });

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.message').textContent = 'Start guessing...';
    
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    //document.querySelector('.highscore').textContent = 0;
    document.querySelector('body').style.backgroundColor = '#222';
    
    document.querySelector('.number').style.width = '15rem';
      
});

