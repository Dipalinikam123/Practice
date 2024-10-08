import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormFeedback, ListGroup, ListGroupItem } from 'reactstrap';

const RegisterForm = ({ updateProfile, isEditing, updateUser,toggle}) => {
    const [formData, setFormData] = useState(updateProfile);
    useEffect(() => {
        setFormData(updateProfile)
    }, [updateProfile]);

    const [currentHobby, setCurrentHobby] = useState(''); // For adding new hobbies
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleHobbyChange = (e) => {
        setCurrentHobby(e.target.value);
    };

    const addHobby = () => {
        if (currentHobby && !formData?.hobby.includes(currentHobby)) {
            setFormData({ ...formData, hobby: [...formData?.hobby, currentHobby] });
            setCurrentHobby(''); // Clear the input field
        }


    };

    const removeHobby = (hobby) => {
        setFormData({ ...formData, hobby: formData?.hobby.filter(h => h !== hobby) });
    };

    const validateEmail = (email) => /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email);

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = {};

        if (!formData?.firstName || formData?.firstName.length > 15) {
            validationErrors.firstName = 'First Name is required and must be 15 characters or less.';
        }
        if (!isEditing && !validateEmail(formData?.email)) {
            validationErrors.email = 'Invalid email format.';
        }
        if (!isEditing && formData?.password.length < 6) {
            validationErrors.password = 'Password must be at least 6 characters.';
        }
        if (!formData?.dob) {
            validationErrors.dob = 'Date of birth is required.';
        }
        if (!formData?.gender) {
            validationErrors.gender = 'Gender is required.';
        }

        if (Object.keys(validationErrors).length) {
            setErrors(validationErrors);
        } else {
            setErrors({});

            axios({
                method: 'post',
                url: 'https://backendproject-1ezp.onrender.com/auth/sign-up',
                data: formData
            }).then((res) => {
                console.log("--res", res)
                localStorage.setItem("token", JSON.stringify(res?.data?.token))
                setFormData(updateProfile)
                toggle()
            }).catch((err) => {
                console.log("----errr", err)
                if (err.response.data.message === "E11000 duplicate key error collection: test.users index: email_1 dup key: { email: \"abc@gmail.com\" }") {
                    alert("----User Already Register-----")
                }
            })

            // console.log("---ffddfg",formData)
        }
    };
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const yyyy = date.getFullYear();
        const mm = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-based
        const dd = String(date.getDate()).padStart(2, '0');
        return `${yyyy}-${mm}-${dd}`;
    };  
    return (
        <Form className='p-3'>
            <FormGroup>
                <Label for="firstName">First Name</Label>
                <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    maxLength="15"
                    value={formData?.firstName}
                    onChange={handleChange}
                    invalid={!!errors.firstName}
                />
                <FormFeedback>{errors.firstName}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="lastName">Last Name</Label>
                <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    maxLength="15"
                    value={formData?.lastName}
                    onChange={handleChange}
                />
            </FormGroup>
            {!isEditing && (
                <>

                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            value={formData?.email}
                            onChange={handleChange}
                            invalid={!!errors.email}
                        />
                        <FormFeedback>{errors.email}</FormFeedback>
                    </FormGroup>

                    <FormGroup>
                        <Label for="password">Password</Label>
                        <Input
                            type="password"
                            name="password"
                            id="password"
                            minLength="6"
                            value={formData?.password}
                            onChange={handleChange}
                            invalid={!!errors.password}
                        />
                        <FormFeedback>{errors.password}</FormFeedback>
                    </FormGroup>
                </>
            )}
            <FormGroup>
                <Label for="dob">Date of Birth</Label>
                <Input
                    type="date"
                    name="dob"
                    id="dob"
                    value={formatDate(formData?.dob)}
                    onChange={handleChange}
                    invalid={!!errors.dob}
                />
                <FormFeedback>{errors.dob}</FormFeedback>
            </FormGroup>

            <FormGroup>
                <Label for="gender">Gender</Label>
                <div>
                    {['male', 'female', 'other'].map((option) => (
                        <FormGroup check inline key={option}>
                            <Label check className='text-capitalize'> {option} </Label>
                            <Input
                                type="radio"
                                name="gender"
                                value={option}
                                checked={formData?.gender === option}
                                onChange={handleChange}
                            />
                        </FormGroup>
                    ))}
                </div>
                {errors.gender && <FormFeedback>{errors.gender}</FormFeedback>}
            </FormGroup>
            <FormGroup>
                <Label for="hobby">Hobbies</Label>
                <div className='d-flex align-items-center'>
                    <Input
                        type="text"
                        name="hobby"
                        id="hobby"
                        value={currentHobby}
                        onChange={handleHobbyChange}
                        onKeyDown={(e) => e.key === 'Enter' && (addHobby(), e.preventDefault())} // Add hobby on Enter
                        placeholder="Enter a hobby and press Enter"
                    />
                    <Button type="button" onClick={addHobby}>Add</Button>
                </div>
                <ListGroup className="mt-2" style={{ display: " -webkit-box" }}>
                    {formData?.hobby.map((hobby, index) => (
                        <ListGroupItem key={index} className='d-flex align-items-center'>
                            {hobby}
                            <Button close onClick={() => removeHobby(hobby)} />
                        </ListGroupItem>
                    ))}
                </ListGroup>
            </FormGroup>
            {
                !isEditing ? <Button type="submit" onClick={handleSubmit} color="primary">Submit</Button> : <Button type="submit" color="primary" onClick={(e) => updateUser(e, formData)}>Update</Button>
            }


        </Form>
    );
};

export default RegisterForm;
