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

    renderBoard();
    console.log(board);
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
 

  const startGame = () => {
    playerOne = Player(document.querySelector('#player1').value, 'X');
    playerTwo = Player(document.querySelector('#player2').value, 'O');
    currentPlayer = playerOne;
    Gameboard.renderBoard();
    console.log(playerOne, playerTwo);
    startButtonHandler();
  };

  const switchPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const updateBoard = (event) => {
    const clickedCell = event.target;
    if (clickedCell.innerHTML === '') {
      clickedCell.innerHTML = currentPlayer.marker;
      const board = Gameboard.getBoard();
      const playedCells = document.querySelectorAll('.cell');
      for (let i = 0; i < playedCells.length; i++) {
        if (playedCells[i] === clickedCell) {
          board[i] = clickedCell.innerHTML;
        }
      }
    } else {
      return;
    }

    checkWin();
    checkDraw();
    switchPlayer();
  };

  const winStatement = () => {
    document.getElementById('message').innerHTML= `It's over! ${currentPlayer.name} wins` 
  
  };

  const checkWin = () => {
    const board = Gameboard.getBoard();
    console.log(board);
    if (board[0] === board[1] && board[1] === board[2] && board[1] !=="") {
      winStatement();
      Gameboard.renderBoard();

      
    }
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
    
  };
})();

const startButtonHandler = () => {
  const formHidden = document.querySelector('.form-names');
  const buttonHidden = document.querySelector('.start-button');
  formHidden.style.display = 'none';
  buttonHidden.style.display = 'none';
};



const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  Game.startGame();
});

const resetButton = document.querySelector('.restart-button');
resetButton.addEventListener('click', () => {
  Gameboard.resetBoard();
});
