import React, { useState } from 'react';
import '../Login.css';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../lib/useUser';
import { storeTokenInSessionStorage } from '../lib/common';
import axios from 'axios';

const LoginPage = () => {
  const navigate = useNavigate();
  const { user, authenticated } = useUser();

  if (user || authenticated) {
    navigate('/courses');
  }

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: 'POST',
        url: 'http://localhost:9000/auth/login',
        data: {
          email,
          password,
        },
      });
      if (!response?.data?.data?.access_token) {
        console.log('Something went wrong during signing in: ', response.data);
        return;
      }
      storeTokenInSessionStorage(response.data.data.access_token);
      navigate('/courses');
    } catch (err) {
      console.log('Some error occured during signing in: ', err);
    }
  };

  return (
    <div className='login-wrapper'>
      <h1>Please Log in</h1>
      <form onSubmit={handleSubmit}>
        <label>
          <p>Username</p>
          <input
            type='text'
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password</p>
          <input
            type='text'
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <div>
          <button type='submit'>Submit</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
