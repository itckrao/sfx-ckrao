// src/App.js
import React from 'react';
import Navbar from './Navbar';
import UserForm from './UserForm';
import UserList from './UserList';

const App = () => {
    return (
        <div>
            <Navbar />
            <UserForm />
            <UserList />
        </div>
    );
};

export default App;