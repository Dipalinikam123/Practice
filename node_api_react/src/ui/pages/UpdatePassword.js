import axios from 'axios';
import { Button } from 'reactstrap'; // Correct import from reactstrap
import React, { useState } from 'react';
import { Form, FormGroup, Input, Label } from 'reactstrap';

export default function UpdatePassword({setPassFlag}) {
    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };
        axios({
            method: 'post',
            url: `https://backendproject-1ezp.onrender.com/users/update-password`,
            headers: header.headers,
            data: formData // Include form data in the request
        })
            .then((res) => {
                console.log("Password updated successfully", res);
                // Optionally reset form data and close the password update form
                setFormData({ currentPassword: '', newPassword: '' });
                setPassFlag(false);
            })
            .catch((err) => {
                console.log("---err", err);
            });
    }

    return (
        <div>
            <Form onSubmit={handleSubmit} className='p-3 border w-25 m-auto mt-5'>
                <FormGroup>
                    <Label for="currentPassword">Current Password</Label>
                    <Input
                        type="password"
                        name="currentPassword"
                        id="currentPassword"
                        value={formData.currentPassword}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="newPassword">New Password</Label>
                    <Input
                        type="password"
                        name="newPassword"
                        id="newPassword"
                        value={formData.newPassword}
                        onChange={handleChange}
                        required
                    />
                </FormGroup>
                <Button type="submit" color="primary">Change Password</Button>
            </Form>
        </div>
    );
}
