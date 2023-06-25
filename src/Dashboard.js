import React from 'react';
import { auth } from './firebase';

const Dashboard = () => {
  const handleLogout = () => {
    auth.signOut();
  };

  return (
    <div>
      <h1>Welcome {auth.currentUser.displayName}</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
