import { NavLink } from "react-router-dom";
import React from "react";
import { useState } from "react";
import * as Yup from "yup"
import {Formik} from "formik"


export const User = ({ name, age }) => {
// const [email,setEmail]= useState("")
// const [password,setPassword]= useState("")
const [details,setDetails] = useState({
  email:"",
  password:""})

  const handleChange = (e, property)=>{
    setDetails({
      ...details,
      [property]: e.target.value
    })
  }
  const validationSchema = Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email is not valid!"),
    password: Yup.string().min(5,"Password must be more than 5 characters!").max(10,"password is not more than 10 characters")
  })

  // useEffect(()=>{
  //   console.log("email is updated")
  //   window.addEventListener("click",()=>{})
  //   return ()=>{
  //     window.removeEventListener("click",()=>{})
  //   }
  // })


  return (
    <>
    <Formik initialValues={{email:"", password:""}} validationSchema={validationSchema} onSubmit={(data)=>{alert(JSON.stringify(data))}}>
      {
        ({
          values,errors,handleChange,handleSubmit
        })=>{
          return(
            <form onSubmit={handleSubmit}>
            {/* <input name="email" value={details.email} onChange={(e)=>handleChange(e,"email")} /> */}
            <input name="email"  onChange={handleChange} /><br></br>
            {errors.email ? errors.email : ""}<br />
            <input name="password"  type="password" onChange={handleChange} /><br />
            {errors.password ? errors.password : ""}<br />
            

            {/* <input name="password" value={details.password} type="password" onChange={(e)=>handleChange(e,"password")} /> */}
            <button onClick={()=>window.alert(`Email is ${details.email} and Password is ${details.password}.`)}>
              Submit
            </button>
          
           </form>
          )
        }
      }
    </Formik>
   
    </>
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
