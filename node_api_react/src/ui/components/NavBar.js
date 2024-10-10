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
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
export default function NavBar({ args,logModal,regModal,toggleLogModal,toggleRegModal,updateProfile,isEditing,updateUser}) {
   

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);



    return (
        <div>
            <Register modal={regModal} toggle={toggleRegModal} logToggle={toggleLogModal} updateProfile={updateProfile} isEditing={isEditing} updateUser={updateUser}/>
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
