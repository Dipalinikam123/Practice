// components/RegisterForm.tsx
import React, { useState } from 'react';
import axios from "axios";
// import { useCookies } from 'react-cookie';

interface FormData {
  name: string;
  email: string;
  number: string;
  password: string;
  age: string;
}
interface FormData2 {
add: string;
city: string;
state: string;
pinCode: string;
}

const initialValues = {
  name: "",
  email: "",
  number: "",
  password: "",
  age: "",
};

const addressIntiValue = {
  add: "",
  city: "",
  state: "",
  pinCode: "",
};

interface Errors {
  name?: string;
  email?: string;
  password?: string;
  add?: string;
  city?: string;
  state?: string;
  pinCode?: string;
  server?: string;
}
const RegistrationForm: React.FC = () => {
  const [user, setUser] = useState<FormData>(initialValues);
  const [address, setAddress] = useState<FormData2>(addressIntiValue);
  const [errors, setErrors] = useState<Errors>({});
  // const [cookies, setCookies] = useCookies();

  const handleUserChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on change
  };

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!user.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@gmail\.com/.test(user.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!user.password) {
      newErrors.password = 'Password is required';
    }
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length) {
      setErrors(validationErrors);
    } else {
      const formData = { ...user, address };
      axios.post("http://localhost:9999/user/signUp", formData)
        .then((res) => {
          console.log("🚀 ~ submitHandler ~ res:", res);
          // Clear form on success
          setUser(initialValues);
          setAddress(addressIntiValue);
          setErrors({}); // Clear errors on successful submission
        })
        .catch((err) => {
          console.error("🚀 ~ submitHandler ~ err:", err);
        });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 text-white rounded-lg shadow-md">
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Name</label>
        <input
          type="text"
          name="name"
          placeholder='Enter Your Email'
          value={user.name}
          onChange={handleUserChange}
          className={`w-full px-2 border text-black ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.name && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          placeholder='Enter Your Email'
          value={user.email}
          onChange={handleUserChange}
          className={`w-full px-2 border text-black ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder='Enter Your Password'
          value={user.password}
          onChange={handleUserChange}
          className={`w-full px-2 border text-black ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded`}
        />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="number">Phone Number</label>
        <input
          type="text"
          name="number"
          placeholder='Enter Your Phone Number'
          value={user.number}
          onChange={handleUserChange}
          className={`w-full px-2 border text-black rounded`}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="age">Age</label>
        <input
          type="text"
          name="age"
          placeholder='Enter Your Age'
          value={user.age}
          onChange={handleUserChange}
          className={`w-full px-2 border text-black rounded`}
        />
      </div>
      
      <div className="mb-4">
        <label className="block mb-1" htmlFor="add">Address</label>
        <input
          type="text"
          name="add"
          placeholder='Enter Your Address'
          value={address.add}
          onChange={handleAddressChange}
          className={`w-full px-2 border text-black rounded`}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          placeholder='Enter Your City'
          value={address.city}
          onChange={handleAddressChange}
          className={`w-full px-2 border text-black rounded`}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="state">State</label>
        <input
          type="text"
          name="state"
          placeholder='Enter Your State'
          value={address.state}
          onChange={handleAddressChange}
          className={`w-full px-2 border text-black rounded`}
        />
      </div>
      <div className="mb-4">
        <label className="block mb-1" htmlFor="pinCode">Pin Code</label>
        <input
          type="text"
          name="pinCode"
          placeholder='Enter Your Pin Code'
          value={address.pinCode}
          onChange={handleAddressChange}
          className={`w-full px-2 border text-black rounded`}
        />
      </div>
      <button type="submit" className="w-full border text-white rounded-md py-2">
        Register
      </button>
    </form>
  );
};

export default RegistrationForm;
