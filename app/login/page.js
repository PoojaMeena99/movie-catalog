
"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import '../register/style.css';

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleLogin = function () {

    const url = 'http://localhost:3010/login';

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
          document.cookie = "IfLoggedIn = true; path=/";
          router.push('/');

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
        <h2 className='page_title'><b>Login</b></h2>
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
          onClick={handleLogin}
        >
          LOGIN
        </button>
        <p>{responseMessage}</p>

        <a href="/register" className="loginLink">
          To Register Click Here ➔
        </a>
      </div>
    </div>
  )
}
export default Login;