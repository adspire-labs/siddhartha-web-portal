import { motion } from "framer-motion";
import { useState } from "react";
import { Lock, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

export default function ForgotPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [retypePassword, setRetypePassword] = useState("");
  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showRetype, setShowRetype] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const defaultCreds = localStorage.getItem("defaultAdminCredentials");
    if (!defaultCreds) {
      toast({
        title: "Error",
        description: "Default credentials missing. Try again later.",
        variant: "destructive",
      });
      return;
    }

    const { email, password: defaultPass } = JSON.parse(defaultCreds);

    if (oldPassword !== defaultPass) {
      toast({
        title: "Reset Failed",
        description: "Old password is incorrect.",
        variant: "destructive",
      });
      return;
    }

    if (newPassword !== retypePassword) {
      toast({
        title: "Reset Failed",
        description: "New passwords do not match.",
        variant: "destructive",
      });
      return;
    }

    // Update localStorage
    const updatedCreds = { email, password: newPassword };
    localStorage.setItem("defaultAdminCredentials", JSON.stringify(updatedCreds));

    toast({
      title: "Success",
      description: "Password updated successfully!",
    });

    navigate("/admin/login");
  };

  const renderPasswordField = (
    label: string,
    value: string,
    setValue: (val: string) => void,
    show: boolean,
    setShow: (val: boolean) => void
  ) => (
    <div className="relative">
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type={show ? "text" : "password"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
        placeholder="••••••••"
        className="w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none pr-10 transition"
      />
      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 transition"
      >
        {show ? <EyeOff size={20} /> : <Eye size={20} />}
      </button>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 md:p-12 w-full max-w-sm sm:max-w-md lg:max-w-lg"
      >
        {/* Header */}
        <div className="flex flex-col items-center mb-8">
          <motion.div
            initial={{ rotate: -15, scale: 0.8 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="bg-blue-600 p-4 rounded-full text-white shadow-md"
          >
            <Lock size={36} />
          </motion.div>
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-4">
            Reset Password
          </h1>
          <p className="text-sm sm:text-base text-gray-500 mt-1 text-center">
            Update your admin password
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {renderPasswordField("Old Password", oldPassword, setOldPassword, showOld, setShowOld)}
          {renderPasswordField("New Password", newPassword, setNewPassword, showNew, setShowNew)}
          {renderPasswordField(
            "Retype New Password",
            retypePassword,
            setRetypePassword,
            showRetype,
            setShowRetype
          )}

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition text-lg"
          >
            Update Password
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}
