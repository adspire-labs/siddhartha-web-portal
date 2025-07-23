import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const gotoGallery = () => {
    navigate("/dashboard/gallery/optimistic@2082");
  };
  const gotoFaculty = () => {
    navigate("/dashboard/about/faculty/optimistic@2082");
  };
  const gotoNewsAndNotice = () => {
    navigate("/dashboard/news/optimistic@2082");
  };
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
      {/* Dashboard Header */}
      <h1 className="text-4xl font-bold text-gray-800 mb-12">Dashboard</h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 p-8">
        {/* Card 1 (Gallery) */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center space-y-6 transform hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Gallery</h3>
          <p className="text-base text-gray-600 text-center">
            Explore the latest collection of images and art.
          </p>
          <motion.button
            onClick={() => gotoGallery()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg focus:outline-none transform transition-all duration-200 hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Go to Gallery
          </motion.button>
        </motion.div>

        {/* Card 2 (Notice) */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center space-y-6 transform hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Notice</h3>
          <p className="text-base text-gray-600 text-center">
            Check the latest announcements and updates.
          </p>
          <motion.button
            onClick={() => gotoNewsAndNotice()}
            className="bg-green-600 text-white px-6 py-3 rounded-lg focus:outline-none transform transition-all duration-200 hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            View Notices
          </motion.button>
        </motion.div>

        {/* Card 3 (Faculty) */}
        <motion.div
          className="bg-white rounded-lg shadow-xl p-8 flex flex-col items-center space-y-6 transform hover:scale-110 transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          <h3 className="text-2xl font-semibold text-gray-800">Faculty</h3>
          <p className="text-base text-gray-600 text-center">
            Meet our talented team of faculty members.
          </p>
          <motion.button
            onClick={() => gotoFaculty()}
            className="bg-red-600 text-white px-6 py-3 rounded-lg focus:outline-none transform transition-all duration-200 hover:scale-105"
            whileHover={{ scale: 1.1 }}
          >
            Meet Faculty
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;
