import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../src/assets/logo.svg"
import { useState } from "react";
import { Button } from "@material-ui/core";


export const User = ({ name, age }) => {
  const [x,setX] = useState(5)
  const [y,setY] = useState(10)

  return (
    <div className="User-wrapper">
        <h1>
        <center>
            This is User Component
            <br />
            {name} is age of {age}
            <br /> 
            <NavLink to="/">Home</NavLink>
            <br />
        </center>
        </h1><br></br>
        {x}
        
        <Button variant="contained" color="primary" size="medium" className="click-btn" classes={{}} onClick={()=>setX(x+1)}>increment</Button><br></br>
        {y}
        <Button variant="contained" color="primary" size="medium" className="click-btn" classes={{}} onClick={()=>setY(y-1)}>decrement</Button>
        <div>User component</div>
        <img src={logo} alt="img" />
    </div>
  );
};

export const Home = () => {
  return (
    <h1>
      <center>
        This is Home Component. <br />
        <NavLink to="/user">user</NavLink><br></br>
        <NavLink to="/profile">Profile</NavLink>

      </center>
    </h1>
  );
};
