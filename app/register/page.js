"use client"
import React, { useState } from 'react';
import "./style.css";

const Page = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleRegister = async () {
    // event.preventDefault();

    // const url = 'https://92e673dec832461a80886388cbd4045d.api.mockbin.io/';

    const url = "https://localhost:3010/register";

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

    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }

      const result = await response.json();
      setResponseMessage('Registration successful!');
      console.log('Success:', result);
    } catch (error) {
      setResponseMessage('Registration failed. ' + error.message);
      console.error('Error:', error);
    }
  };

  return (
    <div className="container">
      <div className="formContainer">
        <div className="movie_title"><h1>Movie Catalog</h1></div>
        <h2 className='page_title'><b>Register</b></h2>
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

export default Page;
