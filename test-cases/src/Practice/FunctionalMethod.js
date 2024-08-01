import React, { useState } from 'react'
import printHandler from './helper';

export default function FunctionalMethod() {
  const [data, setData] = useState("");

  const updateHandler = () => {
      setData("hello");
  };

  
  return (
      <div>
          <h1>Function Component Methods</h1>
          <button data-testid="btn1" onClick={updateHandler}>Update</button><br/>
          {data}
          <button onClick={printHandler}>Print</button>
      </div>
  );
}
