// App.tsx
import "bootstrap/dist/css/bootstrap.min.css"
import React from 'react';
import './App.css';
import ButtonFun from './Componant/ButtonFun';
import Counter from './Componant/Counter';
import ApiCom from './Componant/ApiComp';
import FormComp from './Componant/Form/FormComp';

const App: React.FC = () => {
  return (
    <div className="App" style={{ display: "flex", justifyContent: "center", alignItems:"center", marginTop: "50px" }}>
      {/* <Counter /> */}
      {/* <ButtonFun text="Click me" onClick={()=>alert("hello")}/> */}
      {/* <ApiCom/> */}
      <FormComp/>
    </div>
  );
};

export default App;
