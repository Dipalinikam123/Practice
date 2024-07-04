import React, { useContext } from 'react'
import { NameContext } from './Contex'

const CounterContex:React.FC=()=>{
    const data = useContext(NameContext)
    console.log("------data",data);
    return(
        <>
        <h1>{data?.value}</h1>
        <button className=' border rounded-3 px-4 py-1 bg-blue-500 text-white' onClick={()=>data?.setValue(data?.value+1)}>Click</button>

        </>
    )
}
export default CounterContex;