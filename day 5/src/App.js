import { ThemeProvider, createTheme } from '@material-ui/core';
import './App.css';
import { User } from './User';
import { Home } from './User';
import {Profile} from './components/Profile';
import {BrowserRouter,Route,Routes} from "react-router-dom";


function App() {
  const uname="menka";
  const theme = createTheme(
    {
      palette:{
        primary:{
          main: "#d32f2f"
        }
      },
      shadows:[
        "none",
        "1px 1px gray"
      ]
    }
  )

  
  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
    <div className="App">
      <header>This is Header.</header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user" element={<User name={uname} age={42}  />} />
        <Route path="/profile" element={<Profile />} />
        
      </Routes>
      <footer>This is footer.</footer>
      
    </div>
    </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
