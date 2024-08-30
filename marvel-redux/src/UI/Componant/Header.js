import React, { useEffect, useState } from 'react'
import logo from "../../assets/Images/icon-mu-shield.png"
import inlogo from "../../assets/svg/in-logo.svg"
import Mlogo from "../../assets/svg/logo.svg"
import search from "../../assets/svg/search.svg"
import "./Header.css"
import Register from '../Modal/Register';
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import { TfiClose } from "react-icons/tfi";

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
                    <div className="row align-items-center justify-content-between">
                        <div className="col pt-2">
                            <div className='d-none d-md-block'>
                                <img src={inlogo} width={19} height={19} className='bg-light rounded me-2'/>
                                {Object.keys(loginUser).length === 0 ? <span role='button' onClick={toggle}>User</span> : <span role='button' onClick={() => setFlag(!flag)}>{loginUser.firstName}</span>}
                                {
                                    flag && <div className=' animate__animated animate__fadeIn border rounded  px-2 mt-2 position-absolute top-2 bg-black' role='button' onClick={logOutHandler}>LogOut</div>
                                }
                            </div>
                            {/* --------offcanvas---------- */}

                            <button className="btn btn-dark d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                                <i className="bi bi-three-dots-vertical"></i>
                            </button>
                            <div
                                className="offcanvas offcanvas-start d-md-none"
                                tabIndex="-1"
                                id="offcanvasRight"
                                aria-labelledby="offcanvasRightLabel">
                                <div className="offcanvas-header d-md-none bg-dark">
                                    <img id="offcanvasRightLabel" className="icon--svg icon--svg mvl-animated-logo" aria-hidden="true" src={Mlogo}/>
                                    <a href="#" type="button"
                                        className="link-light"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    >
                                        <TfiClose className="fs-4  " />
                                    </a>
                                </div>
                                 {/* --------offcanvas end---------- */}

                                 {/* ----------------------menu--------------------- */}
                                <div className="offcanvas-body bg-light h-50 bg-dark text-light">
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/')}>Home</p>
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/comic')}>Comic</p>
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/about')}>About</p>
                                    <p role='button' data-bs-dismiss="offcanvas" onClick={() => navigate('/contact')}>Contact</p>
                                    <div className=''>
                                    <img src={inlogo} width={18} height={18} className='bg-light rounded me-2'/>
                                        {Object.keys(loginUser).length === 0 ? <span role='button' data-bs-dismiss="offcanvas" onClick={toggle}>User</span> : <span role='button' onClick={() => setFlag(!flag)}>{loginUser.firstName}</span>}
                                        {
                                            flag && <div className=' animate__animated animate__fadeIn border rounded  px-2 mt-2 position-absolute top-2 bg-black' role='button' onClick={logOutHandler}>LogOut</div>
                                        }
                                    </div>
                                </div>
                                 {/* ----------------------menu end--------------------- */}

                            </div>
                        </div>
                        <div className="col-6 text-center">
                            <span className="icon--svg icon--svg mvl-animated-logo" aria-hidden="true"><img src={Mlogo}/></span>
                        </div>
                        <div className="col text-md-end text-center">
                            <div className='d-lg-flex justify-content-end w-100 d-none d-lg-block'>
                                <img src={logo} alt="shield-logo" className='shield-img mt-2 me-2' />
                                <div className="mt-1">
                                    <span className='font-size'>MARVEL UNLIMITED</span>
                                    <p className='font-size-2 '>SUBSCRIBE</p>
                                </div>
                            </div>
                            <img src={search} width={18} height={18} className='d-lg-none ' />



                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}
