import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegForm.css';

export default function RegForm({ user, handleChange, handleSubmit, toggle,errors }) {
    const navigate = useNavigate();

    const navigateLogin = () => {
        navigate('/login');
        toggle();
    };



    return (
        <div>
            <form className="row g-3 needs-validation" noValidate>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.firstName && 'is-invalid'}`}
                        id="firstName"
                        value={user.firstName}
                        onChange={(e) => handleChange(e, 'firstName')}
                        required
                    />
                    {errors.firstName && <div className="invalid-feedback">{errors.firstName}</div>}
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input
                        type="text"
                        className={`form-control ${errors.lastName && 'is-invalid'}`}
                        id="lastName"
                        value={user.lastName}
                        onChange={(e) => handleChange(e, 'lastName')}
                        required
                    />
                    {errors.lastName && <div className="invalid-feedback">{errors.lastName}</div>}
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className={`form-control ${errors.email && 'is-invalid'}`}
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => handleChange(e, 'email')}
                        required
                    />
                    {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                </div>
                <div className="col-md-12">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input
                        type="password"
                        className={`form-control ${errors.password && 'is-invalid'}`}
                        id="password"
                        value={user.password}
                        onChange={(e) => handleChange(e, 'password')}
                        required
                    />
                    {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                </div>
                <div className="col-12 form-footer">
                    <button className="btn btn-danger" type="submit" onClick={(e)=>handleSubmit(e)}>Submit form</button><br /><br />
                    <p onClick={navigateLogin} role="button" className="p-link">Already have an account? <span className="login">Login here...!</span></p>
                </div>
            </form>
        </div>
    );
}
