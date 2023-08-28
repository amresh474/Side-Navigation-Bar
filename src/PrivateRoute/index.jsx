import { Outlet,Navigate } from "react-router-dom";

export const PrivateRoute = ({ children }) => {
  let jwt = localStorage.getItem("token");
  //   const [jwt, setJwt] = useLocalState("", "jwt");
  return jwt ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
