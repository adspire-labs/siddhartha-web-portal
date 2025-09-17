import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { School, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { seedDefaultAdmin, getAdminCredentials } from '@/utils/AdminStorage'

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    seedDefaultAdmin();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const creds = getAdminCredentials();

    if (creds && email === creds.email && password === creds.password) {
      toast({ title: "Success", description: "Logged in successfully!" });
      navigate("/dashboard");
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 md:p-12 w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
        <div className="flex flex-col items-center mb-8">
          <div className="bg-blue-600 p-4 rounded-full text-white shadow-md">
            <School size={36} />
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
            School Admin Panel
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1 text-center">
            Sign in with your official credentials
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@school.edu"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10 transition"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition text-lg"
          >
            Login
          </motion.button>
        </form>

        {/* <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => navigate("/admin/forgot")}
            className="text-sm text-blue-600 hover:underline"
          >
            Forgot Password?
          </button>
        </div> */}
      </motion.div>
    </div>
  );
}
