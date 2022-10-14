import "./App.css";
import { Homepage } from "./Pages/Homepage/Homepage";
import { AboutPage } from "./Pages/AboutPage/AboutPage";
import { Navbar } from "./Components/Navbar/Navbar";
import { Footer } from "./Components/Footer/Footer";
import { SupportPage } from "./Pages/Support/SupportPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { SiteContextProvider } from "./Context/Context";

function App() {
  return (
    <SiteContextProvider>
      <div
        // style={
        //   mode
        //     ? { backgroundColor: "white", color: "var(--color-primary)" }
        //     : {
        //         backgroundColor: "#282c34",
        //         color: "var(--color-primary)",
        //       }
        // }
        className="App"
      >
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/support"
              element={
                <SupportPage
                  message={" NEED HELP?"}
                  anchor={"Ways to support us"}
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

          <Footer />
        </Router>
      </div>
    </SiteContextProvider>
  );
}

export default App;
