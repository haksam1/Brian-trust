import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      title: "Kindergarten",
      description: "A nurturing environment for our youngest learners with play-based learning approaches.",
      image: "/src/assets/img/c1.jpg",
      classes: "3 classes",
      link: "/services/kindergarten"
    },
    {
      title: "Primary School",
      description: "Strong academic foundation with creative thinking and teamwork development.",
      image: "/src/assets/img/p3.jpg", 
      classes: "7 classes",
      link: "/services/primary"
    },
    {
      title: "Day Care",
      description: "Safe and caring environment for children with flexible schedules for working parents.",
      image: "/src/assets/img/c2.jpg",
      classes: "All ages",
      link: "/services/daycare"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl text-slate-300">
            Comprehensive educational programs designed for every stage of your child's development
          </p>
        </div>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-slate-800">{service.title}</h3>
                <p className="text-slate-600 mb-4">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {service.classes}
                  </span>
                  <Link 
                    to={service.link}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Why Choose Brain Trust School?</h2>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Quality Education</h4>
                <p className="text-slate-600">Experienced teachers and proven curriculum</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Safe Environment</h4>
                <p className="text-slate-600">Secure facilities with 24/7 supervision</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Individual Attention</h4>
                <p className="text-slate-600">Small class sizes for personalized learning</p>
              </div>
              <div>
                <h4 className="font-bold text-slate-800 mb-2">Holistic Development</h4>
                <p className="text-slate-600">Academic, social, and emotional growth</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};