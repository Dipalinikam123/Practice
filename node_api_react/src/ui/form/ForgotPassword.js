import React, { useState } from 'react';

function ForgotPassword({linkHandler,handleBackToLoginClick,email,handleEmailChange}) {
   

    return (
        <div className="p-3">
            <h4>Reset Password</h4>
            <label htmlFor='email'>Email</label>
            <input
                name='email'
                id='email'
                type="email"
                placeholder="Enter your email"
                className="form-control mb-3"
                value={email}
                onChange={handleEmailChange}
                required
            />
            <button className="btn btn-primary w-100" onClick={() => linkHandler()}>Send Reset Link</button>
            <p className="mt-3 text-center text-primary" role='button' onClick={handleBackToLoginClick}>Back to Login</p>
        </div>
    );
}

export default ForgotPassword;
