import { useState } from "react"

export function UserClickEvent() {

    const [state, setState] = useState('')
    return (
        <>
            <h3>{state}</h3>
            <button onClick={() => setState("Hello")}>Click</button>
        </>
    )
}

export function UserChangeEvent() {

    const [name, setName] = useState('')
    return (
        <>
            <h3>{name}</h3>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e?.target?.value)} />
        </>
    )
}

// this is help to update state then assertion work
export function ActFun() {
    const [name, setName] = useState('')
    return (
        <>
            <h3>{name}</h3>
            <input type="text" placeholder="Enter Name" onChange={(e) => setName(e?.target?.value)} />
        </>
    )
}