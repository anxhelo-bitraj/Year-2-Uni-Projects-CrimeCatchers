import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Empty fields check
    if (!firstName || !lastName || !phone || !address || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      setSuccess("");
      return;
    }

    // First/Last name length
    if (firstName.length < 3 || lastName.length < 3) {
      setError("First and Last Name must be at least 3 characters.");
      setSuccess("");
      return;
    }

    // Phone number validation
    if (!/^\d{11}$/.test(phone)) {
      setError("Phone number must be exactly 11 digits.");
      setSuccess("");
      return;
    }

    // Email format validation
    if (!isValidEmail(email)) {
      setError("Please enter a valid email address.");
      setSuccess("");
      return;
    }

    // Password length validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      setSuccess("");
      return;
    }

    // Passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      setSuccess("");
      return;
    }

    setError("");

    // Signup API call
    const { success, message } = await import('../../api/auth').then(m => m.signup({
      firstName,
      lastName,
      phone,
      address,
      email,
      password
    }));

    if (success) {
      // Auto-login
      const loginRes = await import('../../api/auth').then(m => m.login(email, password));
      if (loginRes.success) {
        login({ user: loginRes.user, token: loginRes.token });
        navigate("/");
      } else {
        setSuccess("Account created! Please login manually.");
        setTimeout(() => navigate("/login"), 1200);
      }
    } else {
      setError(message);
      setSuccess("");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        {error && <div className="login-error">{error}</div>}
        {success && <div className="login-success">{success}</div>}
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={e => setFirstName(e.target.value)}
          autoFocus
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={e => setLastName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Phone Number"
          value={phone}
          onChange={e => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="City"
          value={address}
          onChange={e => setAddress(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password (min 8 characters)"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Register</button>
        <div className="login-links">
          <span>Already have an account?</span>
          <button type="button" onClick={() => navigate('/login')}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
