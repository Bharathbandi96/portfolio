import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { updateContactForm, resetContactForm, setFormSubmitting, setFormSubmitted, setStatusState } from '../store/slices/portfolioSlice';

const Contact = () => {
  const dispatch = useAppDispatch();
  const { contactForm, isFormSubmitting, statusMessage, statusCode } = useAppSelector((state) => state.portfolio);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    dispatch(updateContactForm({
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    const { name, email, message } = contactForm;
    e.preventDefault();
    dispatch(setFormSubmitting(true));
    dispatch(setStatusState({ statusMessage: "Sending...", statusCode: 200 }))
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/sendEmail`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message
        }),
      });
      const result = await res.json();
      if (result.success) {
        dispatch(setFormSubmitting(false));
        dispatch(setFormSubmitted(true));
        dispatch(resetContactForm());
        dispatch(setStatusState({ statusMessage: "Message sent successfully! I'll get back to you soon.", statusCode: 200 }))
      } else {
        dispatch(setFormSubmitting(false));
        dispatch(setFormSubmitted(false));
        dispatch(setStatusState({ statusMessage: "Failed to send message.", statusCode: 500 }))
      }
    } catch {
      dispatch(setFormSubmitting(false));
      dispatch(setFormSubmitted(false));
      dispatch(setStatusState({ statusMessage: "There is error in handling mail service", statusCode: 500 }))
      setFormSubmitting(false)
    }
    finally {
      setTimeout(() => {
        dispatch(setStatusState({ statusMessage: "", statusCode: -1 }))
        dispatch(resetContactForm());
      }, 3000)
    }
  };

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      detail: "bharathbandi96@gmail.com",
      link: "mailto:bharathbandi96@gmail.com"
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Phone",
      detail: "+44 777 051 4283",
      link: "tel:+447770514283"
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Location",
      detail: "Manchester, United Kingdom",
      link: "#"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gradient-to-br from-slate-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Let's Work Together</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I'm available for freelance projects and full-time opportunities.
              Whether you need to build an MVP or scale your development team,
              I'd love to hear from you.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-all duration-200"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center text-white">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{item.title}</h4>
                    <p className="text-gray-300">{item.detail}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={contactForm.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-300/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={contactForm.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-gray-300/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={contactForm.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={contactForm.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/10 border border-gray-300/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>
                <div className={`${statusCode === 200 ? 'text-green-400' : 'text-red-500'} text-center h-5 !mt-3`}>
                  {statusMessage}
                </div>
              <button
                type="submit"
                disabled={isFormSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg font-medium transition-all duration-200 flex items-center justify-center gap-2"
              >
                {isFormSubmitting ? 'Sending...' : 'Send Message'}
                {!isFormSubmitting && <Send size={18} />}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;