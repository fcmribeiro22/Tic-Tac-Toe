const Gameboard = (() => {
    let board = ['', '', '', '', '', '', '', '', ''];

    const renderBoard = () => {
    document.getElementById('gameboard').innerHTML="";
    let boardCell;
    for (let i=0; i < board.length; i++){
      boardCell =document.createElement ('div');
      boardCell.className ='cell';
      boardCell.innerHTML =board[i];
      document.getElementById('gameboard').appendChild(boardCell);
      }

      let playedCell = document.querySelectorAll('.cell');
      for (let i = 0; i < playedCell.length; i++) {
        playedCell[i].addEventListener('click', (event) => {
         Game.updateBoard(event);
        });
    
  }}

      const getBoard= () =>board;


  return{

    renderBoard, 
    getBoard

  }
})();





const Player = (name, marker) => {
  
  return {
    name, 
    marker
  };

};





const Game =(() =>{
    let playerOne;
    let playerTwo;
    let currentPlayer;
    let gameOver= false;


  const startGame = () =>{  
    playerOne= Player(document.querySelector('#player1').value, "X")
    playerTwo= Player(document.querySelector('#player2').value, "O")
    currentPlayer= playerOne;
    Gameboard.renderBoard();
    console.log(playerOne,playerTwo)
    
   
  }

  const switchPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const updateBoard = (event) => {
    const clickedCell = event.target;
    if (clickedCell.innerHTML === "") {
      clickedCell.innerHTML = currentPlayer.marker;
      let board = Gameboard.getBoard();
      let playedCells = document.querySelectorAll('.cell');
      for (let i = 0; i < playedCells.length; i++) {
        if (playedCells[i] === clickedCell) {
          board[i] = clickedCell.innerHTML;
          
        }
       
      }
      
      console.log(board);
      console.log(clickedCell.innerHTML);
      
    } else {
      return;
    }
    switchPlayer()
  };


    return{
    startGame,
    updateBoard
    }



    
})();





const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', ()=>{
  Game.startGame();
})
