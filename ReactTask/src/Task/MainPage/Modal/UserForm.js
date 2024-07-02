import React, { useState } from 'react';



export default function UserForm({ user, setUser, submitHandeler, validated, buttonFlag, updateHandler }) {

    console.log("---user----", user);

    // ----------------- Switch Button -----------------------

    const [isActive, setIsActive] = useState(user?.status === 'active');
    console.log("isActive----", isActive);

    const handleStatusChange = () => {
        setIsActive(!isActive);
        console.log("onclick isActive----", isActive);

        setUser({ ...user, status: isActive ? 'inactive' : 'active' });
    };


    return (
        <>
            <form className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`} noValidate>
                <div className="col-md-12 position-relative">
                    <lable htmlFor="validationTooltip01" className="form-label">Name</lable>
                    <input type="text" className="form-control " id="validationTooltip01" placeholder='Enter Your Name'
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e?.target?.value })}
                        required />

                    <div className="invalid-tooltip">
                        Please provide Name.
                    </div>
                </div>

                <div className="col-md-12 position-relative">
                    <label htmlFor="validationTooltip02" className="form-label">Email</label>
                    <input type="text" className="form-control" id="validationTooltip02" placeholder='Enter Your Email'
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e?.target?.value })}
                        required />

                    <div className="invalid-tooltip">
                        Please provide a Email.
                    </div>
                </div>

                <label>Gender</label>
                <div className='d-flex gap-3'>
                    <div className="form-check mb-3">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="exampleRadios1"
                            value="male"
                            checked={user.gender === "male"}
                            onChange={(e) => setUser({ ...user, gender: e?.target?.value })}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios1">
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="exampleRadios2"
                            value="female"
                            checked={user.gender === "female"}
                            onChange={(e) => setUser({ ...user, gender: e?.target?.value })}
                        />
                        <label className="form-check-label" htmlFor="exampleRadios2">
                            Female
                        </label>
                    </div>
                </div>


                <div className="form-check form-switch mb-3">
                    <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
                        {isActive ? 'Active' : 'Inactive'}
                    </label>
                    <input
                        className="form-check-input"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckChecked"
                        value={user?.status}
                        checked={isActive}
                        onChange={handleStatusChange}
                    />
                </div>
            </form>
            <div className='d-flex justify-content-center'>
                {
                    buttonFlag ? <button type="submit" className="btn btn-danger w-75" onClick={(e) => submitHandeler(e)}>Submit</button> :
                                 <button type="submit" className="btn btn-danger w-75" onClick={() => updateHandler()}>update</button>
                }
            </div>
        </>

    );
}


















