// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProtectedRoutes() {
  const adminCreds = localStorage.getItem("adminCredentials");

  if (!adminCreds) {
    toast.error("Please login first!");
    return <Navigate to="/admin/login" replace />;
  }

  try {
    const { email, password } = JSON.parse(adminCreds);

    // just check if both values exist (means logged in before)
    if (email && password) {
      return <Outlet />;
    } else {
      toast.error("Please login first!");
      return <Navigate to="/admin/login" replace />;
    }
  } catch (err) {
    toast.error("Invalid credentials format. Please login again.");
    return <Navigate to="/admin/login" replace />;
  }
}
