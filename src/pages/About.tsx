import React, { useState, useEffect } from 'react';

export const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  const testimonials = [
    {
      quote: "As a teacher at Brain Trust School Nansana I feel incredibly fortunate to be part of such a nurturing and vibrant community. Our school is dedicated to fostering a love for learning and helping students grow both academically and personally.",
      image: "/assets/img/t18.jpg",
      name: "GABALE GEOFREY",
      position: "CO-TEACHER & P.7"
    },
    {
      quote: "I have been a parent for over 7 years. The teachers are lovely. The environment is calm and hospitable. Parents you should bring your children to Brain Trust School Nansana.",
      image: "/assets/img/4.jpg", 
      name: "Ms.Prudence Korougyendo",
      position: "Mother to Amanya Alvin K.2"
    },
    {
      quote: "We love Brain Trust School because the teachers are very nice and hospitable. We have learnt how to be very confident and honest.",
      image: "/assets/img/5.jpg",
      name: "J.Family",
      position: ""
    },
    {
      quote: "Brain Trust School is really the best school. Even outside classes we learn various skills like making paper bags, swimming and they teach us how to respect each other.",
      image: "/assets/img/3.jpg",
      name: "Mawenje Isaac", 
      position: ""
    },
    {
      quote: "The commitment to innovation in education, combined with a strong sense of community, makes Brain Trust School Nansana a truly special place. I am proud to work alongside a dedicated team of educators who continuously strive to provide the best possible experience for our students. It's an honor to witness their growth and success every day.",
      image: "/assets/img/t5.jpg",
      name: "NAKANDHA MARION",
      position: "CLASS TR.P.2 / HEAD OF LOWER"
    }
  ];

  const galleryImages = [
    "/assets/img/c1.jpg",
    "/assets/img/p1.jpg", 
    "/assets/img/p7.jpg",
    "/assets/img/g1.jpg"
  ];

  // Auto-scroll images (one at a time)
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(imageInterval);
  }, [galleryImages.length]);

  // Auto-scroll testimonials (two at a time)
  useEffect(() => {
    const testimonialInterval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) => {
        const maxIndex = Math.ceil(testimonials.length / 2) - 1;
        return prevIndex === maxIndex ? 0 : prevIndex + 1;
      });
    }, 6000); // Change testimonials every 6 seconds

    return () => clearInterval(testimonialInterval);
  }, [testimonials.length]);

  // Get current testimonials (2 at a time)
  const getCurrentTestimonials = () => {
    const startIndex = currentTestimonialIndex * 2;
    return testimonials.slice(startIndex, startIndex + 2);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Discover our story, mission, and the dedicated team that makes Brain Trust School a special place for learning.
            </p>
          </div>
          <nav className="text-blue-200 mt-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">•</span>
            <span>About</span>
          </nav>
        </div>
      </div>

      {/* Portfolio Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Image Gallery */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 relative">
                <div className="relative h-96 p-6">
                  <div className="relative w-full h-full overflow-hidden rounded-xl">
                    {galleryImages.map((image, index) => (
                      <img 
                        key={index}
                        src={image} 
                        alt={`School Gallery ${index + 1}`}
                        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
                          index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                      />
                    ))}
                  </div>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {galleryImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          index === currentImageIndex ? 'bg-blue-600' : 'bg-white/50'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* School Info */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Brain Trust School Nansana</h3>
                <div className="space-y-4 text-slate-600 mb-6">
                  <p><strong>Established:</strong> 2014</p>
                  <p><strong>Registration:</strong> PPS/B/313</p>
                  <p><strong>UNEB No:</strong> 538549</p>
                  <p><strong>Location:</strong> Nansana Kabumbi, Mpanga RD</p>
                </div>
                <a 
                  href="/school-info" 
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block font-semibold"
                >
                  Learn More
                </a>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl shadow-xl p-8">
                <h2 className="text-2xl font-bold mb-6 text-slate-800">Welcome To Brain Trust School Nansana</h2>
                <p className="text-lg text-slate-700 font-medium leading-relaxed">
                  Where learning is an adventure, and every student is valued. Our mission is to foster creativity, knowledge, and growth in every child.
                </p>
                <div className="mt-6 p-4 bg-white rounded-lg">
                  <h4 className="font-bold text-slate-800 mb-2">Our Focus Areas:</h4>
                  <ul className="text-slate-600 space-y-1">
                    <li>• Academic Excellence</li>
                    <li>• Character Development</li>
                    <li>• Co-curricular Activities</li>
                    <li>• Skill Development</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">What Our Community Says</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Hear from our teachers, parents, and students about their experience at Brain Trust School.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto relative">
            <div className="grid md:grid-cols-2 gap-8 min-h-[400px]">
              {getCurrentTestimonials().map((testimonial, index) => (
                <div 
                  key={`${currentTestimonialIndex}-${index}`} 
                  className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 animate-in fade-in-50 slide-in-from-bottom-4"
                >
                  <div className="flex items-start space-x-2 mb-6">
                    <i className="bi bi-quote text-blue-600 text-3xl"></i>
                  </div>
                  <p className="text-slate-700 mb-8 italic leading-relaxed">"{testimonial.quote}"</p>
                  <div className="flex items-center space-x-4 pt-4 border-t border-slate-200">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-14 h-14 rounded-full object-cover border-3 border-blue-200 shadow-md"
                    />
                    <div>
                      <h4 className="font-bold text-slate-800 text-lg">{testimonial.name}</h4>
                      {testimonial.position && (
                        <p className="text-sm text-blue-600 font-medium">{testimonial.position}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Testimonial indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                    index === currentTestimonialIndex ? 'bg-blue-600' : 'bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};