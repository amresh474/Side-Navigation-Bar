import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  let jwt = true;
  //   const [jwt, setJwt] = useLocalState("", "jwt");
  return jwt ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
