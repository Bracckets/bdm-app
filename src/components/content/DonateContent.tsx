function DonateContent(userStatus: string) {
  if (userStatus === "Guest") {
    return (
      <>
        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ marginTop: "2rem" }}
          >
            <h1 className="display-5">
              {" "}
              <img
                src="src/assets/Blood_drop_plain.png"
                alt="Logo"
                width="50"
                height="50"
                className="align-text-top"
              ></img>{" "}
              Donate Today to help
            </h1>

            {
              <p className="lead">
                Blood donation is a selfless act that directly contributes to
                saving lives. Every drop you give can make a world of difference
                to someone in need. Whether it's a patient undergoing surgery, a
                cancer patient, or an accident victim, your donation can be a
                lifeline.
              </p>
            }
            <div className="row justify-content-end">
              <div className="col">
                <button className="btn btn btn-info btn-lg">
                  {" "}
                  Sign Up and Donate Today{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (userStatus === "User") {
    return (
      <>
        <div className="container-fluid">
          <div
            className="row justify-content-center"
            style={{ marginTop: "2rem" }}
          >
            <h1 className="display-5">
              {" "}
              <img
                src="src/assets/Blood_drop_plain.png"
                alt="Logo"
                width="50"
                height="50"
                className="align-text-top"
              ></img>{" "}
              Donate Today to help
            </h1>

            {
              <p className="lead">
                Blood donation is a selfless act that directly contributes to
                saving lives. Every drop you give can make a world of difference
                to someone in need. Whether it's a patient undergoing surgery, a
                cancer patient, or an accident victim, your donation can be a
                lifeline.
              </p>
            }
            <div className="row justify-content-end">
              <div className="col">
                <button className="btn btn btn-info btn-lg">
                  {" "}
                  Donate Today{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default DonateContent;
