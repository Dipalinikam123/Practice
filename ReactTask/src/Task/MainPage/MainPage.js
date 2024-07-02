import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';
import ModalForm from './Modal/ModalForm';
import { Plus } from 'lucide-react';
import UserCard from './UserCard';
import { HeaderAuth, UseErrorHandlingHook } from '../CustomHook/UseErrorHandlingHook';


const initialData = {
    name: "",
    email: "",
    gender: "male",
    status: "active",
};
export default function MainPage() {

    const [userData, setUserData] = useState([])
    const [user, setUser] = useState(initialData);

    const [refreshFlag, setRefreshFlag] = useState(true);

    const [buttonFlag, setButtonFlag] = useState(true);

    const [modal, setModal] = useState(false);

    const [validated, setValidated] = useState(false);

    const [isLoading, setLoading] = useState(true)

    const navigate = useNavigate()

    // ----------------------- Loading---------------------------

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 2000);

    }, [userData]);

    // ----------------------- Get User's Details------------------------

    useEffect(() => {
        axios({
            method: "get",
            url: "https://gorest.co.in/public/v2/users",
            headers: HeaderAuth,
        }).then((res) => {
            console.log("-----get user res", res);
            setUserData(res?.data)
        }).catch((err) => {
            console.log("-----err", err);
            UseErrorHandlingHook(err)
        })
    }, [modal, refreshFlag])
    console.log("---userData---", userData);

    // ----------------------- Fetch Data Function------------------------

    const refreshtToggle = () => setRefreshFlag(!refreshFlag);

    // ----------------------- Loading message ------------------------

    const renderLoadingMessage = () => <div className="loader-container "><div className="loader"></div></div>
    const renderNoPostMessage = () => <h1>User Not Found ....!</h1>;

    // ----------------------- redirect on single user------------------------

    const redirect = (id) => {
        navigate(`/user-details/${id}`)
    }

    // ----------------------- Form Modal Open/close Function------------------------

    const toggle = () => {
        setModal(!modal);
        setUser(initialData)
        setButtonFlag(true)
        setValidated(false)
    }

    // ----------------------- Add User Function------------------------

    const submitHandeler = (event) => {
        event.preventDefault()
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (user?.name === "" || user?.email === "" || !emailRegex.test(user?.email)) {

            const form = event.currentTarget;
            if (form.checkValidity() === false) {
                event.preventDefault();
                event.stopPropagation();
            }
            setValidated(true);


            toast.warn("Field's Are Not Valid", {
                autoClose: 1000,
            })
        }

        else {
            axios({
                method: "post",
                url: `https://gorest.co.in/public/v2/users`,
                headers: HeaderAuth,
                data: user
            }).then((res) => {
                console.log("----form res--", res);
                toast.success("SuccessFully Add", {
                    autoClose: 1000,
                })
                toggle()
                setUser(initialData)

            }).catch((err) => {
                console.log("----form err--", err);
                UseErrorHandlingHook(err)
            })
        }

    }

    // ----------------------- Edit User Function------------------------

    const editHandler = (data) => {
        console.log("--edit--data", data);
        // setIndex(data?.id)   
        toggle()
        setUser(data)
        setButtonFlag(false)

    }

    // ----------------------- Delete User Function------------------------

    const deleteHandler = (id) => {
        axios({
            method: "delete",
            url: `https://gorest.co.in/public/v2/users/${id}`,
            headers: HeaderAuth,
        }).then((res) => {
            console.log("-----delete res", res);
            toast.success("successfully deleted...!", {
                autoClose: 1000,
            })
            refreshtToggle()

        }).catch((err) => {
            console.log("-----err", err);
            UseErrorHandlingHook(err)
        })
    }

    // ----------------------- Update User Fuction ------------------------

    const updateHandler = () => {
        console.log("--newData--", user);
        axios({
            method: "put",
            url: `https://gorest.co.in/public/v2/users/${user?.id}`,
            headers: HeaderAuth,
            data: user,
        }).then((res) => {
            console.log("----update data res", res);
            toast.success("SuccessFully Updated", {
                autoClose: 1000,
            })
            refreshtToggle()
            setButtonFlag(true)
            toggle()
        }).catch((err) => {
            console.log("-----err", err);
            UseErrorHandlingHook(err)
        })
    }

    return (
        <>
            <ModalForm toggle={toggle} modal={modal} user={user} setUser={setUser} submitHandeler={submitHandeler} validated={validated} updateHandler={updateHandler} buttonFlag={buttonFlag} />
            <div className=' p-5 w-100'>
                <div className='d-flex justify-content-end me-4'>
                    <button type='button' className='bg-danger text-light border p-2 rounded ' onClick={toggle}><Plus /></button>
                </div>
                <div className='d-flex flex-wrap gap-4 justify-content-center align-items-center pt-5'>
                    {
                        isLoading ? renderLoadingMessage() :
                            userData?.length === 0 ? renderNoPostMessage() : (userData?.map((e, i) => {
                                return <UserCard key={i} data={e} redirect={redirect} editHandler={editHandler} deleteHandler={deleteHandler} />
                            })
                            )
                    }
                </div>
            </div>
        </>

    )
}
