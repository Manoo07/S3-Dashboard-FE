import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Download from './components/Download';
import Upload from './components/Upload';
import Retrieve from './components/Retrieve';
import Navbar from './components/Navbar';

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/download" element={<Download />} />
      <Route path="/upload" element={<Upload />} />
      <Route path="/retrieve" element={<Retrieve />} />
    </Routes>
  </Router>
);

export default App;
