import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './style.css'; // Reuse the same CSS file

function Login() {
    const [formData, setFormData] = useState({
        username: '',
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
            .post('http://localhost:8000/api/users/login/', formData)
            .then((response) => {
                console.log('User logged in:', response.data);
                navigate('/home');
            })
            .catch((error) => {
                console.error('There was an error!', error.response.data);
            });
    };

    return (
        <div className="container">
            <h2 className="header">Login</h2>
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
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Password"
                    className="input"
                />
                <button type="submit" className="button">Login</button>
            </form>
        </div>
    );
}

export default Login;
