import "./App.css";
import HomePage from "./HomePage";
import AboutMe from "./AboutMe";
import Contact from "./Contact";
import { Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="Nav">
        <Link to="/" className="Nav-Item">
          HomePage
        </Link>
        <Link to="/about-me" className="Nav-Item">
          AboutMe
        </Link>
        <Link to="/contact" className="Nav-Item">
          Contact
        </Link>
      </nav>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/about-me" element={<AboutMe />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
