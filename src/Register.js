import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './login.css';


const Register = () => {
 const [userName,setUserName]=useState();
 const [password,setPassword]=useState();
const navigate=useNavigate();

 const handleInput =()=>{

    navigate('/');
 }

  return (
    <div>
      <form className="login-container">
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="UserName"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button onClick={handleInput}>Register</button>
      
      </form>
    </div>
  );
};

export default Register;
