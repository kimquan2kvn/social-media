import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../actions/AuthActions";
import Logo from "../../img/logo.png";
import "./Auth.css";

function Auth() {
  const dispath= useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  
  const [isSignUp, setIsSignUp] = useState(false);
  
  const [confirmPass, setConfirmPass] = useState(true)

  const initialState = {
    firstname: "",
    lastname:"",
    username:"",
    password:"",
    confirmpass: "",
  }


  const [data, setData] = useState(initialState)

  // Reset Form
  const resetForm = () => {
    setData(initialState);
    setConfirmPass(confirmPass);
  }

  // Handle Change in input
  const handleChange = (e) => {
    setData({...data,[e.target.name]:e.target.value})
    
  }

  // Form Submit
  const handleSubmit = (e) => {
    setConfirmPass(true);
    e.preventDefault()
    if(isSignUp) {
        (data.password === data.confirmpass) ? dispath(signUp(data)) : setConfirmPass(false)
        
    } else {
        dispath(logIn(data))
    }
  }

  return (
    <div className="Auth">
      {/* Left Side */}
      <div className="auth-left">
        <img src={Logo} alt="" />
        <div className="webname">
          <h1>Twitter</h1>
          <h6>Explore the ideas throughout the world</h6>
        </div>
      </div>
      {/* Right Side */}
      <div className="auth-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Login"}</h3>
          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              className="infoInput"
              name="username"
              placeholder="Username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              className="infoInput"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                className="infoInput"
                name="confirmpass"
                placeholder="Confirm Password"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
            <span style={{
                color:"red",
                fontSize:"12px",
                alignSelf:"flex-end",
                marginRight: "5px",
                display: confirmPass ? "none": "block"
            }}>
                *Confirm password is not same
            </span>

          <div className="sign-up">
            <div>
              <span style={{ fontSize: "12px", cursor:"pointer"}} onClick={()=>{setIsSignUp((prev)=> !prev); resetForm()}}>
                {isSignUp?"Already have an account. Login!":"Don't have an account Sign up"}
              </span>
            </div>
            <button className="button infoButton" type="Submit" disabled={loading}>
              {loading?"Loading...": (isSignUp ? "Sign Up": "Log In")}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


export default Auth;
