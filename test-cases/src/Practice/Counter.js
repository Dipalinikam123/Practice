import React, { useState } from 'react'

function Counter() {
    const [count,setCount]= useState(0)
    const [input,setInput]= useState(" ")

    const increment=()=>{
        setCount(count+ + input)
        setInput("")
    }
    const inputHandeler=(e)=>{
        setInput(e?.target?.value)
    }
    const clearCount=()=>{
        setCount(0)
    }

  return (
    <>
    <div data-testid="count-test">Count:{count}</div>
    <input type='number' value={input} placeholder='Enter Number..!' onChange={(e)=>inputHandeler(e)}/>
    <button onClick={increment}>Increment</button>
    <button onClick={clearCount}>Clear</button>
    </>
  )
}

export default Counter;
