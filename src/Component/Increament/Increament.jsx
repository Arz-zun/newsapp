import React from 'react'
import './Increament.css'
import { useState } from 'react'

export const Test = () => {

  const [num, setNum] = useState(0)

  const increament=()=>
{
  setNum(num + 1);
}
const decreament=()=>
{
  setNum(num - 1);
}
const reset=()=>
{
  setNum(0);
}

  return (
    <section className='container  container_test' id='change'>

    <h1>{num}</h1>
    <button className='increase' onClick={increament}>Increase</button>
    <button className='increase' onClick={decreament}>Decrease</button>
    <button className='increase' onClick={reset}>Reset</button>
    </section>
  )
}