import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const navList = [
    "Home",
    "Blood Matching",
    "Search",
    "Locations",
    "Donate",
    "Order",
  ];

  return (
    <>
      <div>
        <NavBar pages={navList} heading="BDM" pageIndex={1} />
      </div>
      <footer
        style={{
          display: "table",
          textAlign: "center",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        All rights reserved to Team 5. Abdulghani Khayat & Ahmed Shewaikan.
      </footer>
    </>
  );
}

export default App;
