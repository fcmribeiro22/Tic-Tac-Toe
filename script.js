const Gameboard = (() => {
  let board = ['', '', '', '', '', '', '', '', ''];

  const renderBoard = () => {


    
    const resetBoard = () => {
      board = ['', '', '', '', '', '', '', '', ''];
    };
  };
  return {
    getBoard, resetBoard,
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

/* var arrayVariable = ["one", "two", "three"];
var arrayLength = arrayVariable.length;
var temp;

for (i = 0; i < arrayLength; i++) {
  temp = document.createElement('div');
  temp.className = 'results';
  temp.innerHTML = arrayVariable[i];
  document.getElementsByTagName('body')[0].appendChild(temp);
} */
