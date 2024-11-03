import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Download from './components/Download';
import Upload from './components/Upload';
import Retrieve from './components/Retrieve';
import ProtectedRoute from './components/ProtectedRoute';
import LoginButton from './components/LoginButton';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<LoginButton />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/download" element={<ProtectedRoute><Download /></ProtectedRoute>} />
      <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
      <Route path="/retrieve" element={<ProtectedRoute><Retrieve /></ProtectedRoute>} />
    </Routes>
  </Router>
);

export default App;
