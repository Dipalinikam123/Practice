import axios from 'axios'
import React from 'react'
import { Button } from 'reactstrap'

export default function GetAllUser() {

    const getAllUserHandler = () => {
        const token = JSON.parse(localStorage.getItem('token'))
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
        axios({
            method: 'get',
            url: 'https://backendproject-1ezp.onrender.com/users',
            headers: header.headers,
        }).then((res) => {
            console.log("----usr res", res)
        }).catch((err) => {
            console.log("---err", err)
        })
    }
    return (
        <div>
            <Button color="danger" onClick={getAllUserHandler}>
                Get All User
            </Button>
        </div>
    )
}
