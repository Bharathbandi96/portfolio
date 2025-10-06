import { Code, Database, Globe, Zap, Award, Users, Coffee } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Frontend Expertise",
      description: "React, Next.js, TypeScript, and modern CSS frameworks"
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Full-Stack Skills",
      description: "Node.js, Python, Express.js, and scalable API design"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Web Standards",
      description: "PWAs, accessibility (WCAG), and performance optimization"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance",
      description: "Core Web Vitals optimization and modern build tools"
    }
  ];

  const stats = [
    { icon: <Award className="w-5 h-5" />, label: "Years Experience", value: "5+" },
    { icon: <Users className="w-5 h-5" />, label: "Projects Completed", value: "20+" },
    { icon: <Coffee className="w-5 h-5" />, label: "Cups of Coffee", value: "∞" }
  ];

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">About Me</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A passionate senior developer who transforms complex business challenges
            into elegant, scalable digital solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">
              Building Modern Web Applications
            </h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm Bharath Bandi Ramakrishna, a senior full-stack developer based in Manchester.
              With over 5 years of experience, I've worked with startups and established companies,
              building everything from rapid MVPs to enterprise-scale applications.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              My expertise spans the full development stack - from crafting user interfaces
              to designing backend APIs and Databases. I'm passionate about creating accessible,
              performant web applications that scale effectively.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl hover:shadow-lg transition-all duration-300">
                  <div className="flex justify-center mb-3 text-blue-600">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-slate-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                React Expert
              </span>
              <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                AWS Certified
              </span>
              <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                Full-Stack
              </span>
              <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                Agile/Scrum
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg hover:bg-gray-100 transition-all duration-200 group">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 text-blue-600">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.title}</h4>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;