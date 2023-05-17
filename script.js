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
      console.log(board);
      for (let i = 0; i < playedCell.length; i++) {
        playedCell[i].addEventListener('click', () => {
          if (playedCell[i].innerHTML === "") {
            playedCell[i].innerHTML = "X";
            board[i] = playedCell[i].innerHTML;
            console.log(board);
            console.log(playedCell[i].innerHTML);
          }else {
            return;
          }
        });
    
  }}

      const getBoard= () =>board;


  return{

    renderBoard, 
    getBoard

  }
})();





const createPlayer = (name, marker) => {

  return {
    name, 
    marker
  };

};





const Game =(() =>{
  const startGame = () =>{
    
    let playerOne= createPlayer(document.querySelector('#player1').value, "X")
    let playerTwo= createPlayer(document.querySelector('#player2').value, "O")
    let currentPlayer= playerOne;
    let gameOver= false;

    Gameboard.renderBoard();
    
    console.log(playerOne,playerTwo)
  }


    return{
    startGame,
    }

})();





const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', ()=>{
  Game.startGame();
})
