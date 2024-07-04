import React from "react";
import { FormCheck } from "./FormComp";



interface FormInputProps {
  user: FormCheck;
  submitHandler: (e: React.ChangeEvent<HTMLFormElement>) => void;
  updateHandler: () => void;
  changeHandler: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string | number
  ) => void;
  flag: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  user,
  submitHandler,
  changeHandler,
  flag,
  updateHandler,
}) => {
    
  return (
    <>
      <form onSubmit={submitHandler} className="d-flex flex-column gap-3 ">
        <input
          className="p-1 rounded-2 border"
          type="text"
          placeholder="Enter Your First Name"
          value={user?.fname}
          onChange={(e) => changeHandler(e, "fname")}
          required
        />
        <input
          className="p-1 rounded-2 border"
          type="text"
          placeholder="Enter Your Last Name"
          value={user?.lname}
          required
          onChange={(e) => changeHandler(e, "lname")}
        />
        <input
          className="p-1 rounded-2 border"
          type="email"
          placeholder="Enter Your Email"
          value={user?.email}
          required
          onChange={(e) => changeHandler(e, "email")}
        />
        <input
          className="p-1 rounded-2 border"
          type="password"
          placeholder="Enter Your Password"
          value={user?.password}
          required
          onChange={(e) => changeHandler(e, "password")}
        />
        <input
          className="p-1 rounded-2 border"
          type="number"
          placeholder="Enter Your Mobile Number"
          value={user?.number}
          required
          onChange={(e) => changeHandler(e, "number")}
        />
        <div className="m-auto">
          {flag ? (
            <button className="bg-primary text-light border py-1 px-4 rounded-2">
              Submit
            </button>
          ) : (
            <button
              className="bg-primary text-light border py-1 px-4 rounded-2"
              onClick={updateHandler}
            >
              Update
            </button>
          )}
        </div>
      </form>
    </>
  );
};

export default FormInput;
