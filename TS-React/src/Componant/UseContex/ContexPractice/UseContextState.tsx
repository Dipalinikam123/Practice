import axios from "axios";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export interface Product {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}
interface ContextP {
  apiData: Product[];
}
interface ContextProviderProps {
  children: ReactNode;
}

export const ContextProvider = createContext<ContextP | null>(null);

const UseContextState: React.FC<ContextProviderProps> = (props) => {
  const [apiData, setApiData] = useState<Product[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios({
          method: "get",
          url: "https://fakestoreapi.com/products",
        });
        setApiData(res?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  console.log("-----", apiData);
  return (
    <ContextProvider.Provider value={{ apiData }}>
      {props.children}
    </ContextProvider.Provider>
  );
};

export default UseContextState;
