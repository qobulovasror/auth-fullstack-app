import React from "react";

const Reset = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-5">
            <div className="card p-4">
              <h2 className="text-center">Reset Password</h2>
              <p>
                Please enter the email address that you used to register, and we
                will send you an email with a link to reset your password.
              </p>
              <form>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control bg-light"
                    placeholder="Enter your email"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />
                  <ul id="emailHelp" className="form-text">
                    <li>We'll never share your email with anyone else.</li>
                  </ul>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  Reset my password
                </button>
                <p
                  className="d-block text-center p-3 text-primary"
                  style={{ fontSize: "20px" }}
                >
                  Return to
                  <a href="##">Sign In</a>
                </p>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Reset;
