import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
