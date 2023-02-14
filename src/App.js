import "./App.css";
import Nav from "./components/Nav/Nav.js";
import FrontPage from "./components/FrontPage/FrontPage.js";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" exact element={<FrontPage />} />
          <Route path="/Front-Page" element={<FrontPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;