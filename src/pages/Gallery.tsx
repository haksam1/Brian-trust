export const Gallery = () => {
  const portfolioItems = [
    // Teachers
    { src: "/src/assets/img/t20.jpg", title: "CLASS TEACHER K.1", subtitle: "KATUMBA ELINAH", category: "Teachers" },
    { src: "/src/assets/img/t3.jpg", title: "BURSAR", subtitle: "KYAGULANYA AUGUSTINE", category: "Teachers" },
    { src: "/src/assets/img/t10.jpg", title: "CLASS TR.P.3", subtitle: "MUDEBO NORAH", category: "Teachers" },
    { src: "/src/assets/img/t6.jpg", title: "TEACHER", subtitle: "ASIIMWE DAHPINE", category: "Teachers" },
    { src: "/src/assets/img/t17.jpg", title: "TEACHER", subtitle: "OJORO EMMANUEL", category: "Teachers" },
    { src: "/src/assets/img/t1.jpg", title: "HEAD TEACHER", subtitle: "NASSOLO SAPHINAH", category: "Teachers" },
    { src: "/src/assets/img/t2.jpg", title: "D.O.S", subtitle: "LUYIMBAZI HANINGTON", category: "Teachers" },

    // Classes
    { src: "/src/assets/img/c1.jpg", title: "Kinder 1", subtitle: "Madam KATUMBA ELINAH", category: "Classes" },
    { src: "/src/assets/img/c2.jpg", title: "Kinder 2", subtitle: "Madam NASSALI SYLIVIA", category: "Classes" },
    { src: "/src/assets/img/c3.jpg", title: "Pre-Primary Active", subtitle: "Madam NAMBUYA VIOLA", category: "Classes" },
    { src: "/src/assets/img/p1.jpg", title: "Primary 1", subtitle: "Madam NANUUMBA MARIAM", category: "Classes" },
    { src: "/src/assets/img/p2.jpg", title: "Primary 2", subtitle: "Madam NAKANDHA MARION", category: "Classes" },
    { src: "/src/assets/img/p3.jpg", title: "Primary 3", subtitle: "Madam MUDEBO NORAH", category: "Classes" },
    { src: "/src/assets/img/p4.jpg", title: "Primary 4", subtitle: "Mr.NDAGIJIMAN BOSCO", category: "Classes" },
    { src: "/src/assets/img/p5.jpg", title: "Primary 5", subtitle: "Mr.EYADU BENARD", category: "Classes" },
    { src: "/src/assets/img/p6.jpg", title: "Primary 6", subtitle: "Mr.ABAA DANIEL", category: "Classes" },

    // Events
    { src: "/src/assets/img/2L4A7403.jpg", title: "Celebrates Culture with Annual Cultural Day", subtitle: "Held On 8th October 2023", category: "Events" }
  ];

  const categories = ["All", "Classes", "Teachers", "Events"];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Gallery</h1>
          <nav className="text-slate-300">
            <span>Home</span>
          </nav>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                  index === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white text-slate-600 hover:bg-blue-50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {portfolioItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex items-center justify-center">
                    <i className="bi bi-zoom-in text-white text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></i>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-bold text-slate-800 mb-1">{item.title}</h4>
                  <p className="text-slate-600 text-sm">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};