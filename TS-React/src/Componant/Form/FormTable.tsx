import { Pencil, Trash } from "lucide-react";
import React from "react";

interface FormCheck {
  fname: string;
  lname: string;
  email: string;
  number: number | string;
}

interface FormTableProps {
  userData: FormCheck[];
  edithandler: (data: FormCheck, index1: number | null) => void;
  deleteHandler: (index: number) => void;
}

const FormTable: React.FC<FormTableProps> = ({
  userData,
  edithandler,
  deleteHandler,
}) => {
  return (
    <table className="table w-75 m-auto">
      <thead>
        <tr>
          <th scope="col">Id</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Number</th>
          <th scope="col">Delete</th>
          <th scope="col">Edit</th>
        </tr>
      </thead>
      <tbody>
        {userData?.map((e, i) => {
          return (
            <tr key={i}>
              <th scope="row">{i + 1}</th>
              <td>{e.fname + " " + e.lname}</td>
              <td>{e.email}</td>
              <td>{e.number}</td>
              <td>
                <Trash
                  role="button"
                  color="red"
                  onClick={() => deleteHandler(i)}
                />
              </td>
              <td>
                <Pencil
                  role="button"
                  color="blue"
                  onClick={() => edithandler(e, i)}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default FormTable;
