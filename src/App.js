import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/main/index.js";
import Services from "./pages/Our-Services/index.js";
import AboutUs from "./pages/About-Us/index.js";
import Contact from "./pages/Contacts/index.js";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Our-Services" element={<Services />} />
          <Route path="/About-Us" element={<AboutUs />} />
          <Route path="/contacts" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
