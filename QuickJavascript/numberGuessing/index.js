const min = 1;
const max = 100;

const answer = Math.floor(Math.random() * (max - min + 1));

let attemps = 0; 
let guess;
let running = true;

while(running){
    guess = window.prompt(`guess a number between ${min} - ${max}`);
    guess = Number(guess);

    if(isNaN(guess) || guess < min || guess > max){
        window.alert('please enter a valid number')
    }else{
        attemps++;
        if(guess > answer){
            window.alert("TOO HIGH");
        }else if(guess < answer){
            window.alert("TOO LOW");
        }else{
            window.alert("CORRECT");
            running = false;
        }
    }

}