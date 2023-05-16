const Gameboard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const renderBoard = () => {
    let boardCell;
    for (let i=0; i < board.length; i++){
      boardCell =document.createElement ('div');
      boardCell.className ='cell';
      boardCell.innerHTML =board[i];
      document.getElementById('gameboard').appendChild(boardCell);
      console.log(board.length);
    }
  }

    const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
      renderBoard()
    };

    const updateBoard = () => {
      let playedCell = document.querySelectorAll('.cell');
      console.log(playedCell);
      for (let i=0 ; i < playedCell.length ; i++){
        playedCell[i].addEventListener('click', () =>{
          if (playedCell[i].innerHTML === ""){
            playedCell[i].innerHTML = Player2.getMarker();
            
          } 
          
        })
      }
    };
  
  return {
    resetBoard, 
    renderBoard,
    updateBoard
  };
})();



const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;

  return {
    getName,
    getMarker,
  };
};

const Player1 = Player('Adam', 'X')
const Player2= Player('Sandler', 'O')

Gameboard.renderBoard();

Gameboard.updateBoard();
