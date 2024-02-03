

import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';

export default function History() {
  const [loginHistory, setLoginHistory] = useState([]);

  useEffect(() => {
    // Fetch login history when the component mounts
    fetch('http://localhost:5000/api/myhistory')
      .then((response) => response.json())
      .then((data) => setLoginHistory(data))
      .catch((error) => console.error('Error fetching login history:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <h1>Your History is Here</h1>
      <ul>
        {loginHistory.map((login) => (
          <li key={login._id}>
            Email: {login.email}, IP Address: {login.ipAddress}, OS: {login.os}, Browser: {login.browser}
          </li>
        ))}
      </ul>
    </div>
  );
}


