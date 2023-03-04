import React, { useState } from "react";
import { NavLink,Redirect, useNavigate, Navigate} from "react-router-dom";
// import { useNavigate } from "react-router-dom";

function LoginPage(props) {
const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

//   const navigate = useNavigate();

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  function handlePasswordChange(event) {
    setPassword(event.target.value);
  }

    const handleSubmit = async (event) => {
    event.preventDefault();
    // handle login logic here
    console.log("Email:", email);
    console.log("Password:", password);
    
    try {
        const response = await fetch("https://express-t4.onrender.com/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: email,
            password: password
        })
      })

      if(response.status === 200) {
        // navigate
        navigate('/profiles')
      }
    } catch (error) {
        console.log(error);
    }
    
  }

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="username"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default LoginPage;
