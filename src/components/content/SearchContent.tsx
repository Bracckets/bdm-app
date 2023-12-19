import RowGenerator from "./RowGenerator";


interface Status {
  userStatus: string
}


function SearchContent({userStatus}: Status) {

  if (userStatus === "admin") {
  return (
    <>
      <div className="cl}earfix">
        <h1 className="display-5">
          <img
            src="/images/Blood_drop_plain.png"
            alt="Logo"
            width="50"
            height="50"
            className="align-text-top"
          ></img>
          Search for blood bank information
        </h1>
      </div>
      <div className="container-fluid d-flex align-items-center">
        <form className="d-flex col-4 me-4" role="search">
          <input
            className="form-control me-3"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        <div className="form-check">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckDefault"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Receivers
          </label>
        </div>
        <div className="form-check m-4">
          <input
            className="form-check-input"
            type="checkbox"
            value=""
            id="flexCheckChecked"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="flexCheckChecked">
            Donors
          </label>
        </div>
      </div>
      <div className="container-fluid">
        {/*
    Available colors for the full background: full-color-blue, full-color-azure, full-color-green, full-color-red, full-color-orange
    Available colors only for the toolbar: toolbar-color-blue, toolbar-color-azure, toolbar-color-green, toolbar-color-red, toolbar-color-orange
  -->*/}

        <table className="table table-info table-striped">
          <thead>
            <th data-field="id">National ID</th>
            <th data-field="name">Employee ID</th>
            <th data-field="salary">Name</th>
            <th data-field="country">Phone Number</th>
            <th data-field="city">Adress</th>

            <th
              data-field="actions"
              data-formatter="operateFormatter"
              data-events="operateEvents"
              style={{paddingLeft: "8px"}}
            >
              Actions
            </th>
          </thead>
          <tbody>
            <RowGenerator/>
          </tbody>
        </table>
      </div>
    </>
  )};
}

export default SearchContent;
