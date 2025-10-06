import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      position: "CTO at TechCorp Solutions",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Alex is an exceptional developer and leader. His ability to architect scalable solutions while mentoring the team is remarkable. Under his leadership, our development velocity increased by 200% while maintaining the highest code quality standards.",
      rating: 5,
      project: "Enterprise SaaS Platform"
    },
    {
      name: "Michael Rodriguez",
      position: "Product Manager at InnovateLab",
      company: "InnovateLab",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Working with Alex was a game-changer for our fintech platform. His deep understanding of both frontend and backend technologies, combined with his attention to security and performance, delivered results that exceeded all expectations.",
      rating: 5,
      project: "Real-time Trading Platform"
    },
    {
      name: "Emily Watson",
      position: "Founder & CEO at StartupXYZ",
      company: "StartupXYZ",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Alex joined us at a critical stage and single-handedly built our entire frontend architecture. His expertise in React and modern web technologies helped us scale from 0 to 100K users. Simply outstanding work!",
      rating: 5,
      project: "E-commerce Platform"
    },
    {
      name: "David Kim",
      position: "Senior Developer at TechCorp",
      company: "TechCorp",
      image: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "As Alex's mentee, I can say he's not just a brilliant developer but also an incredible teacher. His code reviews are thorough, his feedback is constructive, and his passion for clean, maintainable code is infectious.",
      rating: 5,
      project: "Microservices Architecture"
    },
    {
      name: "Lisa Thompson",
      position: "Design Director at CreativeAgency",
      company: "CreativeAgency",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Alex has an rare ability to bridge the gap between design and development. He understands user experience deeply and implements designs with pixel-perfect precision while suggesting improvements that enhance usability.",
      rating: 5,
      project: "Brand Portfolio Website"
    },
    {
      name: "James Wilson",
      position: "Freelance Client",
      company: "E-commerce Startup",
      image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150",
      content: "Alex delivered our MVP in record time without compromising on quality. His communication throughout the project was excellent, and he provided valuable insights that improved our initial concept significantly.",
      rating: 5,
      project: "MVP Development"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">What People Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Testimonials from colleagues and clients I've worked with
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 relative">
              {/* Quote icon */}
              <div className="absolute top-6 right-6 text-blue-200">
                <Quote size={24} />
              </div>
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              
              {/* Content */}
              <p className="text-gray-700 mb-4 leading-relaxed italic text-sm">
                "{testimonial.content}"
              </p>
              
              {/* Project */}
              <div className="mb-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                  {testimonial.project}
                </span>
              </div>
              
              {/* Author */}
              <div className="flex items-center gap-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
                <div>
                  <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                  <p className="text-xs text-blue-600 font-medium">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;