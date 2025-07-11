export const About = () => {
  const testimonials = [
    {
      quote: "As a teacher at Brain Trust school Nansana I feel incredibly fortunate to be part of such a nurturing and vibrant community. Our school is dedicated to fostering a love for learning and helping students grow both academically and personally.",
      image: "/src/assets/img/t18.jpg",
      name: "GABALE GEOFREY",
      position: "CO-TEACHER & P.7"
    },
    {
      quote: "I have been a parent for over 7years. The teachers are lovely. The environment is calm and hospitable. Parents you should bring your children to Brain Trust School Nansana",
      image: "/src/assets/img/4.jpg", 
      name: "Ms.Prudence Korougyendo",
      position: "Mother to Amanya Alvin K.2"
    },
    {
      quote: "We love Brain trust school because the teachers are very nice and hospitable. We have learnt how to be very confident and honest.",
      image: "/src/assets/img/5.jpg",
      name: "J.Family",
      position: ""
    },
    {
      quote: "Brain trust school is really the best school Even outside classes we learn various skills like making paperbags, swimming and they teach us how to respect each other",
      image: "/src/assets/img/3.jpg",
      name: "Mawenje Isaac", 
      position: ""
    },
    {
      quote: "The commitment to innovation in education, combined with a strong sense of community, makes Brain trust school Nansana a truly special place. I am proud to work alongside a dedicated team of educators who continuously strive to provide the best possible experience for our students. It's an honor to witness their growth and success every day.",
      image: "/src/assets/img/t5.jpg",
      name: "NAKANDHA MARION",
      position: "CLASS TR.P.2 / HEAD OF LOWER"
    }
  ];

  const galleryImages = [
    "/src/assets/img/c1.jpg",
    "/src/assets/img/p1.jpg", 
    "/src/assets/img/p7.jpg",
    "/src/assets/img/g1.jpg"
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About us</h1>
          <nav className="text-slate-300">
            <span>Home</span>
          </nav>
        </div>
      </div>

      {/* Portfolio Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Image Gallery */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
                <div className="grid grid-cols-2 gap-2 p-4">
                  {galleryImages.map((image, index) => (
                    <img 
                      key={index}
                      src={image} 
                      alt="School Gallery"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* School Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-2xl font-bold mb-4 text-slate-800">Brain Trust School Nansana</h3>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-bold mb-4 text-slate-800">Welcome To Brain Trust School Nansana</h2>
                <h3 className="text-lg text-slate-600 font-medium">
                  Where learning is an adventure, and every student is valued. Our mission is to foster creativity, knowledge, and growth in every child.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Testimonials</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-slate-50 rounded-lg p-6 shadow-lg">
                <div className="flex items-start space-x-1 mb-4">
                  <i className="bi bi-quote text-blue-600 text-2xl"></i>
                </div>
                <p className="text-slate-600 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800">{testimonial.name}</h4>
                    {testimonial.position && (
                      <p className="text-sm text-slate-500">{testimonial.position}</p>
                    )}
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