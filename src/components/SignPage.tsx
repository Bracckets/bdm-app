import { useState } from "react";

function SignPage() {

  var [isActive, setActive] = useState(0)

  
  return (
    <>
    <nav
        style={{ backgroundColor: "#f2f2f2" }}
        className="navbar navbar-expand-lg"
      >
        <div className="row g-3">
          <a className="display-6" href="index.html">
            {
              <img
                style={{ marginRight: "20px" }}
                src="/Logo.svg"
                alt="Logo"
                width="50"
                height="50"
                className="align-text-top"
              ></img>
            }
            {"BDM"}
          </a>
          </div>
          </nav>
      <div className="container-lg justify-content-center align-items-center">
        <ul
          className="nav nav-pills nav-justified mb-3"
          id="ex1"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className={isActive === 0 ? "nav-link active" : "nav-link"}
              id="tab-login"
              data-mdb-toggle="pill"
              href="#pills-login"
              onClick={() => setActive(0)}
              role="tab"
              aria-controls="pills-login"
              aria-selected="false"
            >
              Login
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className={isActive === 1 ? "nav-link active" : "nav-link"}
              id="tab-register"
              data-mdb-toggle="pill"
              onClick={() => setActive(1)}
              href="#pills-register"
              role="tab"
              aria-controls="#pills-register"
              aria-selected="true"
            >
              Register
            </a>
          </li>
        </ul>

        <div className="tab-content">
          <div
            className={isActive === 0 ? "tab-pane fade show active" : "tab-pane" }
            id="#pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form action="action_page.php" method="post">

              <div className="form-outline mb-4">
                <input type="email" id="loginName" className="form-control" />
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
              </div>

              <div className="row mb-4">
                <div className="col-md-6 d-flex justify-content-center">
                  <div className="form-check mb-3 mb-md-0">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="loginCheck"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="loginCheck">
                      {" "}
                      Remember me{" "}
                    </label>
                  </div>
                </div>

                <div className="col-md-6 d-flex justify-content-center">
                  <a href="#!">Forgot password?</a>
                </div>
              </div>

              <button type="submit" value="Submit" className="btn btn-outline-success mb-7">
                Sign in
              </button>
            </form>
          </div>
          <div
            className={isActive === 1 ? "tab-pane fade show active" : "tab-pane" }
            id="#pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form>
              <div className="form-outline mb-4">
                <input type="text" id="registerName" className="form-control" />
                <label className="form-label" htmlFor="registerName">
                  Name
                </label>
              </div>

              {/*<!-- Username input -->*/}
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
              </div>

              {/*<!-- Email input -->*/}
              <div className="form-outline mb-4">
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
              </div>

              {/*<!-- Password input -->*/}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
              </div>

              {/*<!-- Repeat Password input -->*/}
              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control"
                />
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
              </div>

              <div className="form-check d-flex justify-content-center mb-4">
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="registerCheck"
                  defaultChecked
                  aria-describedby="registerCheckHelpText"
                />
                <label className="form-check-label" htmlFor="registerCheck">
                  I have read and agree to the terms
                </label>
              </div>

              <button type="submit" value="Submit"className="btn btn-primary btn-block mb-3">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignPage;
