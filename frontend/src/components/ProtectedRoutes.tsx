// src/components/ProtectedRoute.tsx
import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";

export default function ProtectedRoutes() {
  const defaultCreds = localStorage.getItem("defaultAdminCredentials");
  const adminCreds = localStorage.getItem("adminCredentials");

  if (!defaultCreds || !adminCreds) {
    toast.error("Please login first!");
    return <Navigate to="/admin/login" replace />;
  }

  const { email: defaultEmail, password: defaultPass } = JSON.parse(defaultCreds);
  const { email, password } = JSON.parse(adminCreds);

  if (email === defaultEmail && password === defaultPass) {
    toast.success("Logged in successfully!");
    return <Outlet />;
  } else {
    toast.error("Login failed! Invalid credentials");
    return <Navigate to="/admin/login" replace />;
  }
}
