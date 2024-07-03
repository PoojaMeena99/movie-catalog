
import React from 'react';
import '../register/style.css';

const Page = () => {
  return (
    <div class="container">
      <div className="formContainer">
        <div className="movie_title"><h1>Movie Catalog</h1></div>
        <h2 className='page_title'><b>Login</b></h2>
        <label className="search_name">Email:</label>
        <input type="email" placeholder="Email" className="input_email" /><br></br>
        <label className="search_password">Password:</label><br></br>
        <input type="password" placeholder="Password" className="input_password" />
        <button className="button_login">LOGIN</button>
        <a href="/register" className="loginLink">
          To Register, Click Here ➔
        </a>
      </div>
    </div>
  );
};

export default Page;


