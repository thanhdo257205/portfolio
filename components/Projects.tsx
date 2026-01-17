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
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Dự án của <span className="text-blue-500">Tôi</span>
        </h2>
        
        {/* Coming Soon Banner */}
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl px-8 py-4 shadow-2xl transform hover:scale-105 transition-transform duration-300">
            <p className="text-3xl font-bold text-white mb-2">🚀 Coming Soon</p>
            <p className="text-lg text-gray-200">
              Tôi đang xây dựng các dự án thú vị. Hãy quay lại sau để xem!
            </p>
          </div>
        </div>

        {/* Placeholder Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {placeholderProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl group"
            >
              {/* Project icon/placeholder */}
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 group-hover:rotate-6 transition-transform">
                <span className="text-3xl">☕</span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
              <p className="text-gray-400 mb-4 text-sm">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Status Badge */}
              <div className="flex items-center text-yellow-400">
                <svg className="w-4 h-4 mr-2 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">{project.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-400 text-lg">
            Các dự án thực tế sẽ sớm được cập nhật tại đây! 💪
          </p>
        </div>
      </div>
    </section>
  );
}
