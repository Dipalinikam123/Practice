import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form, FormFeedback, FormGroup, Input, Label } from 'reactstrap'

export default function LoginForm() {
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'https://backendproject-1ezp.onrender.com/auth/sign-in',
            data: loginData
        }).then((res) => {
            console.log("--res", res)
            localStorage.setItem("token", JSON.stringify(res?.data?.token))
        }).catch((err) => {
            console.log("----errr", err)
                alert(err.response.data.message )

        })
        // console.log("----login",loginData)
    }
  return (
    <div>
     <Form onSubmit={handleSubmit} className='p-3'>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    id="email"
                    value={loginData.email}
                    onChange={handleChange}
                    // invalid={!!errors.firstName}
                />
                {/* <FormFeedback>{errors.firstName}</FormFeedback> */}
            </FormGroup>

            <FormGroup>
                <Label for="password">Password</Label>
                <Input
                    type="password"
                    name="password"
                    id="password"
                    maxLength="15"
                    value={loginData.password}
                    onChange={handleChange}
                />
            </FormGroup>
            <Button type="submit" color="primary">Submit</Button>
            </Form>
    </div>
  )
}
