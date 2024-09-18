import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import './Login.scss';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(email, password);  

    if (success) {
      navigate('/dashboard');  
    }
  };


  return (
<<<<<<< HEAD
    <>
      <div className="container-fluid p-5 vh-100 d-flex align-items-center justify-content-center login-container">
        <div className="row w-100 main-container">
          {/* <!-- Left Side: Heading and Text --> */}
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-start left-side">
            <h1>Make Every Minute Count Log in to Easily Manage Your Attendance and Start Your Day Right</h1>
            <p className="text mt-4">
              Tired of the hassle of manual time tracking? Mentation Technologies offers a seamless
              and intuitive solution. Log in now and enjoy the freedom of effortless attendance
              management.
            </p>
          </div>
          {/* <!-- Right Side: Login Form --> */}
          <div className="col-md-6 right-side">
            <div className="p-4 form-container">
              <h3 className="card-title mb-4">Login</h3>
              <form>
                <div className="mb-3 input">
                  {/* <label htmlFor="email" className="form-label">
                    Email address
                  </label> */}
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="mb-3 input">
                  {/* <label htmlFor="password" className="form-label">
                    Password
                  </label> */}
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
=======
    <div className="container-fluid p-5 vh-100 d-flex align-items-center justify-content-center login-container">
      <div className="row w-100 main-container">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-start left-side">
          <h1>Make Every Minute Count</h1>
          <p className="text mt-4">Log in now to manage your attendance.</p>
        </div>
        <div className="col-md-6 right-side">
          <div className="p-4 form-container">
            <h3 className="card-title mb-4">Login</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-3 input">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3 input">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Login
              </button>
            </form>
>>>>>>> b514796e3b0a6971cfeb8f1db791e83778732a3e
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
