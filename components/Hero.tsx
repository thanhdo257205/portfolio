'use client';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Avatar with initials */}
        <div className="mb-8 flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            ĐT
          </div>
        </div>

        {/* Name and Title */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
          Đỗ Hoàn Thành
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl text-gray-400 mb-6">
          Java Developer | Student @ FPT University
        </h2>

        <p className="text-xl sm:text-2xl text-gray-500 mb-8 italic">
          &ldquo;Đam mê code, không ngừng học hỏi&rdquo; ☕
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/50"
          >
            Liên hệ với tôi
          </a>
          <a
            href="#about"
            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-500 hover:bg-blue-600 hover:text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105"
          >
            Xem thêm về tôi
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-blue-500"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </div>
    </section>
  );
}
