// LogoutButton.tsx
import React from "react";
import { motion } from "framer-motion";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom"; // if using react-router

const LogoutButton: React.FC = () => {
  const navigate = useNavigate(); // for redirecting after logout

  const handleLogout = () => {
    // Remove admin credentials from localStorage
    localStorage.removeItem("adminCredentials");

    // Optional: redirect to login page
    navigate("/admin/login");
  };

  return (
    <motion.button
      onClick={handleLogout}
      whileHover={{ scale: 1.1, backgroundColor: "#ff4d4f", color: "#fff" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-xl shadow-md cursor-pointer focus:outline-none"
    >
      <LogOut size={20} />
      Logout
    </motion.button>
  );
};

export default LogoutButton;
