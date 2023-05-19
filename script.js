const Gameboard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const renderBoard = () => {
    document.getElementById('gameboard').innerHTML = '';
    let boardCell;
    for (let i = 0; i < board.length; i++) {
      boardCell = document.createElement('div');
      boardCell.className = 'cell';
      boardCell.innerHTML = board[i];
      document.getElementById('gameboard').appendChild(boardCell);
    }

    const playedCell = document.querySelectorAll('.cell');
    for (let i = 0; i < playedCell.length; i++) {
      playedCell[i].addEventListener('click', (event) => {
   
          Game.updateBoard(event);
        
      });
    }
  };

  const getBoard = () => board;

  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
    
    document.getElementById('message').innerHTML= "";
    Game.restartGameOver();
    renderBoard();
   
  };

  return {

    renderBoard,
    getBoard,
    resetBoard,

  };
})();

const Player = (name, marker) => ({
  name,
  marker,
});

const Game = (() => {
  let playerOne;
  let playerTwo;
  let currentPlayer;
  let gameOver= false;
  

  const startGame = () => {
    playerOne = Player(document.querySelector('#player1').value, 'X');
    playerTwo = Player(document.querySelector('#player2').value, 'O');
    currentPlayer = playerOne;
    Gameboard.renderBoard();
    console.log(playerOne, playerTwo);
    startButtonHandler();
  };

  const switchPlayer = () => {
    if (gameOver=== false){
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    console.log(gameOver);}
  };

  const updateBoard = (event) => {
    const board = Gameboard.getBoard();
    if (gameOver=== false){
      
      const clickedCell = event.target;
      if (clickedCell.innerHTML === '') {
        clickedCell.innerHTML = currentPlayer.marker;
        
        const playedCells = document.querySelectorAll('.cell');
        for (let i = 0; i < playedCells.length; i++) {
          if (playedCells[i] === clickedCell) {
            board[i] = clickedCell.innerHTML;
          }
        }
      } else {
        return;
      }
    }

    checkDraw();
    checkWin();
    switchPlayer();
    
  };

  const winStatement = () => {
    document.getElementById('message').innerHTML= `It's over! ${currentPlayer.name} wins` 
    gameOver=true;
  };

  const checkWin = () => {
    const board = Gameboard.getBoard();
    console.log(board);
    if (board[0] === board[1] && board[1] === board[2] && board[1] !=="") {
      winStatement();
    } else if (board[3] === board[4] && board[4] === board[5] && board[4] !=="") {
      winStatement();
    } else if (board[6] === board[7] && board[7] === board[8] && board[7] !=="") {
      winStatement();
    } else if (board[0] === board[4] && board[4] === board[8] && board[4] !=="") {
      winStatement();
    } else if (board[6] === board[4] && board[4] === board[2] && board[4] !=="") {
      winStatement();
    } else if (board[0] === board[3] && board[3] === board[6] && board[3] !=="") {
      winStatement();
    } else if (board[1] === board[4] && board[4] === board[7] && board[4] !=="") {
      winStatement();
    } else if (board[2] === board[5] && board[5] === board[8] && board[5] !=="") {
      winStatement();
    } 
  };

  const restartGameOver =() =>{
    gameOver=false;
  };

  


  const checkDraw = () => {
    const board = Gameboard.getBoard();
    let isDraw = true;
  
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        isDraw = false;
        break;
      }
    }
  
    if (isDraw) {
      document.getElementById('message').innerHTML= "It's a draw!!";
    }
  };

  

  return {
    startGame,
    updateBoard,
    restartGameOver,

    
  };
})();

const startButtonHandler = () => {
  const formHidden = document.querySelector('.form-names');
  const buttonHidden = document.querySelector('.start-button');
  formHidden.style.display = 'none';
  buttonHidden.style.display = 'none';
  const newGameButton = document.querySelector('.new-game-button');
  newGameButton.style.display= 'flex';
};



const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  Game.startGame();
  document.querySelector('.restart-button').style.display= 'flex';
});

const resetButton = document.querySelector('.restart-button');
resetButton.addEventListener('click', () => {
  Gameboard.resetBoard();
});

const newGameButton = document.querySelector('.new-game-button');
newGameButton.addEventListener('click',() =>{
window.location.reload();
} );


