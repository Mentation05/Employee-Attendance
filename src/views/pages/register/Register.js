import React from 'react'
import './Register.scss'

const Register = () => {
  return (
    <>
      <div class="container-fluid p-5 vh-100 d-flex align-items-center register-container">
        <div class="row w-100 main-container">
          {/* <!-- Left Side: Heading and Text --> */}
          <div class="col-md-6 d-flex flex-column justify-content-center align-items-start left-side">
            <h1>
              Start Your Journey with Us Register Now to Experience Our Modern Employee Management
              Solutions
            </h1>
            <p class="text">
              Ready to revolutionize your workday? Join the Mentation Technologies community and
              experience the power of our innovative attendance management system. Create your
              account now and unlock a world of efficiency and convenience
            </p>
          </div>
          {/* <!-- Right Side: Registration Form --> */}
          <div class="col-md-6 right-side">
            <div class="card shadow p-4 form-container">
              <h3 class="card-title mb-4">Register</h3>
              <form>
                <div class="row">
                  <div class="col-md-6">
                    <div class="form-row input">
                      {/* <label htmlFor="name" class="form-label">
                        Name
                      </label> */}
                      <input
                        type="text"
                        class="form-control"
                        id="name"
                        placeholder="Enter your name"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-row input">
                      {/* <label htmlFor="email" class="form-label">
                        Email address
                      </label> */}
                      <input
                        type="email"
                        class="form-control"
                        id="email"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <div class="form-row input">
                      {/* <label htmlFor="password" class="form-label">
                        Password
                      </label> */}
                      <input
                        type="password"
                        class="form-control"
                        id="password"
                        placeholder="Enter your password"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-row input">
                      {/* <label htmlFor="confirm-password" class="form-label">
                        Confirm Password
                      </label> */}
                      <input
                        type="password"
                        class="form-control"
                        id="confirm-password"
                        placeholder="Confirm your password"
                      />
                    </div>
                  </div>
                </div>
                <div class="row mt-3">
                  <div class="col-md-6">
                    <div class="form-row input">
                      {/* <label htmlFor="phone" class="form-label">
                        Phone Number
                      </label> */}
                      <input
                        type="tel"
                        class="form-control"
                        id="phone"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-row input">
                      {/* <label htmlFor="role" class="form-label">
                        Role
                      </label> */}
                      <select class="form-select" id="role">
                        <option selected disabled>
                          Select your role
                        </option>
                        <option value="admin">Admin</option>
                        <option value="hr">HR</option>
                        <option value="employee">Employee</option>
                        <option value="manager">Manager</option>
                      </select>
                    </div>
                  </div>
                </div>
                <button type="submit" class="btn btn-primary w-100">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register
