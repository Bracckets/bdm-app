import { useState } from "react";

function SignPage() {
  var [isActive, setActive] = useState(0);

  return (
    <div className="container-flui h-100">
      <nav
        style={{ backgroundColor: "#f2f2f2" }}
        className="navbar navbar-expand-lg"
      >
        <div className="row g-3">
          <a className="display-6" href="/">
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
            className={
              isActive === 0 ? "tab-pane fade show active" : "tab-pane"
            }
            id="#pills-login"
            role="tabpanel"
            aria-labelledby="tab-login"
          >
            <form action="action_page.php" method="post">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginName">
                  Email or username
                </label>
                <input type="email" id="loginName" className="form-control" />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="loginPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="loginPassword"
                  className="form-control"
                />
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

              <button
                type="submit"
                value="Submit"
                className="btn btn-outline-success mb-7"
              >
                Sign in
              </button>
            </form>
          </div>
          <div
            className={
              isActive === 1 ? "tab-pane fade show active" : "tab-pane"
            }
            id="#pills-register"
            role="tabpanel"
            aria-labelledby="tab-register"
          >
            <form action="/process" method="post">
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerFName">
                  First Name
                </label>
                <input
                  type="text"
                  id="registerFName"
                  className="form-control"
                />

                <label className="form-label" htmlFor="registerMName">
                  Middle Name
                </label>
                <input
                  type="text"
                  id="registerMName"
                  className="form-control"
                />

                <label className="form-label" htmlFor="registerLName">
                  Last Name
                </label>
                <input
                  type="text"
                  id="registerLName"
                  className="form-control"
                />
              </div>

              {/*<!-- Username input -->*/}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerUsername">
                  Username
                </label>
                <input
                  type="text"
                  id="registerUsername"
                  className="form-control"
                  required
                />
              </div>

              {/*<!-- Email input -->*/}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerEmail">
                  Email
                </label>
                <input
                  type="email"
                  id="registerEmail"
                  className="form-control"
                  required
                />
              </div>

              {/*<!-- Password input -->*/}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerPassword">
                  Password
                </label>
                <input
                  type="password"
                  id="registerPassword"
                  className="form-control"
                  required
                />
              </div>

              {/*<!-- Repeat Password input -->*/}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerRepeatPassword">
                  Repeat password
                </label>
                <input
                  type="password"
                  id="registerRepeatPassword"
                  className="form-control"
                  required
                />
              </div>

              {/* Input for Gender */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="gender">
                  Gender
                </label>
                <select
                  className="form-select mb-4"
                  id="gender"
                  name="Gender"
                  required
                  placeholder="Select Gender"
                >
                  <option value="M">Male</option>
                  <option value="F">Female</option>
                </select>
              </div>

              {/* Input for Blood Type */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="registerBtype">
                  Blood Type
                </label>
                <select
                  className="form-select mb-4"
                  id="registerBtype"
                  required
                  placeholder="Select Blood Type"
                >
                  <option value="1">A</option>
                  <option value="2">B</option>
                  <option value="3">O</option>
                </select>
              </div>

              {/* Input for Rh Factor */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="RhFactor">
                  Blood Type
                </label>
                <select
                  className="form-select mb-4"
                  id="RhFactor"
                  name="Rh_Factor"
                  required
                  placeholder="Select Your Rh Factor"
                >
                  <option value="+">+</option>
                  <option value="-">-</option>
                </select>
              </div>

              {/* Input for National ID*/}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="NationalID">
                  National Id
                </label>
                <input
                  type="text"
                  id="NationalID"
                  className="form-control"
                  required
                />
              </div>

              {/* Input for Birth Date */}
              <div className="form-outline mb-4">
                <label className="form-label" htmlFor="Birth_Date">
                  Birth Date
                </label>
                <input
                  type="date"
                  id="Birth_Date"
                  name="Birth_Date"
                  className="form-control"
                  required
                />
              </div>

              {/* Input for Diseas Check */}
              <div className="form-check mb-4">
                <label className="form-check-label" htmlFor="diseasCheck">
                  Do you suffer from any Major Diseases? (Tick if Yes)
                </label>
                <input
                  className="form-check-input me-2"
                  type="checkbox"
                  value=""
                  id="diseaseCheck"
                  aria-describedby="registerCheckHelpText"
                />
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

              <button
                type="submit"
                value="Submit"
                className="btn btn-primary btn-block mb-3"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignPage;
