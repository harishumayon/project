import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css';  // Import the CSS file

function Register() {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:8000/api/users/register/', formData)
            .then((response) => {
                console.log('User registered:', response.data);
                navigate('/login');
            })
            .catch((error) => {
                console.error('There was an error!', error.response.data);
            });
    };

    return (
        <div className="container">
            <h2 className="header">Registration</h2>
            <h1 className="welcome-text">Your AI Call Assistant says Welcome</h1>
            <form onSubmit={handleSubmit} className="form">
                <input
                    type="text"
                    name="username"
                    value={formData.username}
                    onChange={handleChange}
                    placeholder="Username"
                    className="input"
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="input"
                />
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="input"
                />
                <button type="submit" className="button">Register</button>
            </form>
        </div>
    );
}

export default Register;
