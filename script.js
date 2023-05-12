// MODULE GAMEBOARD
//
//

const Gameboard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const getBoard = () => board;
  const updateBoard = (index, marker) => {
    if (board[index] === '') {
      board[index] = marker;
      return true;
    }
    return false;
  };
  const resetBoard = () => {
    board = ['', '', '', '', '', '', '', '', ''];
  };

  return {
    getBoard, updateBoard, resetBoard, board,
  };
})();

// FACTORY PLAYER

const Player = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;

  return { getName, getMarker };
};
