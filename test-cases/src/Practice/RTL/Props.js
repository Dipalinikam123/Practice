import React from 'react'

export  function Props({name}) { // thid prop from app.js
  return (
    <div>My Name is:{name}</div>
  )
}

export function FunctionalProps({mockFunction}) { // this prop provided app.test.js
    return(
        <button onClick={mockFunction}>Mock Function</button>
    )
    
}
