import './App.css';
import { User } from './User';
import { Home } from './User';
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  const uname="menka";
  const arr=[10,20,30,40,50,60];
  const newArr=arr.filter((item)=>(item)!==60);
  
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User name={uname} age={42}  />} />

      </Routes>
      {newArr}
    </div>
    </BrowserRouter>
    
  );
}

export default App;
