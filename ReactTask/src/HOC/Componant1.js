import React from 'react'
import {HOC} from './HOC'

 function Componant1({number,incFun}) {
    
    
    return (
        <div>
            <h1>count is {number}</h1>
            <button onClick={()=>incFun(1)}>inc count</button>
        </div>
    )
}

export default HOC(Componant1)