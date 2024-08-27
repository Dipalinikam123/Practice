import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {
    const [loginUser, setLoginUser] = useState({
        email: "",
        password: ""
    });
    const navigate=useNavigate()
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
            // You might also want to redirect the user to a different page
            navigate('/');  // Uncomment and use if using react-router for navigation
           
        } else {
            alert('Invalid email or password.');
        }
        setLoginUser({
            email: "",
            password: ""
        })
    };

    return (
        <div className='w-50 m-auto' style={{ height: "50vh" }}>
            <form className="row g-3 needs-validation w-75 p-4 m-auto border my-5 rounded bg-light" onSubmit={loginHandler} noValidate>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={loginUser.email}
                        onChange={(e) => setLoginUser({ ...loginUser, email: e.target.value })}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        value={loginUser.password}
                        onChange={(e) => setLoginUser({ ...loginUser, password: e.target.value })}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <button type="submit" className='btn btn-danger'>Login</button>
            </form>
        </div>
    );
}
