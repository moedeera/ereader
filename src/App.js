import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { SupportPage } from "./Pages/Support/SupportPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route
            path="/support"
            element={
              <SupportPage
                message={" SUPPORTING THE COMMUNITY"}
                anchor={"Ways to support us<"}
                cards={true}
              />
            }
          />
          <Route
            path="/blog"
            element={<SupportPage message={"OFFICIAL BLOG LAUNCHING SOON"} />}
          />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
