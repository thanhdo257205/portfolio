'use client';

import { motion } from 'framer-motion';
import { FiCoffee, FiClock } from 'react-icons/fi';
import { slideUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Projects() {
  const placeholderProjects = [
    {
      title: 'Spring Boot REST API',
      description: 'Một RESTful API sử dụng Spring Boot và MySQL',
      status: 'Đang phát triển',
      tags: ['Spring Boot', 'MySQL', 'REST API'],
    },
    {
      title: 'E-commerce Backend',
      description: 'Hệ thống backend cho trang thương mại điện tử',
      status: 'Đang phát triển',
      tags: ['Java', 'Spring', 'PostgreSQL'],
    },
    {
      title: 'Authentication Service',
      description: 'Dịch vụ xác thực với Spring Security và JWT',
      status: 'Đang phát triển',
      tags: ['Spring Security', 'JWT', 'Authentication'],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          Dự án của <span className="text-primary">Tôi</span>
        </motion.h2>
        
        {/* Coming Soon Banner */}
        <motion.div 
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ delay: 0.1 }}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-primary to-secondary rounded-2xl px-8 py-4 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <p className="text-3xl font-bold text-white mb-2">Coming Soon</p>
            <p className="text-lg text-gray-100">
              Tôi đang xây dựng các dự án thú vị. Hãy quay lại sau để xem!
            </p>
          </motion.div>
        </motion.div>

        {/* Placeholder Project Cards */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {placeholderProjects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-xl group"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Project icon/placeholder */}
              <motion.div 
                className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4"
                whileHover={{ rotate: 6 }}
                transition={{ duration: 0.3 }}
              >
                <FiCoffee className="text-3xl text-white" />
              </motion.div>

              <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">{project.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <motion.span
                    key={tag}
                    className="text-xs px-3 py-1 bg-primary/20 text-primary rounded-full"
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>

              {/* Status Badge */}
              <div className="flex items-center text-yellow-500">
                <FiClock className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium">{project.status}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Các dự án thực tế sẽ sớm được cập nhật tại đây!
          </p>
        </motion.div>
      </div>
    </section>
  );
}
