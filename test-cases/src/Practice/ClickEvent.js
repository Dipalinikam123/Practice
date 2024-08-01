import React, { useState } from 'react'

export default function ClickEvent() {

    const [message, setMessage]= useState("hello");

    const changeMessage=()=>{
        setMessage("World")
    }
  return (
    <div>
        <h1>{message}</h1>
        <button data-testid="btn1" onClick={changeMessage}>Click</button>
    </div>
  )
}

