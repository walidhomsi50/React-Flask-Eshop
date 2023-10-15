import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import './login.css';

const Login = () => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const adminUser = "user";
  const adminPass = "123";

  const handleInput = () => {
    if (userName === adminUser && password === adminPass) {
      navigate("/App");
    }else{
        alert('Incorrect UserName or Password');
    }
  };

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
        <button onClick={handleInput}>Login</button>
      </form>
    </div>
  );
};

export default Login;
