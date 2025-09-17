import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ImageIcon, BellIcon, UsersIcon, ChevronRight } from "lucide-react";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const gotoGallery = () => navigate("/dashboard/gallery/optimistic@2082");
  const gotoFaculty = () => navigate("/dashboard/about/faculty/optimistic@2082");
  const gotoNewsAndNotice = () => navigate("/dashboard/news/optimistic@2082");

  return (
    <div className="min-h-screen bg-gray-50 pt-24 p-6"> {/* Added pt-24 for top padding */}
      <div className="max-w-6xl mx-auto">
        {/* Header - now properly spaced below nav */}
        <motion.header
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Admin Dashboard</h1>
          <p className="text-gray-500">Manage your school content</p>
        </motion.header>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gallery Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
            onClick={gotoGallery}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4 text-blue-500 bg-blue-50 p-3 rounded-full w-12 h-12 mx-auto">
                <ImageIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Gallery</h3>
              <p className="text-gray-500 text-sm text-center mb-4">Manage school photos and albums</p>
              <div className="flex justify-center">
                <button className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center">
                  Manage <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* News Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
            onClick={gotoNewsAndNotice}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4 text-green-500 bg-green-50 p-3 rounded-full w-12 h-12 mx-auto">
                <BellIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">News & Notices</h3>
              <p className="text-gray-500 text-sm text-center mb-4">Post announcements and updates</p>
              <div className="flex justify-center">
                <button className="text-green-600 hover:text-green-800 text-sm font-medium flex items-center">
                  Manage <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Faculty Card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all cursor-pointer"
            onClick={gotoFaculty}
          >
            <div className="p-6">
              <div className="flex justify-center mb-4 text-red-500 bg-red-50 p-3 rounded-full w-12 h-12 mx-auto">
                <UsersIcon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">Faculty</h3>
              <p className="text-gray-500 text-sm text-center mb-4">Manage teaching staff</p>
              <div className="flex justify-center">
                <button className="text-red-600 hover:text-red-800 text-sm font-medium flex items-center">
                  Manage <ChevronRight className="h-4 w-4 ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;