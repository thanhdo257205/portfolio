'use client';

import { motion } from 'framer-motion';
import { fadeIn, slideUp, scaleIn } from '@/lib/animations';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 bg-gradient-to-br from-primary/10 via-secondary/10 to-purple-500/10 dark:from-primary/20 dark:via-secondary/20 dark:to-purple-500/20">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar with initials */}
        <motion.div 
          className="mb-8 flex justify-center"
          initial="hidden"
          animate="visible"
          variants={scaleIn}
        >
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            ĐT
          </div>
        </motion.div>

        {/* Name and Title */}
        <motion.h1 
          className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          initial="hidden"
          animate="visible"
          variants={slideUp}
        >
          Đỗ Hoàn Thành
        </motion.h1>
        
        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl text-gray-600 dark:text-gray-400 mb-6"
          initial="hidden"
          animate="visible"
          variants={slideUp}
          transition={{ delay: 0.1 }}
        >
          Java Developer | Student @ FPT University
        </motion.h2>

        <motion.p 
          className="text-xl sm:text-2xl text-gray-500 dark:text-gray-500 mb-8 italic"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.2 }}
        >
          &ldquo;Đam mê code, không ngừng học hỏi&rdquo;
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ delay: 0.3 }}
        >
          <motion.a
            href="#contact"
            className="px-8 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-medium shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: '0 20px 25px -5px rgba(99, 102, 241, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            Liên hệ với tôi
          </motion.a>
          <motion.a
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-medium transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem thêm về tôi
          </motion.a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="mt-16"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <svg
            className="w-6 h-6 mx-auto text-primary"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
