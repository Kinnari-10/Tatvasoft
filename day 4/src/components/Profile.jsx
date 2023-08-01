import { NavLink } from "react-router-dom";
import React from "react";
import { Button,Tab,Tabs,TextField } from "@material-ui/core";
import {styles} from "./style";

export const Profile=()=> {
  const classes= styles();
  return (
    <div>
      <h1 className={classes.wrapper}>
        Profile component<NavLink to="/user">User</NavLink><br></br>
        <Button variant="contained" color="primary" size="medium" className="click-btn" classes={{}}>
          Click me!
        </Button>
        <button>normal</button>
        <TextField className="input-element" />
        <input />
        <Tabs>
          <Tab classes={{selected:"selected-tab"}}>Hello</Tab>
          <Tab>Hello felo 2</Tab>
        </Tabs>
          
      
      </h1>
    </div>
  );
};
