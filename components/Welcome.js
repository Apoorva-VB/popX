import React from "react";
import "./Welcome.css";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="container-wrapper">
        <div className="titles">Welcome to popX</div>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        </p>
        <button
          className="create-btn"
          onClick={() => navigate("/create-account")}
        >
          Create Account
        </button>
        <button className="login-btn" onClick={() => navigate("/sign-in")}>
          <span className="btn-text">Already Registered? Login</span>
        </button>
      </div>
    </div>
  );
};

export default Welcome;
