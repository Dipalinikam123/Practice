import logo from './logo.svg';
import './App.css';
import Counter from '../../test-cases/src/Practice/Counter';
import ClassComp from '../../test-cases/src/Practice/ClassComp';
import ClickEvent from '../../test-cases/src/Practice/ClickEvent';
import FormComponant from '../../test-cases/src/Practice/FormComponant';
import FunctionalMethod from '../../test-cases/src/Practice/FunctionalMethod';
import MultipleElement from './Practice/MultipleElement';
import RegisterForm from './Practice/UI/RegisterForm';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="">
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
     
    </div>
  );
}

export default App;
