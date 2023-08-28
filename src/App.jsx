import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Appointments } from "./pages/Appointments";
import { Applydoctor } from "./pages/Applydoctor";
import { Contact } from "./pages/Contact";
import { Map } from "./pages/Map";
// import { Blog } from "./pages/Blog";
import { Login } from "./components/Login/Login";
import { Singup } from "./components/singup/Singup";
import { PrivateRoute } from "./PrivateRoute/index";
const ROUTES = {
  Home: { id: "3", element: Home, Path: "/" },
  Appointments: { id: "4", element: Appointments, Path: "/appointments" },
  Portfolio: { id: "5", element: Applydoctor, Path: "/apply-doctor" },
  Profile: { id: "6", element: Profile, Path: "/profile" },
  Contact: { id: "7", element: Contact, Path: "/contact" },
  Map: { id: "8", element: Map, Path: "/map" },

  // Error: { id: "5", element: Home, Path: "/*" },
};
function App() {
  // const loadding =useSelector
  return (
    <>
      <div className="wrapper">
        <Router>
          <Routes>
            {Object.entries(ROUTES).map((route) => {
              const [key, value] = route;
              const TopLevelComponent = value.element;
              return (
                <Route
                  key={key}
                  path={value.Path}
                  element={<PrivateRoute><TopLevelComponent /></PrivateRoute>}
                />
              );
            })}
            <Route
            path="/login"
            element={<Login/>}
            />

            <Route
             path="/Singup"
             element={<Singup/>}
            />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
