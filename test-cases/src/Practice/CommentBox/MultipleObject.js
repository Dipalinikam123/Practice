import React, { useState } from 'react'


const initilState={
    name:"",
    email:"",
    address:{
        state:[
            {
                stateName:"",
                pincode:"",
                country:""
            },
            {
                houseNo:"",
                streetNo:""
            }
        ]
    },
    mobileNo:""

}
export default function MultipleObject() {

    const [inpuField, setInputField] = useState(initilState)
  return (
    <div>
         <div>
            <label htmlFor='name'>Name</label>
            <input type='text' value={inpuField.name}  placeholder='Enter Your Name' id='name'/>
        </div>
        <div>
            <label htmlFor='email'>Email</label>
            <input type='text' value={inpuField.email}  placeholder='Enter Your Email' id='email'/>
        </div>
        <div>
            <label htmlFor='stateName'>State Name</label>
            <input type='text' value={inpuField.address.state[0].stateName}  placeholder='Enter Your State Name' id='stateName'/>
        </div>
        <div>
            <label htmlFor='pincode'>Pincode</label>
            <input type='number' value={inpuField.address.state[0].pincode}  placeholder='Enter Your pincode' id='pincode'/>
        </div>
        <div>
            <label htmlFor='country'>Country</label>
            <input type='text' value={inpuField.address.state[0].country}  placeholder='Enter your country Name' id='country'/>
        </div>
        <div>
            <label htmlFor='houseno'>House Number</label>
            <input type='number' value={inpuField.address.state[1].houseNo}  placeholder='Enter your House Number' id='houseno'/>
        </div>
        <div>
            <label htmlFor='streetno'>Street Number</label>
            <input type='number' value={inpuField.address.state[1].stateName}  placeholder='Enter Street Number' id='streetno'/>
        </div>
       
    </div>
  )
}
