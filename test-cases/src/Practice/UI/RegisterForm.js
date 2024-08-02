import React, { useState } from 'react';

export default function RegisterForm() {

    const [userdata, setUserData] = useState({
        fname: "",
        lname: "",
        gender: "",
        state: "Maharashtra",
    })
    console.log("---userData", userdata);

    const [userDetails, setUserDetails] = useState([])

    const submitHandler = (e) => {
        e.preventDefault()
        setUserDetails([...userDetails, userdata])
        setUserData({
            fname: "",
            lname: "",
            gender: "",
            state: "Maharashtra",
        })
    }

    console.log("userDetails====", userDetails);
    return (
        <>
            <h1 className='text-center'>RegisterForm</h1>
            <form className='container'>
                <div className='row justify-content-center border p-2'>
                    <div className='col-12 col-md-8 col-lg-6'>
                        <div className="form-group">
                            <label htmlFor="firstName">First Name</label>
                            <input value={userdata.fname} type="text" className="form-control" id="firstName" placeholder="First Name" onChange={(e) => setUserData({ ...userdata, fname: e?.target?.value })} />
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="lastName">Last Name</label>
                            <input value={userdata.lname} type="text" className="form-control" id="lastName" placeholder="Last Name" onChange={(e) => setUserData({ ...userdata, lname: e?.target?.value })} />
                        </div><br />
                        <div className="form-group">
                            <label className='col-12'>Gender</label>
                            <div>
                                <input checked={userdata.gender === "Female"} value="Female" type="radio" className="form-check-input" id="exfemale" name="gender" onChange={(e) => setUserData({ ...userdata, gender: e?.target?.value })} />
                                <label htmlFor="exfemale">Female</label>
                            </div>
                            <div>
                                <input checked={userdata.gender === "Male"} value="Male" type="radio" className="form-check-input" id="exmale" name="gender" onChange={(e) => setUserData({ ...userdata, gender: e?.target?.value })} />
                                <label htmlFor="exmale">Male</label>
                            </div>
                        </div><br />
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Select State</label>
                            <select className="form-control" id="exampleFormControlSelect1" value={userdata.state} onChange={(e) => setUserData({ ...userdata, state: e?.target?.value })}>
                                <option>Maharashtra</option>
                                <option>Gujrat</option>
                                <option>Madhya Pradesh</option>
                            </select>
                        </div><br />
                        <button type="submit" className="btn btn-primary" onClick={(e) => submitHandler(e)}>Submit</button>
                    </div>
                </div>
            </form>

            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Sr.</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Gender</th>
                        <th scope="col">State</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userDetails?.map((e, i) => {
                            return (
                                <tr key={i}>
                                    <th scope="row">{i+1}</th>
                                    <td>{e?.fname}</td>
                                    <td>{e?.lname}</td>
                                    <td>{e?.gender}</td>
                                    <td>{e?.state}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}
