import React, { useState } from 'react';
import axios from 'axios';

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        age: '',
        country: '',
        first_name: '',
        last_name: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/register/', formData);
            console.log(res.data);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} />
            <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
            <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
            <input type="number" name="age" placeholder="Age" value={formData.age} onChange={handleChange} />
            <input type="text" name="country" placeholder="Country" value={formData.country} onChange={handleChange} />
            <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} />
            <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} />
            <button type="submit">Register</button>
        </form>
    );
};

export default RegisterForm;
