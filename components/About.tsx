'use client';

import { motion } from 'framer-motion';
import { slideUp, fadeIn } from '@/lib/animations';

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-gray-800 dark:text-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={slideUp}
        >
          Về <span className="text-primary">Tôi</span>
        </motion.h2>
        
        <motion.div 
          className="bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          whileHover={{ scale: 1.01 }}
          transition={{ duration: 0.3 }}
        >
          <div className="space-y-6 text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
            <p>
              Xin chào! Mình là <span className="text-primary font-semibold">Đỗ Hoàn Thành</span>, 
              hiện đang là sinh viên năm 2 tại <span className="text-secondary font-semibold">Đại học FPT Hà Nội</span>.
            </p>
            
            <p>
              Mình đang theo đuổi định hướng trở thành một <span className="text-primary font-semibold">Java Backend Developer</span> chuyên nghiệp. 
              Với niềm đam mê về lập trình, mình luôn tìm tòi và học hỏi các công nghệ mới để nâng cao kỹ năng của bản thân.
            </p>
            
            <p>
              Mục tiêu của mình là phát triển các ứng dụng backend hiệu quả, tối ưu và có khả năng mở rộng cao. 
              Hiện tại, mình đang tập trung vào việc học sâu về <span className="text-primary font-semibold">Spring Framework</span>, 
              <span className="text-primary font-semibold"> Spring Boot</span>, và các công nghệ liên quan đến Java ecosystem.
            </p>
            
            <p>
              Mình tin rằng việc học hỏi không bao giờ ngừng lại, và mỗi dòng code đều là một cơ hội để cải thiện bản thân. 
              Hãy cùng kết nối và trao đổi về công nghệ nhé!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
