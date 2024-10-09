import React, { useState } from 'react';
import { Modal, ModalHeader, ModalFooter } from 'reactstrap';
import LoginForm from '../form/LoginForm';
import axios from 'axios';
import ForgotPassword from '../form/ForgotPassword';

function Login({ modal, toggle, regToggle }) {
    const [isForgotPassword, setIsForgotPassword] = useState(false);
    const [email, setEmail] = useState('');
    const handleForgotPasswordClick = () => {
        setIsForgotPassword(true);
    };

    const handleBackToLoginClick = () => {
        setIsForgotPassword(false);
    };


    const handleEmailChange = (e) => {
        setEmail(e.target.value); // Update the state on every change
    };

    const linkHandler = () => {
        axios.post('https://backendproject-1ezp.onrender.com/auth/forget-password', { email })
            .then((res) => {
                console.log("--res", res);
                alert("Reset link sent to your email.");
            })
            .catch((err) => {
                console.log("----errr", err);
                alert(err.response?.data?.message || "An error occurred.");
            });
    };

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader toggle={toggle}>
                    {isForgotPassword ? 'Forgot Password' : 'Login'}
                </ModalHeader>

                {isForgotPassword ? (
                    <ForgotPassword linkHandler={linkHandler} handleBackToLoginClick={handleBackToLoginClick} email={email} handleEmailChange={handleEmailChange} />
                ) : (
                    <>
                        <LoginForm />
                        <p
                            role='button'
                            className='text-primary ms-2 text-decoration-underline'
                            onClick={handleForgotPasswordClick}
                        >
                            Forgot Password..?
                        </p>
                    </>
                )}

                <ModalFooter className='d-flex justify-content-center'>
                    {!isForgotPassword && (
                        <p>Don't Have an Account..? <span role='button' className='text-primary text-decoration-underline' onClick={regToggle}>Register Here...</span></p>
                    )}
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default Login;
