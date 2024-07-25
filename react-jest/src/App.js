import logo from './logo.svg';
import './App.css';
import Counter from './Practice/Counter';

function App() {
  return (
    <div className="App">
      <p>First React Test Case</p>
      <p>Purvi</p>
      <img title="React Image" src={logo} className="App-logo" alt="logo" />
      <Counter/>
    </div>
  );
}

export default App;
