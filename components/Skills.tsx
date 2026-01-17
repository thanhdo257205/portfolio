'use client';

import { motion } from 'framer-motion';
import { FiCode, FiZap, FiTool, FiDatabase } from 'react-icons/fi';
import { slideUp, staggerContainer, staggerItem } from '@/lib/animations';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: <FiCode className="text-3xl" />,
      bgColor: 'bg-blue-500/10 dark:bg-blue-500/20',
      borderColor: 'border-blue-500/50 hover:border-blue-500',
      iconColor: 'text-blue-500',
      skills: [
        { name: 'Java', level: 'Chính' },
        { name: 'SQL', level: 'Trung bình' },
        { name: 'HTML', level: 'Trung bình' },
        { name: 'CSS', level: 'Trung bình' },
        { name: 'JavaScript', level: 'Cơ bản' },
      ],
    },
    {
      title: 'Frameworks & Libraries',
      icon: <FiZap className="text-3xl" />,
      bgColor: 'bg-purple-500/10 dark:bg-purple-500/20',
      borderColor: 'border-purple-500/50 hover:border-purple-500',
      iconColor: 'text-purple-500',
      skills: [
        { name: 'Spring Boot', level: 'Đang học' },
        { name: 'Spring Framework', level: 'Đang học' },
        { name: 'Spring Security', level: 'Đang học' },
        { name: 'JPA/Hibernate', level: 'Đang học' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: <FiTool className="text-3xl" />,
      bgColor: 'bg-emerald-500/10 dark:bg-emerald-500/20',
      borderColor: 'border-emerald-500/50 hover:border-emerald-500',
      iconColor: 'text-emerald-500',
      skills: [
        { name: 'Git', level: 'Trung bình' },
        { name: 'GitHub', level: 'Trung bình' },
        { name: 'IntelliJ IDEA', level: 'Trung bình' },
        { name: 'VS Code', level: 'Trung bình' },
        { name: 'RESTful APIs', level: 'Đang học' },
      ],
    },
    {
      title: 'Databases',
      icon: <FiDatabase className="text-3xl" />,
      bgColor: 'bg-orange-500/10 dark:bg-orange-500/20',
      borderColor: 'border-orange-500/50 hover:border-orange-500',
      iconColor: 'text-orange-500',
      skills: [
        { name: 'MySQL', level: 'Trung bình' },
        { name: 'PostgreSQL', level: 'Cơ bản' },
        { name: 'SQL Server', level: 'Cơ bản' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-4 text-center text-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          Kỹ năng <span className="text-primary">&</span> Công nghệ
        </motion.h2>
        <motion.p 
          className="text-gray-600 dark:text-gray-400 text-center mb-12 text-lg"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
          transition={{ delay: 0.1 }}
        >
          Những công nghệ mình đang sử dụng và học hỏi
        </motion.p>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              className={`${category.bgColor} rounded-2xl p-6 border ${category.borderColor} transition-all duration-300 shadow-xl`}
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className="flex items-center mb-4">
                <span className={`${category.iconColor} mr-3`}>{category.icon}</span>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex items-center justify-between"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      skill.level === 'Chính' || skill.level === 'Trung bình'
                        ? 'bg-primary/20 text-primary'
                        : 'bg-secondary/20 text-secondary'
                    }`}>
                      {skill.level}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Currently Learning Section */}
        <motion.div 
          className="mt-12 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          <motion.div 
            className="inline-block bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 shadow-2xl"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl font-bold text-white mb-3">Đang tập trung học</h3>
            <p className="text-gray-100 text-lg">
              Spring Security • JPA/Hibernate • RESTful APIs • Microservices
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
