import { Navigate, Outlet } from "react-router-dom";
import { getToken } from "./utils/auth";

function ProtectedRoutes() {
  const token = getToken();
  return token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
