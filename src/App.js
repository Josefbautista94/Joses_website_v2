import "./App.css";
import NavBar from "./Components/NavBar/NavBar.js";
import FrontPage from "./Components/FrontPage/FrontPage.js";
import Contact from "./Components/Contact/Contact.js";
import Projects from "./Components/Projects/Projects.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/Front-Page" element={<FrontPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
