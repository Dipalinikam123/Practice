import React, { useState } from 'react';
import './Contact.css'; // Import your custom CSS
import { FiLinkedin, FiMail } from 'react-icons/fi';

export default function Contact() {
    // Define state for form inputs and errors
    const [clientDetail, setClientDetail] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    // Handle input change
    const handleChange = (e) => {
        console.log("===e===", e)
        setClientDetail({
            ...clientDetail,
            [e.target.id]: e.target.value,
        });
    };

    // Validate form inputs
    const validate = () => {
        let validationErrors = {};
        const { name, email, message } = clientDetail;

        if (!name || name.length < 3) {
            validationErrors.name = 'Name must be at least 3 characters long';
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email || !emailRegex.test(email)) {
            validationErrors.email = 'Please enter a valid email address';
        }
        if (!message || message.length < 10) {
            validationErrors.message = 'Message must be at least 10 characters long';
        }

        return validationErrors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors); // Set errors if validation fails
        } else {
            // Form is valid, you can proceed to submit data
            console.log('Form Submitted', clientDetail);
            setErrors({}); // Clear errors
            // Optionally clear the form fields
            setClientDetail({ name: '', email: '', message: '' });
        }
    };

    return (
        <div className="container my-5">
            <h1 className="text-center mb-4">Contact Me</h1>

            <div className="row justify-content-center">
                <div className="col-12 col-md-7 contact-box">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                id="name"
                                placeholder="Your Name"
                                value={clientDetail.name}
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.name && <div className="invalid-feedback">{errors.name}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email address</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                placeholder="Your Email"
                                value={clientDetail.email}
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>
                        <div className="mb-3">
                            <label htmlFor="message" className="form-label">Message</label>
                            <textarea
                                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                                id="message"
                                rows="5"
                                placeholder="Your Message"
                                value={clientDetail.message}
                                onChange={(e) => handleChange(e)}
                            />
                            {errors.message && <div className="invalid-feedback">{errors.message}</div>}
                        </div>
                        <button type="submit" className="bg-btn border py-1 w-100">Send Message</button>
                    </form>
                       <h3 className='text-center mt-2'> OR</h3>
                    <div class="col d-flex justify-content-center gap-4">
                        <div className="box1">
                            <a href='https://dipalinikam0108@gmail.com' target="_blank" rel="noopener noreferrer"><FiMail size={22} className='bg-transparent' /></a>
                        </div>
                        <div className=" box1">

                            <a href='https://www.linkedin.com/in/dipali-nikam-9987a42b3' target="_blank" rel="noopener noreferrer"><FiLinkedin size={22} className='bg-transparent' /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
