import { useState } from "react";
import HomeContent from "./content/HomeContent";
import DonateContent from "./content/DonateContent";

interface Props {
  pages: string[];
  heading: string;
  pageIndex: number;
}

function NavBar({ pages, heading, pageIndex }: Props) {
  //Hook
  const [selectedIndex, setSelectedIndex] = useState(pageIndex);

  //arr[0]; // variable
  //arr[1]; //updater function

  const getMessage = () => {
    return pages.length === 0 && <p> No item found</p>;
  };

  function loadContent() {
    if (selectedIndex === 0) {
      return HomeContent();
    } else if (selectedIndex === 2) {
      return DonateContent();
    }
  }

  //Event Handler
  //const handelClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <nav
        style={{ backgroundColor: "#f2f2f2" }}
        className="navbar navbar-expand-lg"
      >
        <div className="container-fluid">
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
            {heading}
          </a>
          {getMessage()}
          <ul className="nav nav-pills justify-content-center">
            {pages.map((item, index) => (
              <li
                className={selectedIndex === index ? "nav-item" : "nav-item"}
                key={item}
                onClick={() => setSelectedIndex(index)}
              >
                <a
                  className={
                    selectedIndex === index ? "nav-link active" : "nav-link"
                  }
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <button className="btn btn btn-outline-success" type="submit">
            Sign in
          </button>
        </div>
      </nav>
      {
        <img
          style={{ marginBottom: "1rem", opacity: "75%" }}
          src="./src/assets/BloodBags.jpg"
          alt="Logo"
          width="100%"
          height="786"
          className="img-fluid"
        ></img>
      }
      {loadContent()}
    </>
  );
}
export default NavBar;
