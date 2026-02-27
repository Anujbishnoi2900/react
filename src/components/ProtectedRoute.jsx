import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/" replace />;
}

export default ProtectedRoute;