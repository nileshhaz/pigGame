'use strict';
//selecting elements
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
//functions
const switchPlayer = function(){
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  activePlayer = activePlayer === 0 ? 1 : 0 ;
  x=0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
}
const newGame = function(){
  x =0;
  activePlayer=0;
  score[0] = 0;
  score[1] = 0;
  diceEl.classList.add('hidden');
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--1`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  console.log('heloo');
}

let x =0;
let activePlayer=0;
const score = [0,0];
let playingg = true ;

score0El.textContent=0;
score1El.textContent=0;
diceEl.classList.add('hidden');
btnRoll.addEventListener('click',function(){
  if (playingg) {
    let dice= Math.floor(Math.random()*6)+1 ;
    diceEl.classList.remove('hidden');
    diceEl.src = `dice-${dice}.png`;
    if (dice!==1) {
      x+=dice;
      document.getElementById(`current--${activePlayer}`).textContent = x;
    }
    else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click',function () {
  if (playingg) {
    score[activePlayer] += x ;
    document.getElementById(`score--${activePlayer}`).textContent = score[activePlayer];
    console.log(activePlayer);
    console.log(score[activePlayer]);
    if (score[activePlayer]>=20) {
      playingg = false ;
      diceEl.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click',function(){
  playingg =true;
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  if (activePlayer==1) {
    switchPlayer();
    newGame();
  }
  else {
    newGame();
  }
})
