'use client';

import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiMapPin, FiSend } from 'react-icons/fi';
import { slideUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Contact() {
  const contactInfo = [
    {
      icon: <FiMail className="w-8 h-8" />,
      label: 'Email',
      value: 'dothanh2572005@gmail.com',
      link: 'mailto:dothanh2572005@gmail.com',
    },
    {
      icon: <FiGithub className="w-8 h-8" />,
      label: 'GitHub',
      value: 'github.com/thanhdo257205',
      link: 'https://github.com/thanhdo257205',
    },
    {
      icon: <FiMapPin className="w-8 h-8" />,
      label: 'Học tại',
      value: 'Đại học FPT Hà Nội',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          Liên hệ với <span className="text-primary">Tôi</span>
        </motion.h2>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ delay: 0.1 }}
        >
          Hãy kết nối và cùng nhau trao đổi về công nghệ!
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {contactInfo.map((contact, index) => (
            <motion.div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary dark:hover:border-primary transition-all duration-300 shadow-xl text-center"
              variants={staggerItem}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex justify-center text-primary mb-4">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-2">{contact.label}</h3>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-colors break-all"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-600 dark:text-gray-400">{contact.value}</p>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional message */}
        <motion.div 
          className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-center shadow-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          whileHover={{ scale: 1.02 }}
        >
          <h3 className="text-2xl font-bold text-white mb-4">
            Sẵn sàng cho cơ hội mới!
          </h3>
          <p className="text-gray-100 text-lg mb-6">
            Mình đang tìm kiếm cơ hội thực tập hoặc làm việc part-time trong lĩnh vực Java Development. 
            Nếu bạn có vị trí phù hợp hoặc muốn trao đổi về công nghệ, đừng ngại liên hệ nhé!
          </p>
          <motion.a
            href="mailto:dothanh2572005@gmail.com"
            className="inline-flex items-center px-8 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FiSend className="mr-2" />
            Gửi email cho tôi
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
