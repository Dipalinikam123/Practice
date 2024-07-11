import React from 'react'
import {HOC} from './HOC'

 function Componant1({number,incFun,name}) {
    
    
    return (
        <div>
            <h1>count is {number}</h1>
            <h1>Name is {name}</h1>
            <button onClick={()=>incFun(1)}>inc count</button>
        </div>
    )
}

export default HOC(Componant1)