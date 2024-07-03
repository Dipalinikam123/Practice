import React from "react";

interface FormCheck {
  fname: string;
  lname: string;
  email: string;
  number: number | string;
}

interface FormInput {
  user: FormCheck;
  submitHandler: (e: React.ChangeEvent<HTMLFormElement>) => void;
  updateHandler: () => void;
  changeHandeler: (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string | number
  ) => void;
  flag: boolean;
}

const FormInput: React.FC<FormInput> = ({
  user,
  submitHandler,
  changeHandeler,
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
          onChange={(e) => changeHandeler(e, "fname")}
          required
        />
        <input
          className="p-1 rounded-2 border"
          type="text"
          placeholder="Enter Your Last Name"
          value={user?.lname}
          required
          onChange={(e) => changeHandeler(e, "lname")}
        />
        <input
          className="p-1 rounded-2 border"
          type="email"
          placeholder="Enter Your Email"
          value={user?.email}
          required
          onChange={(e) => changeHandeler(e, "email")}
        />
        <input
          className="p-1 rounded-2 border"
          type="number"
          placeholder="Enter Your Mobile Number"
          value={user?.number}
          required
          onChange={(e) => changeHandeler(e, "number")}
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
