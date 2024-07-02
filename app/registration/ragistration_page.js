
import React from 'react';
import "./style.css";

const Register = () => {
  return (
    <div className="container">
      <div className="formContainer">
        <div className="movie_title"><h1>Movie Catalog</h1></div>
        <h2 className='Register_title'><b>Register</b></h2>
        <label className="search_name">Email:</label>
        <input type="email" placeholder="Email" className="input_email" /><br></br>
        <label className="search_password">password:</label><br></br>
        <input type="password" placeholder="Password" className="input_password" />
        <button className="button">REGISTER</button>
        <a href="/login" className="loginLink">
          To Login Click Here ➔
        </a>
      </div>
    </div>
  );
};

export default Register;
