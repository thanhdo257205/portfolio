'use client';

import { motion } from 'framer-motion';
import { FiGithub, FiMail, FiArrowUp, FiHeart } from 'react-icons/fi';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-400 text-center md:text-left">
            <p>© {currentYear} Đỗ Hoàn Thành. All rights reserved.</p>
          </div>

          {/* Made with love */}
          <div className="text-gray-600 dark:text-gray-400 text-center flex items-center">
            <p className="flex items-center">
              Made with <FiHeart className="mx-2 text-red-500" /> and passion
            </p>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <motion.a
              href="https://github.com/thanhdo257205"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              aria-label="GitHub"
              whileHover={{ scale: 1.2, rotate: 5 }}
            >
              <FiGithub className="w-6 h-6" />
            </motion.a>
            <motion.a
              href="mailto:dothanh2572005@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
              aria-label="Email"
              whileHover={{ scale: 1.2, rotate: -5 }}
            >
              <FiMail className="w-6 h-6" />
            </motion.a>
          </div>
        </div>

        {/* Back to top */}
        <div className="mt-8 text-center">
          <motion.a
            href="#home"
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors duration-200"
            whileHover={{ y: -5 }}
          >
            <FiArrowUp className="w-5 h-5 mr-2" />
            Về đầu trang
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
