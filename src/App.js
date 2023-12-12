import { useState } from 'react';

function Square () {
  const [value, setValue] = useState(null)
  function handleClick() {
    setValue("X")
    console.log('clicked');
  }
  return (

  <button 

    className = "Square"
    onClick = {handleClick}

  >
    {value}
  </button>
  
  )
}

export default function Board() {
  return (
    <>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </>
  )
}
