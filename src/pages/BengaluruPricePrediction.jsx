import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Github } from 'lucide-react';

const BengaluruPricePrediction = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gray-900 text-white py-20"
    >
      <div className="container mx-auto px-4">
        <Link to="/" className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 mb-8">
          <ArrowLeft size={20} />
          <span>Back to Portfolio</span>
        </Link>
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-8"
        >
          Bengaluru House Price Prediction
        </motion.h1>
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl text-gray-300 mb-8"
        >
          Machine learning model predicting Bengaluru housing prices using regression.
        </motion.p>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <img
            src="https://via.placeholder.com/900x500?text=Bengaluru+Price+Prediction"
            alt="Bengaluru Price Prediction screenshot"
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-10"
          />
          <h2 className="text-3xl font-bold mb-4">Project Overview</h2>
          <p className="text-gray-300 mb-6">
            A machine learning project that predicts house prices in Bengaluru using regression algorithms.
            The model analyzes features like location, size, amenities, and market trends to provide accurate predictions.
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4">Technologies Used</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-blue-400 font-semibold">Python</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-blue-400 font-semibold">Scikit-learn</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-blue-400 font-semibold">Pandas</span>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <span className="text-blue-400 font-semibold">Regression Models</span>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="https://github.com/Sneha-Srivastava11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-white transition-colors flex items-center gap-2"
          >
            <Github size={20} />
            <span>GitHub Repository</span>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BengaluruPricePrediction;
