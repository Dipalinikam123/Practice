import React from 'react'
import {HOC} from './HOC'

function Componant2({number,incFun}) {

   
  return (
    <div>
        <h1>amount is {number}</h1>
        <button onClick={()=>incFun(10)}>Inc</button>
    </div>
  )
}

export default HOC(Componant2)