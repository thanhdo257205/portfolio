export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-center">
          Về <span className="text-blue-500">Tôi</span>
        </h2>
        
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-700">
          <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
            <p>
              👋 Xin chào! Mình là <span className="text-blue-500 font-semibold">Đỗ Hoàn Thành</span>, 
              hiện đang là sinh viên năm 2 tại <span className="text-purple-500 font-semibold">Đại học FPT Hà Nội</span>.
            </p>
            
            <p>
              ☕ Mình đang theo đuổi định hướng trở thành một <span className="text-blue-500 font-semibold">Java Backend Developer</span> chuyên nghiệp. 
              Với niềm đam mê về lập trình, mình luôn tìm tòi và học hỏi các công nghệ mới để nâng cao kỹ năng của bản thân.
            </p>
            
            <p>
              🎯 Mục tiêu của mình là phát triển các ứng dụng backend hiệu quả, tối ưu và có khả năng mở rộng cao. 
              Hiện tại, mình đang tập trung vào việc học sâu về <span className="text-blue-500 font-semibold">Spring Framework</span>, 
              <span className="text-blue-500 font-semibold"> Spring Boot</span>, và các công nghệ liên quan đến Java ecosystem.
            </p>
            
            <p>
              🚀 Mình tin rằng việc học hỏi không bao giờ ngừng lại, và mỗi dòng code đều là một cơ hội để cải thiện bản thân. 
              Hãy cùng kết nối và trao đổi về công nghệ nhé!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
