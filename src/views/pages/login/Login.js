import React from 'react'
import { Link } from 'react-router-dom'
import './Login.scss'


const Login = () => {
  return (
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
                  <label htmlFor="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter your email"
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
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
