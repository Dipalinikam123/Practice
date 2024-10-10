import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function GetUser() {
    const [user, setUser] = useState()
    const params = useParams()

    console.log("----prams id", params)

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        const headers = {
            Authorization: `Bearer ${token}`
        };
        axios.get(`https://backendproject-1ezp.onrender.com/users/${params.id}`, { headers })
            .then((res) => {
                console.log("----user res", res);
                setUser(res?.data);
            })
            .catch((err) => {
                console.log("---err", err);
            });
    }, []);

    return (
        <div>
            <h1 className='text-capitalize'>{user?.firstName} Profile</h1>
            {
                user && (
                    <div className='w-50 border mx-auto my-5'>
                        <p>Name: {user?.firstName} {user?.lastName}</p>
                        <p>Email: {user?.email}</p>
                        <p>Date-Of-Birth: {new Date(user?.dob).toLocaleDateString()}</p>
                        <p>Gender: {user?.gender}</p>
                        <p>Hobbies: {user?.hobby?.map((e, i) => (
                            <span key={i}>{e}{i < user?.hobby?.length - 1 ? ', ' : ''}</span>
                        ))}</p>
                    </div>)
            }
        </div>
    )
}
