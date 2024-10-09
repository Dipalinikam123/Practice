import axios from 'axios';
import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default function UserProfile() {
    const [userProfile, setUserProfile] = useState();
    const [passFlag, setPassFlag] = useState(false);

    const [formData, setFormData] = useState({
        currentPassword: '',
        newPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e, id) => {
        e.preventDefault();
        const token = JSON.parse(localStorage.getItem('token'));
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios({
            method: 'post',
            url: `https://backendproject-1ezp.onrender.com/users/update-password/${id}`,
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
    };

    const getUserProfileHandler = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        const header = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        };

        axios({
            method: 'get',
            url: 'https://backendproject-1ezp.onrender.com/users/profile',
            headers: header.headers,
        })
            .then((res) => {
                console.log("User profile fetched successfully", res);
                setUserProfile(res.data);
            })
            .catch((err) => {
                console.log("---err", err);
            });
    };

    return (
        <div>
            <Button color="danger" onClick={getUserProfileHandler}>
                Profile
            </Button>
            <div>
                <h1>User Profile</h1>
                {userProfile ? (
                    <div>
                        <p>Name: {userProfile.firstName} {userProfile.lastName}</p>
                        <p>Email: {userProfile.email}</p>
                        <p>Date-Of-Birth: {userProfile.dob}</p>
                        <p>Gender: {userProfile.gender}</p>
                        <p>Hobbies: {userProfile.hobby.map((e, i) => (
                            <span key={i}>{e}{i < userProfile.hobby.length - 1 ? ', ' : ''}</span>
                        ))}</p>
                        <Button onClick={() => setPassFlag(!passFlag)}>Update Password</Button>

                        {passFlag && (
                            <Form onSubmit={(e) => handleSubmit(e, userProfile?._id)} className='p-3 border w-25 m-auto mt-5'>
                                <FormGroup>
                                    <Label for="currentPassword">Current Password</Label>
                                    <Input
                                        type="password"
                                        name="currentPassword"
                                        id="currentPassword"
                                        value={formData.currentPassword}
                                        onChange={handleChange}
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
                                    />
                                </FormGroup>

                                <Button type="submit" color="primary">Change Password</Button>
                            </Form>
                        )}
                    </div>
                ) : (
                    <p>No user profile found.</p>
                )}
            </div>
        </div>
    );
}
