import { NavLink } from "react-router-dom";
import React from "react";
import classes from "./Profile.module.css";


export const Profile=()=> {
  return (
    <div>
      <h1 className={classes.heading}>
        Profile component<NavLink to="/user">User</NavLink>
      </h1>
    </div>
  );
};
