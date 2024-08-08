import React, { useEffect, useState } from 'react'

export  function TextMatch() {
  return (
    <div>Hello world</div>
  )
}

// to check hide element
export function QueryBy() {
    let login=false
    return(
        <>
       {
        login? <button>Logout</button>:<button>Login</button>
       }

        </>
    )
}

// when ui element takes time tp print/ ex. depending on api or some issue
export function FindBy(params) {
    const [state,setState]= useState(false);
    useEffect(() => {
     setTimeout(() => {
        setState(true)
     }, 1000);  
    })
    

    return(
        <>
        {
            state ? <h1>Data Found</h1> : <h1>Data Not Found</h1>
        }
        </>
    )
}