import React, { useState } from 'react';
import { Button, NavItem } from 'reactstrap';
import Register from '../modal/Register';
import Login from '../modal/Login';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavbarText,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default function NavBar({ args }) {
    const [regModal, setRegModal] = useState(false);
    const [logModal, setLogModal] = useState(false);
    // const [user, setUser] = useState([]);

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);


    const toggleRegModal = () => {
        setRegModal(!regModal);
        if (logModal) setLogModal(false); // Close login modal if it's open
    };

    const toggleLogModal = () => {
        setLogModal(!logModal);
        if (regModal) setRegModal(false); // Close register modal if it's open
    };


    return (
        <div>
            <Register modal={regModal} toggle={toggleRegModal} logToggle={toggleLogModal} />
            <Login modal={logModal} toggle={toggleLogModal} regToggle={toggleRegModal} />


            <div>
                <Navbar {...args} expand='lg' color='dark' dark={true}>
                    <NavbarBrand href="/">WatchOn</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="me-auto d-flex justify-content-center gap-5 align-items-center " navbar >
                            <NavItem>
                                <NavLink className='text-light text-decoration-none' to="/">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='text-light text-decoration-none' to="/get-all-user">Get All User</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className='text-light text-decoration-none' to="/user-profile">Profile</NavLink>
                            </NavItem>
                        </Nav>
                        <Button color="danger" onClick={toggleRegModal}>
                            Sign Up
                        </Button>

                    </Collapse>
                </Navbar>
            </div>


        </div>
    );
}
