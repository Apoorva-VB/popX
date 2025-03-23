import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Retrieve stored user data from local storage
    const storedUserData = JSON.parse(localStorage.getItem("userData"));

    // Check if entered email and password match
    if (
      storedUserData &&
      email === storedUserData.email &&
      password === storedUserData.password
    ) {
      // Navigate to Account Settings page
      navigate("/account-settings");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2 className="head">Sign in to your PopX account</h2>
      <p className="para">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <form className="forms" onSubmit={handleLogin}>
        {/* Email Address */}
        <div className="forms-groups">
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Password */}
        <div className="forms-groups">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        {/* Error Message */}
        {error && <p className="error">{error}</p>}

        {/* Login Button */}
        <button className="login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default SignIn;
