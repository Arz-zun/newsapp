import React from 'react'
import './Game.css'
import { useState } from 'react'

const Game = () => {
const [num, setNum] = useState(0)
const increament=()=>
{
    setNum(num+1);
}
const decreament=()=>
{
    setNum(num-1);
    if(num==0)
    {
        alert("Negative Number is not allowed")
        setNum(0)
    }
}
const reset=()=>
{
    setNum(0);
}

  return (
<>
<div className='game'>
    <h1>
        {num}
    </h1>
    <button onClick={increament}> Increament</button>
    <button onClick={decreament}> Decreament</button>
    <button onClick={reset}> Reset</button>
</div>
</>
  )
}

export default Game