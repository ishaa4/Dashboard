import React, { useEffect, useState } from 'react';
import { auth } from './firebase';
import LoginForm from './LoginForm';
import Dashboard from './Dashboard';

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Listen for authentication state changes
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    // Clean up the subscription
    return () => unsubscribe();
  }, []);

  return (
    <div>
      {user ? (
        <Dashboard />
      ) : (
        <>
          <h1>User Login</h1>
          <LoginForm />
          <h1>Admin Login</h1>
          <LoginForm isRegistering />
        </>
      )}
    </div>
  );
};

export default App;
