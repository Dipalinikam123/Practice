import React, { useContext } from "react";
import { ContextProvider, Product } from "./UseContextState";
import { CardCom } from "./CardCom";


interface apiDatasInte {
  apiDatas: Product[];
}
export const DisplayPage = () => {
  const apiDatas = useContext(ContextProvider);
  console.log("---kfksjfis", apiDatas);
  return (
    <div className="container">
      <div className="row ">
        {apiDatas?.apiData?.map((e, i) => {
          return (
            <div key={i} className=" col-xs-12 col-md-6 col-lg-4 col-xl-3  my-2">
              <CardCom  data={e} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
