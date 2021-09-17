var randomNum1 = Math.floor((Math.random() * 6) + 1);
var randomNum2 = Math.floor((Math.random() * 6) + 1);
// var playerOne = prompt("Enter name of Player 1.");
// var playerTwo = prompt("Enter name of Player 2.");
var flagOne = document.querySelector("i.dice-1-flag");
var flagTwo = document.querySelector("i.dice-2-flag");


// function changeNames(){
//   document.querySelector("h2.player-one").innerHTML = playerOne;
//   document.querySelector("h2.player-two").innerHTML = playerTwo;
// }

function changeHeading(){
  if (randomNum1 > randomNum2) {
    document.querySelector("h1").innerHTML = '<i class="fas fa-flag"></i> Player 1 has won.';
  } else if (randomNum1 < randomNum2) {
    document.querySelector("h1").innerHTML = 'Player 2 has won. <i class="fas fa-flag"></i>';
  } else if (randomNum1 === randomNum2) {
    document.querySelector("h1").innerHTML = 'Draw.';
  } else {
    document.querySelector("h1").innerHTML = 'Refresh me.';
   }
}

function changeDiceOne(){
  if (randomNum1 === 1) {
    document.querySelector("img.first-dice").setAttribute("src", "images/dice1.png");
  } else if (randomNum1 === 2) {
    document.querySelector("img.first-dice").setAttribute("src", "images/dice2.png");
  } else if (randomNum1 === 3) {
    document.querySelector("img.first-dice").setAttribute("src", "images/dice3.png");
  } else if (randomNum1 === 4) {
    document.querySelector("img.first-dice").setAttribute("src", "images/dice4.png");
  } else if (randomNum1 === 5) {
    document.querySelector("img.first-dice").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector("img.first-dice").setAttribute("src", "images/dice6.png");
  }
}
 function changeDiceTwo(){
  if (randomNum2 === 1) {
    document.querySelector("img.second-dice").setAttribute("src", "images/dice1.png");
  }  else if (randomNum2 === 2) {
    document.querySelector("img.second-dice").setAttribute("src", "images/dice2.png");
  } else if (randomNum2 === 3) {
    document.querySelector("img.second-dice").setAttribute("src", "images/dice3.png");
  } else if (randomNum2 === 4) {
    document.querySelector("img.second-dice").setAttribute("src", "images/dice4.png");
  } else if (randomNum2 === 5) {
    document.querySelector("img.second-dice").setAttribute("src", "images/dice5.png");
  } else {
    document.querySelector("img.second-dice").setAttribute("src", "images/dice6.png");
  }
 }

//changeNames();
changeHeading();
changeDiceOne();
changeDiceTwo();
