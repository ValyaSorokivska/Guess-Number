'use strict';


const number=document.querySelector(`.number`);
const check = document.querySelector(`.check`);
const message= document.querySelector(`.message`);
const score = document.querySelector(`.score`);
const body= document.querySelector(`body`)
const btnAgain = document.querySelector(`.again`);
const guess1= document.querySelector('.guess');
const highscore= document.querySelector(`.highscore`)

let scoreChangeable=20
let numberRandom= Math.trunc(Math.random()*20)+1;
let highscoreChangeable= 0



btnAgain.addEventListener(`click`, function(){
    message.innerHTML= `Start guessing...`
    score.innerHTML= scoreChangeable
    body.style.backgroundColor= `#222`
    number.style.width=`15rem`
    numberRandom= Math.trunc(Math.random()*20)+1;
    number.innerHTML=`?`
   guess1.value=``

})


check.addEventListener(`click`, function(){

const guess= Number (guess1.value);


   if (!guess){
    message.innerHTML= `No Number!`
   }
   else if(guess === numberRandom){
    message.innerHTML= `Correct Number!`
    body.style.backgroundColor= `#60b347`
    number.style.width=`30rem`
    number.innerHTML=numberRandom;

    if (scoreChangeable > highscoreChangeable){
        highscoreChangeable=scoreChangeable
        highscore.innerHTML=highscoreChangeable
    }

   }
   else if(guess !== numberRandom){

     if (guess > numberRandom){
        if(scoreChangeable> 1){
            message.innerHTML= guess>numberRandom ?`Too high!`: `Too low!`
            scoreChangeable--
            score.innerHTML= scoreChangeable
        }
        else{       
             message.innerHTML= `You lost the game!`}
       
       }
  
    else{       
         message.innerHTML= `You lost the game!`}
   }
})

