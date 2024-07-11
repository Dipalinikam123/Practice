
import React, { useEffect, useState } from 'react';

export const HOC = (Component) => {
  return function WrappedComponent(props) {
    const [amount, setAmount] = useState(0);

    const incFun = (x) => {
      setAmount(amount + x);
    };

    return (
      <>
      <h1>
        counting start
      </h1>
        <Component number={amount} incFun={incFun} {...props} />;
      </>
    )
  };
}
