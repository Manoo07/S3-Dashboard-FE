import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null); // Start with null to indicate loading

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await axios.get('http://54.90.109.188/auth/status', { withCredentials: true });
        setIsAuthenticated(response.data.authenticated);
      } catch (error) {
        setIsAuthenticated(false);
      }
    };

    checkAuthStatus();
  }, []);

  if (isAuthenticated === null) return <p>Loading...</p>; // Show loading indicator while checking

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
