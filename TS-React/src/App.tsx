// App.tsx
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import "./index.css";
import ButtonFun from "./Componant/Practice/ButtonFun";
import Counter from "./Componant/Practice/Counter";
import ApiCom from "./Componant/Practice/ApiComp";
import FormComp from "./Componant/Form/FormComp";
import Contex from "./Componant/UseContex/Contex";
import CounterContex from "./Componant/UseContex/CounterContex";
import { ToDo } from "./Componant/TODO/ToDo";
import UseContextState from "./Componant/UseContex/ContexPractice/UseContextState";
import { DisplayPage } from "./Componant/UseContex/ContexPractice/DisplayPage";

const App: React.FC = () => {
  return (
    <div
      className="d-flex flex-column align-items-center mt-5" >
      {/* <Counter /> */}
      {/* <ButtonFun text="Click me" onClick={()=>alert("hello")}/> */}
      {/* <ApiCom/> */}
      {/* <FormComp/> */}
      {/* ================ */}
      {/* <Contex>
        <CounterContex />
      </Contex> */}

      {/* <ToDo/> */}
      <UseContextState>

       
        <DisplayPage/>
        </UseContextState>
      
    </div>
  );
};

export default App;
