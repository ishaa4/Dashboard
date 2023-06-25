import React, { useState } from 'react';
// import { auth } from './firebase';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const LoginForm = ({ isRegistering }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isRegistering) {
        // Register a new user
        await createUserWithEmailAndPassword(auth, email, password);
      } else {
        // Log in the user
        await signInWithEmailAndPassword(auth, email, password);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
    </form>
  );
};

export default LoginForm;
