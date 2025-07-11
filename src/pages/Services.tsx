import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      title: "Kindergarten",
      description: "Focused on play-based learning and foundational skills in a fun and engaging way.",
      icon: "bi bi-person",
      link: "/services/kindergarten"
    },
    {
      title: "Primary",
      description: "Provide a strong academic foundation while encouraging creativity, critical thinking, and teamwork.",
      icon: "bi bi-person",
      link: "/services/primary"
    },
    {
      title: "Co-cultural activities", 
      description: "Fostering creativity, teamwork, and personal growth.",
      icon: "bi bi-person",
      link: "/services/cocultural"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <nav className="text-slate-300">
            <span>Home</span>
          </nav>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Our Services</h2>
          
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 justify-center">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow h-full flex"
              >
                <div className="flex items-start space-x-4 w-full">
                  <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
                    <i className={`${service.icon} text-blue-600 text-xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl font-bold mb-3 text-slate-800">
                      <Link 
                        to={service.link}
                        className="hover:text-blue-600 transition-colors"
                      >
                        {service.title}
                      </Link>
                    </h4>
                    <p className="text-slate-600">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};