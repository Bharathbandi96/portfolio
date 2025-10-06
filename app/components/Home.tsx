import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const scrollToNext = () => {
    const element = document.querySelector('#about');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden py-16 bg-gradient-to-br from-slate-900 to-blue-900">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <div className="mb-4">
            <span className="inline-block bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 px-6 py-2 rounded-full text-sm font-medium border border-emerald-400/30 backdrop-blur-sm">
              ✨ Available for new opportunities
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            <span className="text-gray-200 text-lg sm:text-2xl font-light block mb-2 tracking-wide">
              Hello, I'm Bharath Bandi Ramakrishna
            </span>
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
              Senior Full-Stack Developer
            </span>
            <br />
            {/* <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent text-2xl sm:text-3xl lg:text-4xl">
              Developer & Architect
            </span> */}
          </h1>

          <p className="text-base sm:text-lg text-gray-300 mb-6 max-w-2xl mx-auto leading-relaxed">
            I craft exceptional digital experiences that blend cutting-edge technology with intuitive design.
            With <span className="text-cyan-400 font-semibold">5+ years</span> of expertise in modern web technologies,
            I specialize in building scalable applications that drive business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button
              onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-500/30 backdrop-blur-sm"
            >
              🚀 Explore My Work
            </button>
            <a
              href={process.env.NEXT_PUBLIC_CV_DOWNLOAD_URL as string}
              download={process.env.NEXT_PUBLIC_CV_DOWNLOAD_URL as string}
              target='_blank'
              className="border-2 border-gray-300/50 text-gray-200 hover:bg-white/10 hover:border-white/50 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 backdrop-blur-sm hover:scale-105">
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="flex gap-6 justify-center mb-6">
            <a href="https://github.com/Bharathbandi96" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125 hover:shadow-lg p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm">
              <Github size={28} />
            </a>
            <a href="https://www.linkedin.com/in/bharath-bandi-ramakrishna/" target="_blank" rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:shadow-lg p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm">
              <Linkedin size={28} />
            </a>
            <a href="mailto:bharathbandi96]@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition-all duration-300 transform hover:scale-125 hover:shadow-lg p-3 rounded-xl hover:bg-white/10 backdrop-blur-sm">
              <Mail size={28} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-gray-300 hover:text-white transition-all duration-300 animate-bounce hover:bg-white/10 p-2 rounded-full backdrop-blur-sm"
      >
        <ChevronDown size={24} />
      </button>
    </section>
  );
};

export default Hero;