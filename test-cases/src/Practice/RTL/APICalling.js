import React, { useEffect, useState } from 'react'

export default function APICalling() {
    const [data, setData] = useState([])

    useEffect(() => {
        const getData = async () => {
            let result = await fetch('https://fakestoreapi.com/users');
            const result1 = await result.json()
            setData(result1)
        }
        getData()
    }, [])

    console.log(data)
    return (
        <div>
            <h2>List User</h2>
            <div className='d-flex flex-wrap'>
                {

                    data?.map((e, i) => {
                        return (
                            <ul key={i}>
                                <li>User No..{i + 1}</li>
                                <li>First Name: {e?.name?.firstname}</li>
                                <li>Last Name: {e?.name?.lastname}</li>
                                <li>Email: {e?.phone}</li>
                                <li>Password: {e?.password}</li>

                            </ul>
                        )
                    })
                }
            </div>
        </div>

    )
}
