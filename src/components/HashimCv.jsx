import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Github, ExternalLink, Mail, Phone, MapPin, Code, Smartphone, Globe, Server, Database, Zap, Star, ArrowRight, Menu, X, Download, Monitor, ShoppingCart, Palette, Settings, Layers, Users } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Refs for sections
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    about: aboutRef,
    skills: skillsRef,
    projects: projectsRef,
    services: servicesRef,
    contact: contactRef
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll to section function
  const scrollToSection = (sectionName) => {
    const ref = sectionRefs[sectionName];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
      setActiveSection(sectionName);
      setIsMenuOpen(false);
    }
  };

  const skills = [
    { name: 'React', color: 'from-blue-500 to-cyan-500' },
    { name: 'React Native', color: 'from-purple-500 to-pink-500' },
    { name: 'Node.js', color: 'from-green-500 to-emerald-500' },
    { name: 'MongoDB', color: 'from-green-600 to-green-400' },
    { name: 'Express.js', color: 'from-gray-600 to-gray-400' },
    { name: 'JavaScript', color: 'from-yellow-500 to-orange-500' },
    { name: 'Tailwind CSS', color: 'from-teal-500 to-blue-500' },
    { name: 'Socket.io', color: 'from-indigo-500 to-purple-500' },
    { name: 'WebRTC', color: 'from-red-500 to-pink-500' },
  ];

  const projects = [
    {
      title: 'SerchBy - Local Business Platform',
      description: 'A comprehensive digital platform for local business owners to establish their online presence. Features business listings, search functionality, and customer engagement tools.',
      image: 'https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Bootstrap'],
      github: '#',
      live: 'https://www.serchby.com'
    },
    {
      title: 'SerchBy Mobile App',
      description: 'Cross-platform mobile application for SerchBy platform, enabling users to discover and connect with local businesses on-the-go with native performance.',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&h=300&fit=crop',
      tech: ['React Native', 'Redux', 'API Integration', 'Push Notifications'],
      github: '#',
      live: '#'
    },
    {
      title: 'Ebicedy - Restaurant & Business Management',
      description: 'Complete business management solution for restaurants and small businesses. Streamlines operations with inventory management, order tracking, and analytics dashboard.',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Chart.js'],
      github: '#',
      live: 'https://ebycedy.com'
    },
    {
      title: 'Real-time Teaching Platform',
      description: 'Interactive learning platform with real-time chat, video features, chat backup system, and comprehensive teaching tools for enhanced online education experience.',
      image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?w=500&h=300&fit=crop',
      tech: ['React', 'Socket.io', 'WebRTC', 'Node.js', 'MongoDB'],
      github: '#',
      live: '#'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Multiple custom e-commerce platforms and personal websites for various stores, featuring shopping carts, payment integration, and inventory management systems.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'Payment APIs', 'MongoDB', 'Tailwind CSS'],
      github: '#',
      live: '#'
    },
    {
      title: 'Custom Business Websites',
      description: 'Responsive, SEO-optimized websites for various businesses including portfolios, landing pages, and corporate sites with modern design and functionality.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop',
      tech: ['React', 'HTML5', 'CSS3', 'JavaScript', 'Bootstrap'],
      github: '#',
      live: '#'
    }
  ];

  const services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'Website Design & Development',
      description: 'Modern, responsive websites with stunning visual design and optimal user experience.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Cross-browser Compatible']
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Frontend Development',
      description: 'Interactive user interfaces using React, HTML5, CSS3, and modern JavaScript frameworks.',
      features: ['React Development', 'Interactive UI/UX', 'Performance Optimization', 'Modern JavaScript']
    },
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'E-commerce Websites',
      description: 'Complete online store solutions with payment integration and inventory management.',
      features: ['Shopping Cart', 'Payment Gateway', 'Inventory System', 'Order Management']
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Cross-platform mobile applications with React Native for iOS and Android.',
      features: ['Cross-platform', 'Native Performance', 'Push Notifications', 'Offline Support']
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Scalable backend solutions with Node.js, Express.js, and database integration.',
      features: ['RESTful APIs', 'Real-time Features', 'Database Design', 'Authentication']
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Custom Software Solutions',
      description: 'Tailored software applications designed specifically for your business needs.',
      features: ['Business Logic', 'Custom Features', 'Scalable Architecture', 'Integration Ready']
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Full-Stack Solutions',
      description: 'Complete end-to-end development from database to user interface.',
      features: ['MERN Stack', 'DevOps', 'Cloud Deployment', 'Performance Optimization']
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'CMS & Admin Panels',
      description: 'Content management systems and admin dashboards for easy content control.',
      features: ['User Management', 'Content Control', 'Analytics Dashboard', 'Role-based Access']
    }
  ];

  const testimonials = [];

  const ScrollIndicator = () => (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
      <ChevronDown className="w-6 h-6" />
    </div>
  );

  const GradientOrb = ({ className }) => (
    <div 
      className={`absolute rounded-full blur-3xl opacity-20 ${className}`}
      style={{
        background: `radial-gradient(circle, rgba(139,69,255,0.8) 0%, rgba(59,130,246,0.8) 50%, rgba(16,185,129,0.8) 100%)`,
        transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
      }}
    />
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-x-hidden">
      {/* Background Effects */}
      <GradientOrb className="w-96 h-96 -top-48 -left-48" />
      <GradientOrb className="w-80 h-80 top-1/2 -right-40" />
      <GradientOrb className="w-64 h-64 bottom-0 left-1/3" />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('home')}
            >
              Hashim Husain
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`hover:text-blue-400 transition-colors duration-300 relative group ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-400 transition-all duration-300 ${
                    activeSection === item.toLowerCase() ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/90 backdrop-blur-lg">
            <div className="px-4 py-2 space-y-2">
              {['Home', 'About', 'Skills', 'Projects', 'Services', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`block w-full text-left py-2 hover:text-blue-400 transition-colors duration-300 ${
                    activeSection === item.toLowerCase() ? 'text-blue-400' : ''
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={homeRef} className="min-h-screen flex items-center relative px-4 pt-16">
        <div className="max-w-7xl mx-auto w-full z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - About Me */}
            <div className="text-left space-y-6">
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-blue-400">Hi, I'm</h3>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hashim Husain
                </h1>
                <h2 className="text-2xl md:text-4xl font-bold text-white">
                  Full-Stack MERN Developer
                </h2>
              </div>
              
              <div className="space-y-4 text-gray-300">
                <p className="text-lg md:text-xl leading-relaxed">
                  Passionate developer specializing in modern web and mobile applications. 
                  I create digital solutions that help businesses grow and succeed in today's digital world.
                </p>
                
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  View My Work
                </button>
              
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-lg border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-blue-400">20+</div>
                  <div className="text-sm md:text-base text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-lg border border-white/10">
                  <div className="text-2xl md:text-3xl font-bold text-purple-400">1+</div>
                  <div className="text-sm md:text-base text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Right Side - Developer Illustration */}
            <div className="flex justify-center items-center lg:justify-end">
              <div className="relative">
                {/* Floating decoration elements */}
                <div className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20 animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 -right-12 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-30 animate-bounce delay-500"></div>
                
                {/* Main illustration container */}
                <div className="relative w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-lg border border-white/10 overflow-hidden shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Developer illustration */}
                  <img 
                    src="https://i.pinimg.com/1200x/ab/b5/33/abb533741bcd9b568b61308b20d49673.jpg" 
                    alt="Developer with laptop - Hashim Husain"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay with tech icons */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50">
                    <div className="grid grid-cols-3 gap-4 text-white">
                      <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-lg">
                        <Code className="w-8 h-8 mb-2 text-blue-400" />
                        <span className="text-xs">React</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-lg">
                        <Server className="w-8 h-8 mb-2 text-green-400" />
                        <span className="text-xs">Node.js</span>
                      </div>
                      <div className="flex flex-col items-center p-3 bg-white/10 rounded-lg backdrop-blur-lg">
                        <Database className="w-8 h-8 mb-2 text-purple-400" />
                        <span className="text-xs">MongoDB</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating tech badges */}
                <div className="absolute top-8 -left-4 px-3 py-1 bg-blue-600/20 backdrop-blur-lg rounded-full border border-blue-400/30 text-sm text-white animate-float">
                  ⚛️ React
                </div>
                <div className="absolute bottom-16 -left-6 px-3 py-1 bg-green-600/20 backdrop-blur-lg rounded-full border border-green-400/30 text-sm text-white animate-float delay-500">
                  🟢 Node.js
                </div>
                <div className="absolute top-16 -right-4 px-3 py-1 bg-purple-600/20 backdrop-blur-lg rounded-full border border-purple-400/30 text-sm text-white animate-float delay-1000">
                  📱 React Native
                </div>
              </div>
            </div>
          </div>
        </div>
        <ScrollIndicator />
      </section>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      {/* About Section */}
      <section ref={aboutRef} className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">
                Hello! I'm Hashim Husain
              </h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                A dedicated Full-Stack MERN Developer with a passion for creating innovative digital solutions. 
                With over a year of professional experience and currently working at CloudCore ID Solutions, 
                I've successfully delivered multiple projects ranging from local business platforms to e-commerce solutions.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey in web development has led me to master modern technologies like React, React Native, 
                Node.js, and MongoDB. I specialize in building scalable web applications, mobile apps, and 
                real-time communication systems that solve real-world problems for businesses and users.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                What sets me apart is my commitment to understanding each project's unique requirements and 
                delivering solutions that not only meet technical specifications but also drive business growth.
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-lg">
                  <div className="text-3xl font-bold text-blue-400">Multiple</div>
                  <div className="text-gray-300">Projects Delivered</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-lg backdrop-blur-lg">
                  <div className="text-3xl font-bold text-purple-400">1+</div>
                  <div className="text-gray-300">Years Experience</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                <Mail className="w-6 h-6 text-blue-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Email</h4>
                <p className="text-gray-300 break-all">hashimhusain1470@gmail.com</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                <Phone className="w-6 h-6 text-green-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">WhatsApp / Mobile</h4>
                <p className="text-gray-300">+91 8304025594</p>
              </div>
              <div className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10">
                <Star className="w-6 h-6 text-yellow-400 mb-2" />
                <h4 className="font-semibold text-white mb-1">Focus</h4>
                <p className="text-gray-300">Quality & Innovation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section ref={skillsRef} className="py-20 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="bg-white/5 backdrop-blur-lg rounded-lg p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="flex items-center justify-center mb-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${skill.color} flex items-center justify-center`}>
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white text-center group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text transition-all duration-300">
                  {skill.name}
                </h3>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h3 className="text-2xl font-bold text-white mb-8">Technologies & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'Bootstrap', 'Material-UI', 'Redux', 'Context API', 'Axios', 'JWT', 'Bcrypt', 'Multer', 'Cloudinary', 'Heroku', 'Netlify', 'Git', 'GitHub', 'VS Code', 'Postman', 'Figma'].map((tech) => (
                <span key={tech} className="px-4 py-2 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full text-sm text-white border border-blue-400/30 hover:border-blue-400 transition-all duration-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-white/5 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={project.github} className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                      <Github className="w-4 h-4 text-white" />
                    </a>
                    {project.live !== '#' && (
                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="p-2 bg-black/50 rounded-full hover:bg-black/70 transition-colors">
                        <ExternalLink className="w-4 h-4 text-white" />
                      </a>
                    )}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-blue-600/20 text-blue-300 rounded-full text-xs border border-blue-400/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group">
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Services I Offer
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="text-blue-400 mb-4 group-hover:text-purple-400 transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-gray-300 text-sm">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="py-20 px-4 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 leading-relaxed">
            Ready to bring your ideas to life? I'm available for freelance projects and would love to discuss how we can create something amazing together.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
              <p className="text-gray-300 text-center break-all">hashimhusain1470@gmail.com</p>
              <a href="mailto:hashimhusain1470@gmail.com" className="mt-2 text-blue-400 hover:text-blue-300 transition-colors">
                Send Email
              </a>
            </div>
            <div className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 hover:bg-white/10 transition-all duration-300">
              <Phone className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">WhatsApp / Mobile</h3>
              <p className="text-gray-300">+91 8304025594</p>
              <a href="https://wa.me/918304025594" target="_blank" rel="noopener noreferrer" className="mt-2 text-green-400 hover:text-green-300 transition-colors">
                Message on WhatsApp
              </a>
            </div>
          </div>
          
          <div className="text-center">
            <button className="px-12 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-2xl mr-4">
              <a href="mailto:hashimhusain1470@gmail.com" className="text-white">
                Let's Collaborate
              </a>
            </button>
            <button className="px-8 py-4 bg-green-600 hover:bg-green-700 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <a href="https://wa.me/918304025594" target="_blank" rel="noopener noreferrer" className="text-white flex items-center gap-2">
                <Phone className="w-5 h-5" />
                WhatsApp Me
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Hashim Husain
          </div>
          <p className="text-gray-400 mb-6">
            Full-Stack MERN Developer • Available for Freelance Work
          </p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:hashimhusain1470@gmail.com" className="text-gray-400 hover:text-blue-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://wa.me/918304025594" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-400 transition-colors">
              <Phone className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
          </div>
          <div className="mt-8 text-gray-500 text-sm">
            © 2025 Hashim Husain. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;