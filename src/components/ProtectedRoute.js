import { Navigate } from "react-router-dom";
// Hooks
import useLocalStorage from "../hooks/useLocalStorage";

const ProtectedRoute = ({ children }) => {
  const [userInfo, _] = useLocalStorage("userInfo");

  return userInfo ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
