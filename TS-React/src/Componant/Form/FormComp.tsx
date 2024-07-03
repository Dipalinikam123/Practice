import React, { useEffect, useState } from "react";
import FormTable from "./FormTable";
import FormInput from "./FormInput";

interface FormCheck {
  fname: string;
  lname: string;
  email: string;
  password: string | number;
  number: number | string;
}
const initialState: FormCheck = {
  fname: "",
  lname: "",
  email: "",
  password: "",
  number: "",
};

const FormComp: React.FC = () => {
  const [user, setUser] = useState(initialState);
  const [userData, setUserData] = useState<FormCheck[]>([]);
  const [index, setIndex] = useState<number | null>(null);
  const [flag, setFlag] = useState<boolean>(true);

  useEffect(() => {
    const jsonData = localStorage.getItem("userdata");
    if (jsonData) {
      const normalData = JSON.parse(jsonData);
      setUserData(normalData);
    }
  }, []);

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement>,
    key: string | number
  ) => {
    setUser({ ...user, [key]: e?.target?.value });
  };

  const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setUserData([...userData, user]);
    localStorage.setItem("userdata", JSON.stringify([...userData, user]));
    setUser(initialState);
  };

  const deleteHandler = (index: number): void => {
    const deleteItem = userData.filter((e, i) => i !== index);
    setUserData(deleteItem);
    localStorage.setItem("userdata", JSON.stringify(deleteItem));
  };

  const edithandler = (data: FormCheck, index1: number | null): void => {
    setUser(data);
    setIndex(index1);
    setFlag(false);
  };
  const updateHandler = (): void => {
    if (index !== null ) {
      const updatedList = [...userData];
      updatedList[index] = user;  //1
      // updatedList.splice(index, 1, user); //2
   //------------------------------------------------------------
      // const updatedList= userData.map((e,i)=> i ===index ? user : e ) //3
      setUserData(updatedList);
      localStorage.setItem("userdata", JSON.stringify(updatedList));
      setUser(initialState);
      setIndex(null);
      setFlag(true);
    }
    
  };

  console.log("user", user);
  console.log("user------", userData);
  return (
    <div className="d-flex flex-column w-100">
      <div className="border border-1 w-25 p-4 m-auto mb-4">
        <h1>Form </h1>
        <FormInput user={user} flag={flag} changeHandler={changeHandler} submitHandler={submitHandler} updateHandler={updateHandler}/>
      </div>
    

      <FormTable
        userData={userData}
        edithandler={edithandler}
        deleteHandler={deleteHandler}
      />
    </div>
  );
};

export default FormComp;
