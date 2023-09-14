const Login = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4 mt-5">
            <div className="card p-4">
              <h2 className="text-center">Sign In</h2>
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
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control bg-light"
                    id="exampleInputPassword1"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="exampleCheck1"
                  />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: "100%" }}
                >
                  SIGN IN
                </button>
                <a href="##" className="d-block text-center p-3">
                  Forgot password?
                </a>
                <button
                  type="submit"
                  className="btn"
                  style={{ width: "100%", boxShadow: "0 0 4px 0" }}
                >
                  CREATE AN ACCOUNT
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-4"></div>
        </div>
      </div>
    </>
  );
};

export default Login;
