import "./App.css";
import Nav from "./Components/Nav/Nav.js";
import FrontPage from "./Components/FrontPage/FrontPage.js";
import Bio from "./Components/Bio_Page/Bio.js";
import Contact from "./Components/Contact/Contact.js";
import Projects from "./Components/Projects/Projects.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/Front-Page" element={<FrontPage />} />
          <Route path="/Bio" element={<Bio />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Projects" element={<Projects />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
