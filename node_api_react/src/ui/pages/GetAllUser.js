import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';

export default function GetAllUser() {
    const [users, setUsers] = useState([]);

    const navigate=useNavigate()

    const getAllUserHandler = () => {
        const token = JSON.parse(localStorage.getItem('token'));
        const headers = {
            Authorization: `Bearer ${token}`
        };
        axios.get('https://backendproject-1ezp.onrender.com/users', { headers })
            .then((res) => {
                console.log("----user res", res);
                setUsers(res?.data?.users || []);
            })
            .catch((err) => {
                console.log("---err", err);
            });
    };

    const deleteUserHandler = (userId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this user?");
        if (!confirmDelete) return;

        const token = JSON.parse(localStorage.getItem('token'));
        const headers = {
            Authorization: `Bearer ${token}`
        };

        axios.delete(`https://backendproject-1ezp.onrender.com/users/${userId}`, { headers })
            .then((res) => {
                console.log("User deleted", res);
                // Update the users list by removing the deleted user
                setUsers(users.filter(user => user._id !== userId));
            })
            .catch((err) => {
                console.log("Error deleting user", err);
            });
    };

    useEffect(() => {
        getAllUserHandler();
    }, []);

    return (
        <div>
            <h3>All Users</h3>
            <Table striped>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id} >
                            <td>{user._id}</td>
                            <td>{user.firstName} {user.lastName}</td>
                            <td>{user.email}</td>
                            <td>
                                <Button color="danger" className='me-2' onClick={() => deleteUserHandler(user._id)}>
                                    Delete
                                </Button>
                                <Button color="danger" onClick={() => navigate(`/get-user/${user._id}`)}>
                                    View User
                                </Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}
