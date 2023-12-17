import NavBar from "./components/NavBar";
import "./main.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignPage from "./components/SignPage";

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
      <BrowserRouter>
        <Routes>
          <Route
            index
            element={<NavBar pages={navList} heading="BDM" pageIndex={1} />}
          />
          <Route path="/Login" element={<SignPage />} />
        </Routes>
      </BrowserRouter>
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
