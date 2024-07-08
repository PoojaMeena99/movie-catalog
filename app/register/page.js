"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import "./style.css";

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const router = useRouter();

  const handleRegister = function () {

    const url = 'http://localhost:3010/register';

    const data = {
      email: email,
      password: password
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText)
        }
        return response.json();
      })
      .then(data => {
        if (data.success) {
          router.push('/login');
          console.log('Success:', data.message);
        } else {
          console.log('Error:', data.message);
        }
        setResponseMessage(data.message);
      })
      .catch(error => {
        setResponseMessage(data.message);
        console.error('Error:', data.message);
      });
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="movie_title"><h1>Movie Catalog</h1></div>
        <h2 className='Register_title'><b>Register</b></h2>
        <label className="search_name">Email:</label>
        <input
          type="email"
          placeholder="Email"
          className="input_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        /><br />
        <label className="search_password">Password:</label><br />
        <input
          type="password"
          placeholder="Password"
          className="input_password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="button_reginstarion"
          onClick={handleRegister}
        >
          REGISTER
        </button>
        <p>{responseMessage}</p>
        <a href="/login" className="loginLink">
          To Login Click Here ➔
        </a>
      </div>
    </div>
  );
};

export default Register;
