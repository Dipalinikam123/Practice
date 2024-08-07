

//  1. getBy 2. queryBy 3. findBy


import React from 'react'

export function GetByRole() {

    return (
        <div>
            <input type='text' id='userName' placeholder='Enter Name' />
            <input type='checkbox' id='skills' />
            <button>Submit</button>
        </div>
    )
}
export function GetAllByRole() {
    return (
        <div>
            <button>Submit</button>
            <button>Submit</button>
            <button>Submit</button>
            <button>Submit</button>

            <select data-testid="slect">
                <option>1</option>
                <option>2</option>
                <option>3</option>
            </select>
        </div>
    )
}
export function MultipleElement() {
    return (
        <div data-testid="multiple">
            <button>Clear</button>
            <button>Submit</button>
            <button>Update</button>
            <button>Remove</button>

            <label className='col-12'>Gender</label>
            <input type="radio" className="form-check-input" id="exfemale" />
            <label htmlFor="exfemale">Female</label>
            <input type="radio" className="form-check-input" id="exmale" name="gender" />
            <label htmlFor="exmale">Male</label>
        </div>
    )
}

export function GetLableByText() {

    return (
        <div>
            <label htmlFor="userName">Name</label>
            <input type='text' id='userName' placeholder='Enter Name' />
            <label htmlFor="skills">CheckBox</label>
            <input type='checkbox' id='skills' />
        </div>
    )
}
export function GetAllLableByText() {

    return (
        <div>
            <label htmlFor="userName1">Name</label>
            <input type='text' id='userName1' placeholder='Enter Name' defaultValue={"abcd"} />
            <label htmlFor="userName2">Name</label>
            <input type='text' id='userName2' placeholder='Enter Name' defaultValue={"abcd"} />
            <label htmlFor="userName3">Name</label>
            <input type='text' id='userName3' placeholder='Enter Name' defaultValue={"abcd"} />

            <label htmlFor="skills1">CheckBox</label>
            <input type='checkbox' id='skills1' defaultChecked={true} />
            <label htmlFor="skills2">CheckBox</label>
            <input type='checkbox' id='skills2' defaultChecked={true} />
            <label htmlFor="skills3">CheckBox</label>
            <input type='checkbox' id='skills3' defaultChecked={true} />
        </div>
    )
}

export function GetByPlaceholderName() {

    return (
        <>
            <input type='text' placeholder="Enter Your Name" />
        </>
    )
}
export function GetAllByPlaceholderName() {

    return (
        <>
            <input type='text' placeholder="Enter  Name" />
            <input type='text' placeholder="Enter  Name" />
            <input type='text' placeholder="Enter  Name" />
            <input type='text' placeholder="Enter  Name" />
        </>
    )
}
export function GetByText() { //used for elememt text

    return (
        <>
            <h1>Heading...</h1>
            <p className='paraStyle' id='p1'>Lorem ipsum dolor sit amet consectetur.</p>
            <button>Login</button>

            {/* ---------getAllByText */}
            <h1>Lorem, ipsum dolor.</h1>
            <h1>Lorem, ipsum dolor.</h1>
            <h1>Lorem, ipsum dolor.</h1>
        </>
    )
}
export function GetByTestId() { //used for elememt text

    return (
        <>
            <div data-testid="divtest">Lorem ipsum dolor sit amet.</div>
        </>
    )
}