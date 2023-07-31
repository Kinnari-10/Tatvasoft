import { NavLink } from "react-router-dom";
import React from "react";
import logo from "../src/assets/logo.svg"

export const User = ({ name, age }) => {
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
        </h1>
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
