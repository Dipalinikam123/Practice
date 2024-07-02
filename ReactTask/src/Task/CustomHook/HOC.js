import React from 'react'

export default function HOC(Componant) {

    return () => {
        //state and logic here

        return (
            <>
            <Componant/>
            </>
        )
    }
}
