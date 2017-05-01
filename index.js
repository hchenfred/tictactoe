console.log('hello there, welcome to Tic Tac Toe');


var Game = function() {
  this.store = Array(3).fill(Array(3).fill(null));
  console.log('game starts');
};


var game = new Game();
