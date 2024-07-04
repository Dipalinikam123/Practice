import React, { createContext, useState } from "react";

interface NameContextProps {
  value: number;
  setValue: (num: number) => void;
}

interface ContexProps {
  children: React.ReactNode;
}
export const NameContext = createContext<NameContextProps | null>(null);

const Contex: React.FC<ContexProps> = (props) => {
  const [value, setValue] = useState<number>(1);

  return (
    <NameContext.Provider value={{ value, setValue }}>
      {props.children}
    </NameContext.Provider>
  );
};

export default Contex;