import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const SchoolInfo = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);

  const galleryImages = [
    { src: "/assets/img/c1.jpg", title: "Kindergarten Classroom", description: "Modern learning environment for our youngest students" },
    { src: "/assets/img/p1.jpg", title: "Primary Classroom", description: "Well-equipped classrooms for primary education" },
    { src: "/assets/img/p7.jpg", title: "Upper Primary", description: "Advanced learning facilities for senior primary students" },
    { src: "/assets/img/g1.jpg", title: "School Compound", description: "Safe and spacious school environment" },
    { src: "/assets/img/t1.jpg", title: "Teaching Staff", description: "Dedicated and qualified educators" },
    { src: "/assets/img/2L4A7403.jpg", title: "Cultural Events", description: "Celebrating diversity and culture" }
  ];

  const programs = [
    {
      name: "Kindergarten Program",
      ageRange: "3-5 years",
      classes: "K1, K2, Pre-Primary",
      focus: "Play-based learning, social skills, creativity",
      icon: "bi-heart-fill"
    },
    {
      name: "Primary Education",
      ageRange: "6-13 years", 
      classes: "Primary 1 - Primary 7",
      focus: "Academic excellence, character development, critical thinking",
      icon: "bi-book-fill"
    },
    {
      name: "Co-curricular Activities",
      ageRange: "All ages",
      classes: "All levels",
      focus: "Sports, arts, music, leadership development",
      icon: "bi-palette-fill"
    }
  ];

  const facilities = [
    { name: "Modern Classrooms", description: "Well-ventilated, spacious classrooms with modern teaching aids", icon: "bi-building" },
    { name: "Computer Laboratory", description: "Equipped with modern computers for digital literacy", icon: "bi-laptop" },
    { name: "Library", description: "Well-stocked library with books for all age groups", icon: "bi-book" },
    { name: "Playground", description: "Safe outdoor play areas for physical development", icon: "bi-tree" },
    { name: "Dining Hall", description: "Clean dining facilities serving nutritious meals", icon: "bi-cup-hot" },
    { name: "Transport Service", description: "Safe and reliable school transport", icon: "bi-bus-front" },
    { name: "Medical Room", description: "First aid and basic medical care facilities", icon: "bi-heart-pulse" },
    { name: "Boarding Facilities", description: "Comfortable accommodation for boarding students", icon: "bi-house-heart" }
  ];

  // Auto-scroll gallery
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGalleryIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Our School</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive information about Brain Trust School Nansana - Where learning is an adventure, and every student is valued.
            </p>
          </div>
          <nav className="text-blue-200 mt-8 text-center">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">•</span>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
            <span className="mx-2">•</span>
            <span>School Information</span>
          </nav>
        </div>
      </div>

      {/* Navigation Menu */}
      <div className="bg-white shadow-lg sticky top-0 z-40">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-2 py-4">
            {[
              { id: 'introduction', label: 'Introduction', icon: 'bi-info-circle' },
              { id: 'history', label: 'History', icon: 'bi-clock-history' },
              { id: 'mission', label: 'Mission & Vision', icon: 'bi-bullseye' },
              { id: 'location', label: 'Location', icon: 'bi-geo-alt' },
              { id: 'programs', label: 'Programs', icon: 'bi-mortarboard' },
              { id: 'facilities', label: 'Facilities', icon: 'bi-building' },
              { id: 'gallery', label: 'Gallery', icon: 'bi-images' },
              { id: 'contact', label: 'Contact', icon: 'bi-envelope' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600'
                }`}
              >
                <i className={`${item.icon} text-sm`}></i>
                <span className="hidden sm:inline">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-12">
        
        {/* Introduction Section */}
        <section id="introduction" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-info-circle text-blue-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Welcome to Brain Trust School Nansana</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Brain Trust School Nansana is a premier educational institution dedicated to providing quality education 
                  in a nurturing and supportive environment. Since our establishment in 2014, we have been committed to 
                  fostering academic excellence, character development, and holistic growth in every child.
                </p>
                <p className="text-slate-600 leading-relaxed mb-6">
                  Our school serves as a mixed day and boarding institution, offering comprehensive educational programs 
                  from kindergarten through primary level. We believe that every child is unique and deserves personalized 
                  attention to reach their full potential.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-slate-800 mb-2">Our Approach</h4>
                    <p className="text-slate-600 text-sm">Child-centered learning with emphasis on creativity and critical thinking</p>
                  </div>
                  <div className="bg-green-50 p-6 rounded-xl">
                    <h4 className="font-bold text-slate-800 mb-2">Our Community</h4>
                    <p className="text-slate-600 text-sm">Inclusive environment welcoming students from diverse backgrounds</p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <img 
                  src="/assets/img/badge_prev_ui.png" 
                  alt="School Logo" 
                  className="w-48 h-48 mx-auto rounded-full shadow-2xl border-8 border-blue-100 mb-6"
                />
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold mb-2">Brain Trust School Nansana</h3>
                  <p className="text-blue-100">Where learning is an adventure, and every student is valued</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* History Section */}
        <section id="history" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-clock-history text-green-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our History & Foundation</h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>
                
                <div className="space-y-12">
                  <div className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2014
                    </div>
                    <div className="flex-1 bg-blue-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">School Foundation</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Brain Trust School Nansana was established with a vision to provide quality education 
                        accessible to children in the Nansana community. Founded with the mission to create 
                        a nurturing learning environment that promotes both academic excellence and character development.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2015
                    </div>
                    <div className="flex-1 bg-green-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Official Registration</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Received official registration (PPS/B/313) and UNEB recognition (538549), 
                        establishing our credibility and commitment to educational standards. 
                        This milestone marked our formal entry into Uganda's educational system.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2018
                    </div>
                    <div className="flex-1 bg-purple-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Facility Expansion</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Expanded our facilities to include modern classrooms, computer laboratory, 
                        and improved playground areas. This expansion allowed us to accommodate 
                        more students and enhance our educational offerings.
                      </p>
                    </div>
                  </div>
                  
                  <div className="relative flex items-start space-x-8">
                    <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                      2025
                    </div>
                    <div className="flex-1 bg-orange-50 p-6 rounded-xl">
                      <h3 className="text-xl font-bold text-slate-800 mb-3">Continued Excellence</h3>
                      <p className="text-slate-600 leading-relaxed">
                        Today, we continue to serve the community with dedication, maintaining our 
                        commitment to educational excellence while adapting to modern teaching methods 
                        and technologies to prepare students for the future.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section id="mission" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-bullseye text-purple-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Mission & Vision</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-flag text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Mission</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  To provide quality, affordable education that nurtures the intellectual, social, 
                  emotional, and physical development of every child in a safe, supportive, and 
                  stimulating environment.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-blue-600 mt-1"></i>
                    <span className="text-slate-600">Foster academic excellence and critical thinking</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-blue-600 mt-1"></i>
                    <span className="text-slate-600">Develop strong moral character and values</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-blue-600 mt-1"></i>
                    <span className="text-slate-600">Promote creativity and innovation</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-2xl">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-eye text-white text-2xl"></i>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 mb-4">Our Vision</h3>
                </div>
                <p className="text-slate-700 leading-relaxed mb-6">
                  To be a leading educational institution that produces confident, competent, 
                  and compassionate individuals who contribute positively to society and excel 
                  in their chosen fields.
                </p>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-star text-green-600 mt-1"></i>
                    <span className="text-slate-600">Excellence in education and character</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-star text-green-600 mt-1"></i>
                    <span className="text-slate-600">Global competitiveness with local values</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-star text-green-600 mt-1"></i>
                    <span className="text-slate-600">Lifelong learning and adaptation</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Core Values */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Our Core Values</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: 'bi-heart', title: 'Integrity', desc: 'Honesty and moral uprightness in all we do' },
                  { icon: 'bi-people', title: 'Respect', desc: 'Valuing diversity and treating everyone with dignity' },
                  { icon: 'bi-trophy', title: 'Excellence', desc: 'Striving for the highest standards in everything' },
                  { icon: 'bi-lightbulb', title: 'Innovation', desc: 'Embracing creativity and new ways of learning' }
                ].map((value, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`bi ${value.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{value.title}</h4>
                    <p className="text-slate-600 text-sm">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Location Section */}
        <section id="location" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-geo-alt text-red-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Location</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl mb-8">
                  <h3 className="text-2xl font-bold text-slate-800 mb-6">Address & Contact</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-geo-alt text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Physical Address</h4>
                        <p className="text-slate-600">Nansana Kabumbi<br />Mpanga Road<br />Uganda</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-telephone text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Phone Numbers</h4>
                        <p className="text-slate-600">+256 751 604 372<br />+256 392 080 428</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-envelope text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Email</h4>
                        <p className="text-slate-600">briantrustschool@gmail.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h4 className="font-bold text-slate-800 mb-4">How to Find Us</h4>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <i className="bi bi-arrow-right text-blue-600 mt-1"></i>
                      <span>Located in Nansana Kabumbi area</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="bi bi-arrow-right text-blue-600 mt-1"></i>
                      <span>Accessible via Mpanga Road</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="bi bi-arrow-right text-blue-600 mt-1"></i>
                      <span>Public transport available</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <i className="bi bi-arrow-right text-blue-600 mt-1"></i>
                      <span>School transport service provided</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-slate-100 rounded-2xl p-4 h-96 mb-6">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d488.82568476979407!2d32.52760059145552!3d0.3710037671084282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjInMTYuNiJOIDMywrAzMSczOS42IkU!5e1!3m2!1sen!2sug!4v1727300790086!5m2!1sen!2sug"
                    className="w-full h-full rounded-xl border-0"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-xl text-center">
                    <i className="bi bi-clock text-green-600 text-2xl mb-2"></i>
                    <h4 className="font-bold text-slate-800 text-sm">School Hours</h4>
                    <p className="text-slate-600 text-xs">Mon-Fri: 7AM-5PM</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl text-center">
                    <i className="bi bi-calendar text-blue-600 text-2xl mb-2"></i>
                    <h4 className="font-bold text-slate-800 text-sm">Visit Days</h4>
                    <p className="text-slate-600 text-xs">Sat: 8AM-12PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section id="programs" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-mortarboard text-indigo-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Programs Offered</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive educational programs designed to nurture young minds from early childhood through primary education.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {programs.map((program, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`bi ${program.icon} text-white text-2xl`}></i>
                    </div>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">{program.name}</h3>
                    <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {program.ageRange}
                    </span>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-slate-800 mb-2">Classes Available</h4>
                      <p className="text-slate-600 text-sm">{program.classes}</p>
                    </div>
                    
                    <div className="bg-white p-4 rounded-lg">
                      <h4 className="font-bold text-slate-800 mb-2">Focus Areas</h4>
                      <p className="text-slate-600 text-sm">{program.focus}</p>
                    </div>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <Link 
                      to={program.name.includes('Kindergarten') ? '/services/kindergarten' : '/services/primary'}
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Additional Services */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Additional Services</h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { icon: 'bi-bus-front', title: 'Transport', desc: 'Safe school transport service' },
                  { icon: 'bi-cup-hot', title: 'Meals', desc: 'Nutritious daily meals provided' },
                  { icon: 'bi-shield-check', title: 'Day Care', desc: 'Extended care services available' },
                  { icon: 'bi-house-heart', title: 'Boarding', desc: 'Comfortable boarding facilities' }
                ].map((service, index) => (
                  <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <i className={`bi ${service.icon} text-blue-600 text-xl`}></i>
                    </div>
                    <h4 className="font-bold text-slate-800 mb-2">{service.title}</h4>
                    <p className="text-slate-600 text-sm">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Facilities Section */}
        <section id="facilities" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-building text-orange-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Our Facilities</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Modern infrastructure and amenities designed to support effective learning and student development.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-50 to-orange-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-14 h-14 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                      <i className={`bi ${facility.icon} text-white text-xl`}></i>
                    </div>
                    <h3 className="font-bold text-slate-800 mb-3">{facility.name}</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">{facility.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Facility Highlights */}
            <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-center text-slate-800 mb-8">Why Our Facilities Matter</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-shield-check text-white text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Safety First</h4>
                  <p className="text-slate-600 text-sm">All facilities are designed with student safety as the top priority</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-lightbulb text-white text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Modern Learning</h4>
                  <p className="text-slate-600 text-sm">Contemporary facilities that support innovative teaching methods</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className="bi bi-heart text-white text-2xl"></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">Comfort & Care</h4>
                  <p className="text-slate-600 text-sm">Comfortable environments that make students feel at home</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-images text-pink-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">School Gallery</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Take a visual tour of our school facilities, classrooms, and vibrant school life.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  {galleryImages.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        index === currentGalleryIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <img 
                        src={image.src} 
                        alt={image.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                      <div className="absolute bottom-6 left-6 text-white">
                        <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                        <p className="text-blue-200">{image.description}</p>
                      </div>
                    </div>
                  ))}
                  
                  {/* Gallery indicators */}
                  <div className="absolute bottom-4 right-4 flex space-x-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentGalleryIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentGalleryIndex ? 'bg-white' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <div className="space-y-6">
                  <div className="bg-pink-50 p-6 rounded-xl">
                    <h3 className="text-xl font-bold text-slate-800 mb-4">What You'll See</h3>
                    <ul className="space-y-3">
                      <li className="flex items-start space-x-3">
                        <i className="bi bi-check-circle text-pink-600 mt-1"></i>
                        <span className="text-slate-600">Modern, well-equipped classrooms</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="bi bi-check-circle text-pink-600 mt-1"></i>
                        <span className="text-slate-600">Happy students engaged in learning</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="bi bi-check-circle text-pink-600 mt-1"></i>
                        <span className="text-slate-600">Dedicated teaching staff</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="bi bi-check-circle text-pink-600 mt-1"></i>
                        <span className="text-slate-600">School events and celebrations</span>
                      </li>
                      <li className="flex items-start space-x-3">
                        <i className="bi bi-check-circle text-pink-600 mt-1"></i>
                        <span className="text-slate-600">Safe and spacious compound</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="text-center">
                    <Link 
                      to="/gallery"
                      className="inline-block bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                    >
                      <i className="bi bi-images mr-2"></i>
                      View Full Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-20">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center mb-12">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-envelope text-teal-600 text-3xl"></i>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-6">Get In Touch</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Ready to join our school community? Contact us today to learn more or schedule a visit.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="bg-teal-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-teal-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-telephone text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Phone</h4>
                        <p className="text-slate-600">+256 751 604 372 / +256 392 080 428</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-envelope text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Email</h4>
                        <p className="text-slate-600">briantrustschool@gmail.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                        <i className="bi bi-geo-alt text-white"></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800">Address</h4>
                        <p className="text-slate-600">Nansana Kabumbi, Mpanga Road, Uganda</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">Office Hours</h3>
                  <div className="space-y-2 text-slate-600">
                    <p><strong>Monday - Friday:</strong> 7:00 AM - 5:00 PM</p>
                    <p><strong>Saturday:</strong> 8:00 AM - 12:00 PM</p>
                    <p><strong>Sunday:</strong> Closed</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-xl font-bold text-slate-800 mb-6">Ready to Join Us?</h3>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-teal-600 mt-1"></i>
                    <span className="text-slate-600">Schedule a school visit</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-teal-600 mt-1"></i>
                    <span className="text-slate-600">Meet our teaching staff</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-teal-600 mt-1"></i>
                    <span className="text-slate-600">Tour our facilities</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <i className="bi bi-check-circle text-teal-600 mt-1"></i>
                    <span className="text-slate-600">Discuss enrollment options</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <Link 
                    to="/contact"
                    className="block w-full bg-teal-600 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-teal-700 transition-colors"
                  >
                    <i className="bi bi-envelope mr-2"></i>
                    Send Us a Message
                  </Link>
                  
                  <a 
                    href="tel:+256751604372"
                    className="block w-full bg-green-600 text-white text-center px-6 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors"
                  >
                    <i className="bi bi-telephone mr-2"></i>
                    Call Us Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};