
import React, { useState } from 'react';

export const HOC = (Component) => {
  return function WrappedComponent() {
    const [amount, setAmount] = useState(0);

    const incFun = (x) => {
      setAmount(amount + x);
    };

    return (
      <>
        <Component number={amount} incFun={incFun} />;
      </>
    )
  };
}
