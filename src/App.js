import { useState } from 'react';

function Square ({ value, onSquareClick}) {
  return (
  <button 
    className = "Square"
    onClick = {onSquareClick}
  >
    {value}
  </button>
  )
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true)
  const [squares, setSquares] = useState(Array(9).fill(null))

  const winner = calculateWinner(squares)
  let status

  if (winner) {
    status = "Winner: " + winner 
  }else{
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)){ // check if the square is filled or the square is belong to the winning line
      return;
    }
    const nextSquares = squares.slice()

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares)
    setXIsNext(!xIsNext);
  }
  /** 
    The array for the board is actually treated as a 
    2-d array, i.e. Squares = [null, null, null,..., null].
    It is simply seperated into row in the purpose of 
    creating a checker board and render it on the webpage

    Also a note: cannot comments in the return block since 
    its just gonna render the comments
   */

  return (
    <>
      <div className="status">{status}</div>
      
      <div className="board-row">
        <Square value = {squares[0]} onSquareClick = {() => handleClick(0)}/>
        <Square value = {squares[1]} onSquareClick = {() => handleClick(1)}/>
        <Square value = {squares[2]} onSquareClick = {() => handleClick(2)}/>
      </div>

      <div className="board-row">
        <Square value = {squares[3]} onSquareClick = {() => handleClick(3)}/>
        <Square value = {squares[4]} onSquareClick = {() => handleClick(4)}/>
        <Square value = {squares[5]} onSquareClick = {() => handleClick(5)}/>
      </div>

      <div className="board-row">
        <Square value = {squares[6]} onSquareClick = {() => handleClick(6)}/>
        <Square value = {squares[7]} onSquareClick = {() => handleClick(7)}/>
        <Square value = {squares[8]} onSquareClick = {() => handleClick(8)}/>
      </div>

    </>
  )
}

function calculateWinner(squares){
  let winner = null;
  const lines = [
    //winner in term of row line
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //winner in term of column line
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //winner in term of diagonal line
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++){
    const[a, b, c ] = lines[i] //make a copy of the winning line(s) 
    if(squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      winner = squares[a];
    }
  }
  return winner;
}
