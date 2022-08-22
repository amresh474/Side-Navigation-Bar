import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import SideNav from "./components/Layout/SideNav";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { Contact } from "./pages/Contact";
import { Map } from "./pages/Map";

const ROUTES = {
  Home: { id: "1", element: Home, Path: "/home" },
  Profile: { id: "2", element: Profile, Path: "/profile" },
  About: { id: "3", element: About, Path: "/about" },
  Portfolio: { id: "4", element: Portfolio, Path: "/portfolio" },
  Contact: { id: "5", element: Contact, Path: "/contact" },
  Map: { id: "6", element: Map, Path: "/map" },
  // Error: { id: "5", element: Home, Path: "/*" },
};
function App() {
  return (
    <>
      <div className="wrapper">
        <Router>
          <SideNav />
          <div id="interface">
            <Navbar />
            <Routes>
              {Object.entries(ROUTES).map((route) => {
                const [key, value] = route;
                const TopLevelComponent = value.element;
                return (
                  <Route
                    key={key}
                    path={value.Path}
                    element={<TopLevelComponent />}
                  />
                );
              })}
            </Routes>
          </div>
        </Router>
      </div>
    </>
  );
}

export default App;
