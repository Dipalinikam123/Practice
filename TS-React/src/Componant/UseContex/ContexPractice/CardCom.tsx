import React from "react";
import { Product } from "./UseContextState";

interface CardComProps {
  data: Product;
}
export const CardCom: React.FC<CardComProps> = ({ data }) => {
  return (
    <div className=" card" style={{ width: "18rem" }}>
      <img className="card-img-top aspect-square" src={data?.image} alt="Card image cap" />
      <div className="card-body ">
        <h5 className="card-title text-truncate">Title: {data?.title}</h5>
        <p className="card-text text-truncate">Description: {data?.description}</p>
        <p>Category: {data?.category}</p>
        <p>Price: {data?.price}</p>
      </div>
    </div>
  );
};
