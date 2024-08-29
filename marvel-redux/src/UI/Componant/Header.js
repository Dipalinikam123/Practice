import React, { useEffect, useState } from 'react'
import logo from "../../assets/Images/icon-mu-shield.png"
import "./Header.css"
import Register from '../Modal/Register';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
export default function Header({ modal, toggle }) {

    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });
    const [allUsers, setAllUsers] = useState([]);
    const [loginUser, setLoginUser] = useState({});
    const [flag, setFlag] = useState(false);
    const [errors, setErrors] = useState({})
    const navigate = useNavigate()

    useEffect(() => {
        // Fetch all users and login user from localStorage
        const storedUsersData = localStorage.getItem('usersData');
        if (storedUsersData) {
            setAllUsers(JSON.parse(storedUsersData));
        }

        const storedLoginUserData2 = localStorage.getItem('loginUser');
        if (storedLoginUserData2) {
            setLoginUser(JSON.parse(storedLoginUserData2));
        }
    }, [modal, flag, navigate]);

    //------------------- onchange -------------------

    const handleChange = (e, key) => {
        setUser({ ...user, [key]: e.target.value });
    };

    //---------------submit button-------------------
    const validate = () => {
        let errors = {};
        if (!user.firstName) errors.firstName = 'First name is required';
        if (!user.lastName) errors.lastName = 'Last name is required';
        if (!user.email) {
            errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(user.email)) {
            errors.email = 'Email address is invalid';
        }
        if (!user.password) errors.password = 'Password is required';
        if (user.password && user.password.length < 6) {
            errors.password = 'Password must be at least 6 characters long';
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
            handleSubmit();
        } else {
            setErrors(validationErrors);
        }

        // Check if user already exists
        const existingUser = allUsers.find(u => u.email === user.email);

        if (!existingUser) {
            // User does not exist, proceed with registration
            const updatedUsers = allUsers.filter(u => u.email !== user.email);
            setAllUsers([...updatedUsers, user]);
            localStorage.setItem('usersData', JSON.stringify([...updatedUsers, user]));
            localStorage.setItem('loginUser', JSON.stringify({ firstName: user.firstName, email: user.email, password: user.password }));

            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
            toggle();
        } else {
            // User already exists, redirect to home
            alert("you Have Already Register")
            navigate('/login');
            setUser({
                firstName: "",
                lastName: "",
                email: "",
                password: "",
            });
            toggle()
        }
    };


    //---------------log out-------------------
    const logOutHandler = () => {
        setLoginUser({});
        localStorage.setItem('loginUser', JSON.stringify({}));
        setFlag(false);
    };


    console.log("---logn", loginUser)
    return (
        <>
            <Register modal={modal} toggle={toggle} user={user} handleChange={handleChange} handleSubmit={handleSubmit} errors={errors} />
            <div className='bg-dark text-light w-100 '>
                <div className="container">
                    <div className="row">
                        <div className="col pt-2">
                            <div className='d-none d-md-block'>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7" className="small-svg me-2"><path fillRule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"></path></svg>
                                {Object.keys(loginUser).length === 0 ? <span role='button' onClick={toggle}>User</span> : <span role='button' onClick={() => setFlag(!flag)}>{loginUser.firstName}</span>}
                                {
                                    flag && <div className=' animate__animated animate__fadeIn border rounded  px-2 mt-2 position-absolute top-2 bg-black' role='button' onClick={logOutHandler}>LogOut</div>
                                }
                            </div>
                            {/* --------offcanvas---------- */}

                            <button className="btn btn-dark d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i class="bi bi-three-dots-vertical"></i>
                            </button>
                            <div
                                className="offcanvas offcanvas-start d-md-none"
                                tabIndex="-1"
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header d-md-none">
                                    <h5 id="offcanvasRightLabel">Offcanvas right</h5>
                                    <button
                                        type="button"
                                        className="btn-close text-reset "
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="offcanvas-body bg-light h-50 bg-dark text-light">
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/')}>Home</p>
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/comic')}>Comic</p>
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/about')}>About</p>
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/contact')}>Contact</p>
                                    <div className=''>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 65.6 66.7" className="small-svg me-2"><path fillRule="evenodd" d="M59.5 15.1L53 51.4c0 .4-.3.6-.6.6h-6.5c-.3 0-.6-.2-.8-.6l-8.8-24.7H36l-4.3 24.7c-.1.3-.3.6-.6.6H25c-.3 0-.6-.2-.5-.6l6.6-37.3c.1-.3.3-.6.6-.6h6.4c.5 0 .7.2.8.6l8.8 24.7h.3l5.5-30.4C47.9 3.7 40.6.9 32.7.9 14.7.9.2 15.5.2 33.4c0 8.8 3.5 16.7 9.1 22.5l7.3-41.7c.1-.3.3-.6.6-.6H24c.3 0 .5.2.5.6l-8.3 47.2c4.8 2.8 10.4 4.5 16.4 4.5 17.9 0 32.5-14.5 32.5-32.5 0-6.8-2.1-13.1-5.6-18.3z"></path></svg>
                                        {Object.keys(loginUser).length === 0 ? <span role='button'  data-bs-dismiss="offcanvas" onClick={toggle}>User</span> : <span role='button' onClick={() => setFlag(!flag)}>{loginUser.firstName}</span>}
                                        {
                                            flag && <div className=' animate__animated animate__fadeIn border rounded  px-2 mt-2 position-absolute top-2 bg-black' role='button' onClick={logOutHandler}>LogOut</div>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <span className="icon--svg icon--svg mvl-animated-logo" aria-hidden="true"><svg width="130" height="52" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect fill="#EC1D24" width="100%" height="100%"></rect><path fill="#FEFEFE" d="M126.222 40.059v7.906H111.58V4h7.885v36.059h6.757zm-62.564-14.5c-.61.294-1.248.44-1.87.442v-14.14h.04c.622-.005 5.264.184 5.264 6.993 0 3.559-1.58 5.804-3.434 6.705zM40.55 34.24l2.183-18.799 2.265 18.799H40.55zm69.655-22.215V4.007H87.879l-3.675 26.779-3.63-26.78h-8.052l.901 7.15c-.928-1.832-4.224-7.15-11.48-7.15-.047-.002-8.06 0-8.06 0l-.031 39.032-5.868-39.031-10.545-.005-6.072 40.44.002-40.435H21.278L17.64 26.724 14.096 4.006H4v43.966h7.95V26.78l3.618 21.192h4.226l3.565-21.192v21.192h15.327l.928-6.762h6.17l.927 6.762 15.047.008h.01v-.008h.02V33.702l1.845-.27 3.817 14.55h7.784l-.002-.01h.022l-5.011-17.048c2.538-1.88 5.406-6.644 4.643-11.203v-.002C74.894 19.777 79.615 48 79.615 48l9.256-.027 6.327-39.85v39.85h15.007v-7.908h-7.124v-10.08h7.124v-8.03h-7.124v-9.931h7.124z"></path><path fill="#EC1D24" d="M0 0h30v52H0z"></path><path fill="#FEFEFE" d="M31.5 48V4H21.291l-3.64 22.735L14.102 4H4v44h8V26.792L15.577 48h4.229l3.568-21.208V48z"></path></svg></span>
                        </div>
                        <div className="col text-sm-end">
                            <div className='d-lg-flex justify-content-end w-100 d-none d-lg-block'>
                                <img src={logo} alt="shield-logo" className='shield-img mt-2 me-2' />
                                <div className="mt-1">
                                    <span className='font-size'>MARVEL UNLIMITED</span>
                                    <p className='font-size-2 '>SUBSCRIBE</p>
                                </div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor"
                                className="bi bi-search d-lg-none mt-3 ms-4" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                            </svg>
                            {/* <button className='d-lg-none  mt-2'><i className="bi bi-search"></i></button> */}
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
