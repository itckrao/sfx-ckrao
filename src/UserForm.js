// src/UserForm.js
import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ fetchUsers }) => {
    const [name, setName] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name) return;

        await axios.post('/api/users', { name });
        setName('');
        fetchUsers();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
            />
            <button type="submit">Add User</button>
        </form>
    );
};

export default UserForm;
