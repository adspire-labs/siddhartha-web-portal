import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import { getAdminCredentials, updateAdminPassword } from '@/utils/AdminStorage'

export default function ForgotPassword() {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showOld, setShowOld] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const { toast } = useToast();

  const handleReset = (e: React.FormEvent) => {
    e.preventDefault();
    const creds = getAdminCredentials();
    if (!creds) {
      toast({ title: "Error", description: "No admin found.", variant: "destructive" });
      return;
    }

    if (oldPassword !== creds.password) {
      toast({ title: "Error", description: "Old password is incorrect.", variant: "destructive" });
      return;
    }

    if (newPassword !== confirmPassword) {
      toast({ title: "Error", description: "New passwords do not match.", variant: "destructive" });
      return;
    }

    updateAdminPassword(newPassword);
    toast({ title: "Success", description: "Password updated successfully." });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-100 px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="bg-white shadow-xl rounded-3xl p-8 sm:p-10 w-full max-w-sm sm:max-w-md"
      >
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Reset Admin Password
        </h1>

        <form onSubmit={handleReset} className="space-y-6">
          {/* Old Password */}
          <PasswordField label="Old Password" value={oldPassword} setValue={setOldPassword} show={showOld} setShow={setShowOld}/>
          <PasswordField label="New Password" value={newPassword} setValue={setNewPassword} show={showNew} setShow={setShowNew}/>
          <PasswordField label="Retype New Password" value={confirmPassword} setValue={setConfirmPassword} show={showConfirm} setShow={setShowConfirm}/>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold shadow-lg hover:bg-blue-700 transition"
          >
            Reset Password
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
}

function PasswordField({ label, value, setValue, show, setShow }: any) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <div className="relative">
        <input
          type={show ? "text" : "password"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          className="w-full px-4 py-3 pr-10 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          className="absolute inset-y-0 right-3 flex items-center text-gray-500"
        >
          {show ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
    </div>
  );
}
