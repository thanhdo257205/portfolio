export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: '💻',
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
      icon: '🚀',
      skills: [
        { name: 'Spring Boot', level: 'Đang học' },
        { name: 'Spring Framework', level: 'Đang học' },
        { name: 'Spring Security', level: 'Đang học' },
        { name: 'JPA/Hibernate', level: 'Đang học' },
      ],
    },
    {
      title: 'Tools & Technologies',
      icon: '🛠️',
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
      icon: '🗄️',
      skills: [
        { name: 'MySQL', level: 'Trung bình' },
        { name: 'PostgreSQL', level: 'Cơ bản' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Kỹ năng <span className="text-blue-500">&</span> Công nghệ
        </h2>
        <p className="text-gray-400 text-center mb-12 text-lg">
          Những công nghệ mình đang sử dụng và học hỏi
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 border border-gray-700 hover:border-blue-500 transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-2xl font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="space-y-3">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between">
                    <span className="text-gray-300 font-medium">{skill.name}</span>
                    <span className={`text-sm px-3 py-1 rounded-full ${
                      skill.level === 'Chính' || skill.level === 'Trung bình'
                        ? 'bg-blue-500/20 text-blue-400'
                        : 'bg-purple-500/20 text-purple-400'
                    }`}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Currently Learning Section */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-6 shadow-2xl">
            <h3 className="text-xl font-bold text-white mb-3">📚 Đang tập trung học</h3>
            <p className="text-gray-200 text-lg">
              Spring Security • JPA/Hibernate • RESTful APIs • Microservices
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
