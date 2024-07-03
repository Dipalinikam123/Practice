import axios from "axios";
import React, { useEffect, useState } from "react";

interface Apidata {
  title: string;
  description: string;
  category: string;
  price: number;
}

const ApiCom: React.FC = () => {
  const [data, setData] = useState<Apidata[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "https://fakestoreapi.com/products",
        });
        setData(res?.data);
        setIsLoading(!isLoading)
      } catch (error) {
        console.log("errorr", error);
      }
    };
    fetchData();
  }, []);
  console.log("---data---", data);

  return (
    <>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table style={{border:"1px solid black", margin:"5px 40px"}}>
          <thead>
            <tr >
              <th>Title</th>
              <th>Description</th>
              <th>Category</th>
              <th>Price</th>
            </tr>
            {data?.map((e, i) => {
              return (
                <tr>
                  <td>{e?.title}</td>
                  <td>{e?.description}</td>
                  <td>{e?.category}</td>
                  <td>{e?.price}</td>
                </tr>
              );
            })}
          </thead>
        </table>
      )}
    </>
  );
};

export default ApiCom;
