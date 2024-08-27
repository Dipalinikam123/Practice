import React, { useState } from 'react';

export default function RegForm({ user,handleChange,handleSubmit }) {
   


    return (
        <div>
            <form className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="firstName" className="form-label">First name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="firstName"
                        value={user.firstName}
                        onChange={(e)=>handleChange(e,'firstName')}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-6">
                    <label htmlFor="lastName" className="form-label">Last name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="lastName"
                        value={user.lastName}
                        onChange={(e)=>handleChange(e,'lastName')}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-md-12">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        value={user.email}
                        onChange={(e)=>handleChange(e,'email')}
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
                        value={user.password}
                        onChange={(e)=>handleChange(e,'password')}
                        required
                    />
                    <div className="valid-feedback">Looks good!</div>
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="checkbox"
                            id="terms"
                            required
                        />
                        <label className="form-check-label" htmlFor="terms">
                            Agree to terms and conditions
                        </label>
                        <div className="invalid-feedback">
                            You must agree before submitting.
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <button className="btn btn-danger" type="submit">Submit form</button>
                </div>
            </form>
        </div>
    );
}
