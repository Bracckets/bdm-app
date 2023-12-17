function SearchContent() {
  return (
    <>
      <div className="clearfix">
        <h1 className="display-5">
          <img
            src="/images/Blood_drop_plain.png"
            alt="Logo"
            width="50"
            height="50"
            className="align-text-top"
          ></img>
          Search for blood stock
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

        <table className="table table-danger table-striped">
          <thead>
            <th data-field="id">ID</th>
            <th data-field="name">Name</th>
            <th data-field="salary">Salary</th>
            <th data-field="country">Country</th>
            <th data-field="city">City</th>

            <th
              data-field="actions"
              data-formatter="operateFormatter"
              data-events="operateEvents"
            >
              Actions
            </th>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Dakota Rice</td>
              <td>$36,738</td>
              <td>Niger</td>
              <td>Oud-Turnhout</td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Minerva Hooper</td>
              <td>$23,789</td>
              <td>Curaçao</td>
              <td>Sinaai-Waas</td>
              <td></td>
            </tr>
            <tr>
              <td>3</td>
              <td>Sage Rodriguez</td>
              <td>$56,142</td>
              <td>Netherlands</td>
              <td>Baileux</td>
              <td></td>
            </tr>
            <tr>
              <td>4</td>
              <td>Philip Chaney</td>
              <td>$38,735</td>
              <td>Korea, South</td>
              <td>Overland Park</td>
              <td></td>
            </tr>
            <tr>
              <td>5</td>
              <td>Doris Greene</td>
              <td>$63,542</td>
              <td>Malawi</td>
              <td>Feldkirchen in Kärnten</td>
              <td></td>
            </tr>
            <tr>
              <td>6</td>
              <td>Mason Porter</td>
              <td>$78,615</td>
              <td>Chile</td>
              <td>Gloucester</td>
              <td></td>
            </tr>
            <tr>
              <td>7</td>
              <td>Alden Chen</td>
              <td>$63,929</td>
              <td>Finland</td>
              <td>Gary</td>
              <td></td>
            </tr>
            <tr>
              <td>8</td>
              <td>Colton Hodges</td>
              <td>$93,961</td>
              <td>Nicaragua</td>
              <td>Delft</td>
              <td></td>
            </tr>
            <tr>
              <td>9</td>
              <td>Illana Nelson</td>
              <td>$56,142</td>
              <td>Heard Island</td>
              <td>Montone</td>
              <td></td>
            </tr>
            <tr>
              <td>10</td>
              <td>Nicole Lane</td>
              <td>$93,148</td>
              <td>Cayman Islands</td>
              <td>Cottbus</td>
              <td></td>
            </tr>
            <tr>
              <td>11</td>
              <td>Chaim Saunders</td>
              <td>$5,502</td>
              <td>Romania</td>
              <td>New Quay</td>
              <td></td>
            </tr>
            <tr>
              <td>12</td>
              <td>Josiah Simon</td>
              <td>$50,265</td>
              <td>Christmas Island</td>
              <td>Sint-Jans-Molenbeek</td>
              <td></td>
            </tr>
            <tr>
              <td>13</td>
              <td>Ila Poole</td>
              <td>$67,413</td>
              <td>Montenegro</td>
              <td>Pontevedra</td>
              <td></td>
            </tr>
            <tr>
              <td>14</td>
              <td>Shana Mejia</td>
              <td>$58,566</td>
              <td>Afghanistan</td>
              <td>Ballarat</td>
              <td></td>
            </tr>
            <tr>
              <td>15</td>
              <td>Lana Ryan</td>
              <td>$64,151</td>
              <td>Martinique</td>
              <td>Portobuffolè</td>
              <td></td>
            </tr>
            <tr>
              <td>16</td>
              <td>Daquan Bender</td>
              <td>$91,906</td>
              <td>Sao Tome and Principe</td>
              <td>Walhain-Saint-Paul</td>
              <td></td>
            </tr>
            <tr>
              <td>17</td>
              <td>Connor Wagner</td>
              <td>$86,537</td>
              <td>Germany</td>
              <td>Solihull</td>
              <td></td>
            </tr>
            <tr>
              <td>18</td>
              <td>Boris Horton</td>
              <td>$35,094</td>
              <td>Laos</td>
              <td>Saint-Mard</td>
              <td></td>
            </tr>
            <tr>
              <td>19</td>
              <td>Winifred Ryan</td>
              <td>$64,436</td>
              <td>Ireland</td>
              <td>Ronciglione</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default SearchContent;
