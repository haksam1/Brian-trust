import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      title: "Kindergarten",
      description: "Focused on play-based learning and foundational skills in a fun and engaging way. Our kindergarten program nurtures creativity and builds confidence.",
      icon: "bi bi-heart-fill",
      link: "/services/kindergarten",
      color: "from-pink-500 to-rose-500",
      bgColor: "from-pink-50 to-rose-50",
      classes: "3 classes",
      ageRange: "3-5 years"
    },
    {
      title: "Primary",
      description: "Provide a strong academic foundation while encouraging creativity, critical thinking, and teamwork. Comprehensive curriculum for holistic development.",
      icon: "bi bi-book-fill",
      link: "/services/primary",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-50 to-indigo-50",
      classes: "7 classes",
      ageRange: "6-13 years"
    },
    {
      title: "Co-curricular Activities", 
      description: "Fostering creativity, teamwork, and personal growth through sports, arts, music, and various skill-building activities.",
      icon: "bi bi-palette-fill",
      link: "/services/cocultural",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-50 to-emerald-50",
      classes: "All levels",
      ageRange: "3-13 years"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Comprehensive educational programs designed to nurture young minds and prepare them for a bright future.
            </p>
          </div>
          <nav className="text-blue-200 mt-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">•</span>
            <span>Services</span>
          </nav>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Educational Programs</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From early childhood development to primary education, we offer comprehensive programs tailored to each age group.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`bg-gradient-to-br ${service.bgColor} rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 h-full`}
              >
                <div className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${service.color} rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg`}>
                    <i className={`${service.icon} text-white text-3xl`}></i>
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">
                    {service.title}
                  </h3>
                  
                  <p className="text-slate-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="space-y-3 mb-8">
                    <div className="flex justify-between items-center bg-white rounded-lg p-3">
                      <span className="text-slate-600 font-medium">Classes:</span>
                      <span className="text-slate-800 font-bold">{service.classes}</span>
                    </div>
                    <div className="flex justify-between items-center bg-white rounded-lg p-3">
                      <span className="text-slate-600 font-medium">Age Range:</span>
                      <span className="text-slate-800 font-bold">{service.ageRange}</span>
                    </div>
                  </div>
                  
                  <Link 
                    to={service.link}
                    className={`inline-block bg-gradient-to-r ${service.color} text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          {/* Additional Services */}
          <div className="mt-20">
            <h3 className="text-2xl font-bold text-center mb-12 text-slate-800">Additional Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                { icon: "bi-bus-front", title: "Transport", desc: "Safe school transport" },
                { icon: "bi-cup-hot", title: "Meals", desc: "Nutritious daily meals" },
                { icon: "bi-shield-check", title: "Day Care", desc: "Extended care services" },
                { icon: "bi-house-heart", title: "Boarding", desc: "Comfortable boarding facilities" }
              ].map((item, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`bi ${item.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <h4 className="font-bold text-slate-800 mb-2">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Join Our School Community?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our programs and schedule a visit to see our facilities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Us
            </Link>
            <Link 
              to="/about"
              className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};