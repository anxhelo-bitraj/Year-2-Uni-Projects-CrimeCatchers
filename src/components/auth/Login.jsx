import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext.jsx";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { login: loginUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please enter both email and password.");
      return;
    }
    setError("");
    const { success, user, token, message } = await import('../../api/auth').then(m => m.login(email, password));
    if (success) {
      loginUser({ user, token });
      navigate("/"); // Redirect to main page after login
    } else {
      let errorMsg = message;
      if (typeof message === "object") {
        errorMsg = message.error || message.message || JSON.stringify(message) || "Login failed";
      }
      setError(errorMsg);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login / Register</h2>
        {error && <div className="login-error">{error}</div>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          autoFocus
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <div className="login-links">
          <span>Don't have an account?</span>
          <button type="button" onClick={() => navigate('/signup')}>Register</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
