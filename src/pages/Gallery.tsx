export const Gallery = () => {
  const galleryImages = [
    { src: "/src/assets/img/t1.jpg", alt: "School Activities" },
    { src: "/src/assets/img/t2.jpg", alt: "Classroom Learning" },
    { src: "/src/assets/img/t3.jpg", alt: "Playground Fun" },
    { src: "/src/assets/img/t4.jpg", alt: "Students at Work" },
    { src: "/src/assets/img/t5.jpg", alt: "School Events" },
    { src: "/src/assets/img/t6.jpg", alt: "Creative Time" },
    { src: "/src/assets/img/t7.jpg", alt: "Learning Together" },
    { src: "/src/assets/img/t8.jpg", alt: "School Life" },
    { src: "/src/assets/img/p1.jpg", alt: "Primary Students" },
    { src: "/src/assets/img/p2.jpg", alt: "Academic Excellence" },
    { src: "/src/assets/img/p3.jpg", alt: "Happy Learning" },
    { src: "/src/assets/img/c1.jpg", alt: "Kindergarten Fun" },
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <p className="text-xl text-slate-300">
            Capturing moments of learning, growth, and joy at Brain Trust School
          </p>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                  <i className="bi bi-eye text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                </div>
              </div>
              <div className="p-4">
                <p className="text-slate-600 text-sm text-center">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6 text-slate-800">Want to See More?</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
            Visit our school to experience the vibrant learning environment firsthand. 
            Schedule a tour and see why Brain Trust School is the right choice for your child.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
            Schedule a Visit
          </button>
        </div>
      </div>
    </div>
  );
};