import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import LoginButton from './LoginButton';

const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3001/auth/status', { withCredentials: true });
        if (response.data.authenticated) {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false); // Explicitly set to false
          navigate('/'); // Redirect to login if not authenticated
        }
      } catch (error) {
        console.error('Authentication check failed:', error);
        setIsAuthenticated(false); // Ensure state is false on error
        navigate('/'); // Redirect to login on error
      }
    };

    checkAuthStatus();
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      {isAuthenticated ? (
        <>
          <h1>Welcome to your Dashboard</h1>
          <nav className="mb-4 space-x-4">
            <Link to="/download" className="btn">Downloads</Link>
            <Link to="/upload" className="btn">Upload File</Link>
            <Link to="/retrieve" className="btn">Retrieve Files</Link>
            <a href="http://localhost:3001/logout" className="btn">Logout</a>
          </nav>
        </>
      ) : (
        <LoginButton />
      )}
    </div>
  );
};

export default Dashboard;
