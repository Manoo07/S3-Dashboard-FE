import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import LoginButton from './LoginButton';

const Dashboard = () => {

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <>
          <h1>Welcome to your Dashboard</h1>
          <nav className="mb-4 space-x-4">
            <Link to="/download" className="btn">Downloads</Link>
            <Link to="/upload" className="btn">Upload File</Link>
            <Link to="/retrieve" className="btn">Retrieve Files</Link>
          </nav>
        </>
    </div>
  );
};

export default Dashboard;
