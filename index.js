console.log('hello there, welcome to Tic Tac Toe');


var Game = function() {
  this.store = Array(3).fill(Array(3).fill(null));
  //console.log('game starts');
  // player turn switch between 1 and 2
  this.playerOneTurn = true;
};

Game.prototype.isFinished = function() {
  //check row
  for (var i = 0; i < 3; i++) {
   if (this.store[i][0] !== null && this.store[i][0] === this.store[i][1] && this.store[i][0] === this.store[i][2]) {
     if (this.store[i][0] === 'X') {
       console.log('player1 wins');
     } else {
       console.log('player2 wins');
     }
     return true;
   }
  }
  return false;

  // check col

  // check diagonal
};

Game.prototype.start = function() {
  console.log('game start');

  //while (!this.isFinished()) {
    if (this.playerOneTurn) {
      // console.log(document.getElementsByClassName('block')[0]);
      console.log('player1: it is your turn');
      for (var i = 0; i < 9; i++) {
        document.getElementsByClassName('block')[i].addEventListener('click', function() {
          console.log('clicked');
          this.innerHTML = 'X';
          this.playerOneTurn = !this.playerOneTurn;
        })

      }

    } else {
      console.log('player1: it is your turn');
      for (var i = 0; i < 9; i++) {
      document.getElementsByClassName('block')[0].addEventListener('click', function() {
        console.log('clicked');
        this.innerHTML = '*';
        this.playerOneTurn = !this.playerOneTurn;
      })

      }
    }

  //}
}


var game = new Game();
game.start();
