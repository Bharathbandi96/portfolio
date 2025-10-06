import { ExternalLink, Github, Star } from 'lucide-react';
import { projects } from './data';

const Projects = () => {

  return (
    <section id="projects" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real-world applications I've built that solve actual business problems
          </p>
        </div>

        <div className="grid gap-8">
          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-8">
            {projects.filter(p => p.featured).map((project, index) => (
              <div key={index} className="group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Star size={14} />
                    Featured
                  </div>
                  {/* <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs">
                    {project.metrics}
                  </div> */}
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{project.title}</h3>
                  <p title={project.description} className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-slate-900 transition-colors font-medium"
                    >
                      <Github size={18} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors font-medium"
                    >
                      <ExternalLink size={18} />
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Other Projects Grid */}
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Other Projects</h3>
            <div className={`grid md:grid-cols-2 justify-center lg:grid-cols-3 gap-6`}>
              {projects.filter(p => !p.featured).map((project, index) => (
                <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1 border border-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover"
                  />
                  <div className="p-4">
                    <h4 className="font-semibold text-slate-900 mb-2">{project.title}</h4>
                    <p title={project.description} className="text-sm text-gray-600 mb-2 line-clamp-3">{project.description}</p>
                    {/* <p className="text-xs text-blue-600 font-medium mb-3">{project.metrics}</p> */}
                    <div className="flex gap-3">
                      <a href={project.github} className="text-gray-500 hover:text-slate-900 transition-colors">
                        <Github size={16} />
                      </a>
                      <a href={project.live} className="text-blue-500 hover:text-blue-700 transition-colors">
                        <ExternalLink size={16} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;