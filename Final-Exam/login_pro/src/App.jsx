import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { store } from './store/store.js'; 
import Register from '../src/screen/register.jsx';  
import Login from '../src/screen/login.jsx'; 
import Dashboard from '../src/screen/Dashboard.jsx'; // 1. Naye Dashboard component ko import kiya

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/register" />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} /> 
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;