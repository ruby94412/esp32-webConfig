import './App.css';
import {useState} from 'react';
import Navigation from "./components/Navigation";
import Content from './components/Content';
function App() {
  const [current, setCurrent] = useState();
  return (
    <div className="App">
      <Navigation
        current={current}
        setCurrent={setCurrent}
      />
      <Content current={current}/>
    </div>
  );
}

export default App;
