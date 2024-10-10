import axios from 'axios';
import React, { useEffect, useState } from 'react';
import UpdatePassword from './UpdatePassword';
import { Button } from 'reactstrap';

export default function UserProfile({ toggleLogModal, updateFormHandler }) {
    const [userProfile, setUserProfile] = useState();
    const [passFlag, setPassFlag] = useState(false);

    console.log("--userprofile", userProfile);

    const handleLogout = () => {
        localStorage.removeItem('token'); 
        setUserProfile(null); 
    };

    useEffect(() => {
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
    }, [toggleLogModal]); 

    return (
        <div>
            <div className='mt-5'>
                <h1>User Profile</h1>
                {userProfile ? (
                    <div>
                        <p>Name: {userProfile.firstName} {userProfile.lastName}</p>
                        <p>Email: {userProfile.email}</p>
                        <p>Date-Of-Birth: {new Date(userProfile.dob).toLocaleDateString()}</p>
                        <p>Gender: {userProfile.gender}</p>
                        <p>Hobbies: {userProfile.hobby.map((e, i) => (
                            <span key={i}>{e}{i < userProfile.hobby.length - 1 ? ', ' : ''}</span>
                        ))}</p>
                        <button type='submit' onClick={() => setPassFlag(true)}>Update Password</button><br />
                        <Button className='mt-3' onClick={handleLogout}>Log Out</Button>
                        <Button className='mt-3' onClick={() => updateFormHandler(userProfile)}>Update Profile</Button>
                        {passFlag && <UpdatePassword setPassFlag={setPassFlag} />}
                    </div>
                ) : (
                    <p>No user profile found.</p>
                )}
            </div>
        </div>
    );
}
