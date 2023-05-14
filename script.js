const Gameboard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const renderBoard = () => {
    let boardLength= board.length;
    let tempDiv;
    for (i=0; i < boardLength; i++){
      tempDiv =document.createElement ('div');
      tempDiv.className ='cell';
      tempDiv.innerHTML =board[i];
      document.getElementById('gameboard').appendChild(tempDiv);
      console.log(boardLength);
    }
  }

    const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
    };
  
  return {
    resetBoard, 
    renderBoard,
  };
})();



const Player = (name, symbol) => {
  const getName = () => name;
  const getSymbol = () => symbol;

  return {
    getName,
    getSymbol,
  };
};



Gameboard.renderBoard();
