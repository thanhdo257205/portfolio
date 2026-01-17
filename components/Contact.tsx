export default function Contact() {
  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
        </svg>
      ),
      label: 'Email',
      value: 'dothanh2572005@gmail.com',
      link: 'mailto:dothanh2572005@gmail.com',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
        </svg>
      ),
      label: 'GitHub',
      value: 'github.com/thanhdo257205',
      link: 'https://github.com/thanhdo257205',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
        </svg>
      ),
      label: 'Học tại',
      value: 'Đại học FPT Hà Nội',
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Liên hệ với <span className="text-blue-500">Tôi</span>
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Hãy kết nối và cùng nhau trao đổi về công nghệ! ☕
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {contactInfo.map((contact, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl text-center"
            >
              <div className="flex justify-center text-blue-500 mb-4">
                {contact.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{contact.label}</h3>
              {contact.link ? (
                <a
                  href={contact.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors break-all"
                >
                  {contact.value}
                </a>
              ) : (
                <p className="text-gray-400">{contact.value}</p>
              )}
            </div>
          ))}
        </div>

        {/* Additional message */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center shadow-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Sẵn sàng cho cơ hội mới! 🚀
          </h3>
          <p className="text-gray-100 text-lg mb-6">
            Mình đang tìm kiếm cơ hội thực tập hoặc làm việc part-time trong lĩnh vực Java Development. 
            Nếu bạn có vị trí phù hợp hoặc muốn trao đổi về công nghệ, đừng ngại liên hệ nhé!
          </p>
          <a
            href="mailto:dothanh2572005@gmail.com"
            className="inline-block px-8 py-3 bg-white text-blue-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105"
          >
            Gửi email cho tôi
          </a>
        </div>
      </div>
    </section>
  );
}
