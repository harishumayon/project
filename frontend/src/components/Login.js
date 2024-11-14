// frontend/src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:8000/api/users/login/', formData)
      .then((response) => {
        console.log('Login successful:', response.data);
        // Store token in local storage or context
        localStorage.setItem('token', response.data.token);
        navigate('/home');  // Redirect to homepage
      })
      .catch((error) => {
        console.error('Invalid credentials', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input type="text" name="username" onChange={handleChange} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleChange} />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;
