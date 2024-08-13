import logo from './logo.svg';
import './App.css';
import Counter from '../../test-cases/src/Practice/Counter';
import ClassComp from '../../test-cases/src/Practice/ClassComp';
// import ClickEvent from '../../test-cases/src/Practice/ClickEvent';
import FormComponant from '../../test-cases/src/Practice/FormComponant';
import FunctionalMethod from '../../test-cases/src/Practice/FunctionalMethod';
import MultipleElement from './Practice/MultipleElement';
import RegisterForm from './Practice/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentBox from './Practice/CommentBox/CommentBox';
import CommentList from './Practice/CommentBox/CommentList';
import { useState } from 'react';
import { GetByTitle } from './Practice/RTL/RTLQueried';
import { FindBy, QueryBy } from './Practice/RTL/TextMatch';
import { CallBackFun, ClickEvent, UserChangeEvent, UserClickEvent } from './Practice/RTL/UserEvent';
import {Props, FunctionalProps } from './Practice/RTL/Props';
import APICalling from './Practice/RTL/APICalling';

function App() {

  const [comments,setComments]=useState([])
  return (
    <div className="w-50 m-auto border p-3 mt-5">
      {/* <p>First React Test Case</p>
      <p>Purvi</p>
      <img title="React Image" src={logo} className="App-logo" alt="logo" />
      <Counter/> */}

      {/* <ClassComp/> */}
      {/* <ClickEvent/> */}
      {/* <FormComponant/> */}
      {/* <FunctionalMethod/> */}
      {/* <MultipleElement/> */}
      <RegisterForm/>
      {/* <Counter/> */}
      {/* <CommentBox setComments={setComments}/>
      <CommentList allComments={comments}/> */}
      {/* <GetByTitle/> */}
      {/* <QueryBy/> */}
      {/* <FindBy/> */}
      {/* <UserClickEvent/> */}
      {/* <UserChangeEvent/> */}
      {/* <Props name={"purvi"}/> */}
      {/* <FunctionalProps/> */}
      {/* <APICalling/> */}
      {/* <CallBackFun/> */}
     
    </div>
  );
}

export default App;
