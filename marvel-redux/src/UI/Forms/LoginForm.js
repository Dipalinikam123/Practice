import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm({ setModal }) {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const [loginArr, setLoginArr] = useState([]);

    useEffect(() => {
        const jsonData = localStorage.getItem('usersData');
        if (jsonData) {
            setLoginArr(JSON.parse(jsonData));
        }
    }, []);

    const loginHandler = (e) => {
        e.preventDefault();  // Prevent the form from refreshing the page

        // Check if email and password match any user in the stored data
        const existingUser = loginArr.find(user => user.email === loginUser.email && user.password === loginUser.password);

        if (existingUser) {
            alert(`Welcome back, ${existingUser.firstName}!`);
            // Store the logged-in user's data in localStorage
            localStorage.setItem('loginUser', JSON.stringify(existingUser));
            // Redirect the user to a different page
            navigate('/comic'); 
        } else {
            alert('Invalid email or password.');
        }

        // Clear form fields
        setLoginUser({
            email: "",
            password: ""
        });
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    <form
                        className="needs-validation border p-4 bg-light rounded"
                        onSubmit={loginHandler}
                        noValidate
                    >
                        <h2 className="text-center mb-4">Login</h2>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={loginUser.email}
                                onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Please enter a valid email address.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={loginUser.password}
                                onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
                                required
                            />
                            <div className="invalid-feedback">Please enter your password.</div>
                        </div>
                        <button type="submit" className="btn btn-danger w-100">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
