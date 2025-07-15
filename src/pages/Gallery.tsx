import React, { useState, useEffect } from 'react';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

const portfolioItems = [
  // ---------------------- TEACHERS ----------------------
  {
    src: "/assets/img/t20.jpg",
    title: "Class Teacher K.1",
    subtitle: "Katumba Elinah",
    category: "Teachers",
    role: "Kindergarten Teacher",
    description: "Ms. Katumba Elinah is our dedicated Kindergarten 1 teacher with over 5 years of experience in early childhood education.",
  },
  {
    src: "/assets/img/t3.jpg",
    title: "Bursar",
    subtitle: "Kyagulanyi Augustine",
    category: "Teachers",
    role: "Administration",
    description: "Mr. Kyagulanyi Augustine ensures financial accountability and resource planning for the school.",
  },
  {
    src: "/assets/img/t6.jpg",
    title: "Teacher",
    subtitle: "Asiimwe Dahpine",
    category: "Teachers",
    role: "Support Teacher",
    description: "Ms. Asiimwe Dahpine is a dedicated support teacher with a passion for child development.",
  },
  {
    src: "/assets/img/t1.jpg",
    title: "Head Teacher",
    subtitle: "Nassolo Saphinah",
    category: "Teachers",
    role: "School Leadership",
    description: "Mrs. Nassolo Saphinah leads Brain Trust School with passion and purpose.",
  },
  {
    src: "/assets/img/t4.jpg",
    title: "Secretary",
    subtitle: "Namutebi Joan Kirabo",
    category: "Teachers",
    role: "Administration",
    description: "Joan is the welcoming face of the school and assists in communication and records.",
  },
  {
    src: "/assets/img/t18.jpg",
    title: "Co-Teacher P.7",
    subtitle: "Gabale Geofrey",
    category: "Teachers",
    role: "Upper Primary",
    description: "Mr. Gabale supports P.7 academic and revision efforts.",
  },
  {
    src: "/assets/img/t13.jpg",
    title: "Class Teacher P.6",
    subtitle: "Abaa Daniel",
    category: "Teachers",
    role: "Upper Primary",
    description: "Mr. Abaa prepares students for PLE success in P.6.",
  },
  {
    src: "/assets/img/t5.jpg",
    title: "Class Teacher P.2 / Head of Lower",
    subtitle: "Nakandha Marion",
    category: "Teachers",
    role: "Lower Primary Head",
    description: "Madam Marion leads P.2 and oversees lower primary instruction.",
  },
  {
    src: "/assets/img/t16.jpg",
    title: "Class Teacher P.1",
    subtitle: "Nanuumba Mariam",
    category: "Teachers",
    role: "Primary Teacher",
    description: "Madam Mariam warmly welcomes children into formal learning.",
  },
  {
    src: "/assets/img/t12.jpg",
    title: "Teacher",
    subtitle: "Anam Bibian",
    category: "Teachers",
    role: "Support Teacher",
    description: "Ms. Anam Bibian supports classroom learning with care and creativity.",
  },

  // ---------------------- MANAGEMENT ----------------------
  {
    src: "icon-person",
    title: "Director",
    subtitle: "Hajjat Aminah Muskasa",
    category: "Management",
    role: "Director",
    description: "Hajjat Aminah Muskasa is the Director of Brain Trust School.",
  },
  {
    src: "icon-person",
    title: "Director",
    subtitle: "Prof Buyinza Mukadaisa",
    category: "Management",
    role: "Director",
    description: "Prof Buyinza Mukadaisa is a Director at Brain Trust School.",
  },
  {
    src: "icon-person",
    title: "SMC",
    subtitle: "Mr. Ssenkatuuka Jack",
    category: "Management",
    role: "SMC Member",
    description: "Mr. Ssenkatuuka Jack serves on the School Management Committee.",
  },
  {
    src: "icon-person",
    title: "SMC",
    subtitle: "Hajjat Kyagaba Aisha",
    category: "Management",
    role: "SMC Member",
    description: "Hajjat Kyagaba Aisha serves on the School Management Committee.",
  },
  {
    src: "icon-person",
    title: "SMC",
    subtitle: "Ms. Kyohaire Nuruh",
    category: "Management",
    role: "SMC Member",
    description: "Ms. Kyohaire Nuruh serves on the School Management Committee.",
  },
  {
    src: "icon-person",
    title: "SMC",
    subtitle: "Ms. Nabatansi Faridah",
    category: "Management",
    role: "SMC Member",
    description: "Ms. Nabatansi Faridah serves on the School Management Committee.",
  },

  // ---------------------- CLASSES ----------------------
  {
    src: "/assets/img/c1.jpg",
    title: "Kinder 1",
    subtitle: "Madam Katumba Elinah",
    category: "Classes",
    role: "Nursery Class",
    description: "This is the starting point for young learners aged 3–4.",
  },
  {
    src: "/assets/img/c2.jpg",
    title: "Kinder 2",
    subtitle: "Madam Nassali Sylvia",
    category: "Classes",
    role: "Nursery Class",
    description: "Preparing children aged 4–5 for Pre-primary activities.",
  },
  {
    src: "/assets/img/c3.jpg",
    title: "Pre-Primary Active",
    subtitle: "Madam Nambuya Viola",
    category: "Classes",
    role: "Transition Class",
    description: "Readies learners aged 5–6 for Primary One.",
  },
  {
    src: "/assets/img/p1.jpg",
    title: "Primary 1",
    subtitle: "Madam Nanuumba Mariam",
    category: "Classes",
    role: "Primary Class",
    description: "Focuses on core skills: literacy, numeracy, social studies.",
  },
  {
    src: "/assets/img/p2.jpg",
    title: "Primary 2",
    subtitle: "Madam Nakandha Marion",
    category: "Classes",
    role: "Lower Primary",
    description: "Encourages independence and new knowledge application.",
  },
  {
    src: "/assets/img/p3.jpg",
    title: "Primary 3",
    subtitle: "Madam Mudebo Norah",
    category: "Classes",
    role: "Lower Primary",
    description: "Focus on structured activities and confidence development.",
  },
  {
    src: "/assets/img/p4.jpg",
    title: "Primary 4",
    subtitle: "Mr. Ndagijiman Bosco",
    category: "Classes",
    role: "Middle Primary",
    description: "New subjects and exam techniques introduced.",
  },
  {
    src: "/assets/img/p5.jpg",
    title: "Primary 5",
    subtitle: "Mr. Eyadu Benard",
    category: "Classes",
    role: "Upper Primary",
    description: "Improves subject comprehension and revision routines.",
  },
  {
    src: "/assets/img/p6.jpg",
    title: "Primary 6",
    subtitle: "Mr. Abaa Daniel",
    category: "Classes",
    role: "PLE Prep",
    description: "Reinforcement of learning with mock exams and discussions.",
  },
  {
    src: "/assets/img/p7.jpg",
    title: "Primary 7",
    subtitle: "Mr. Gabale Geofrey",
    category: "Classes",
    role: "Final Year",
    description: "Prepares students for PLE and graduation.",
  },

  // ---------------------- EVENTS ----------------------
  {
    src: "/assets/img/2L4A7403.jpg",
    title: "Cultural Day",
    subtitle: "8th October 2023",
    category: "Events",
    role: "Culture",
    description: "A celebration of Uganda’s cultural diversity with music, food, and dance.",
  },
  {
    src: "/assets/img/2L4A7437.jpg",
    title: "Kindergarten Fashion Party",
    subtitle: "25th May 2024",
    category: "Events",
    role: "Kids Show",
    description: "Kindergarten learners strutted in fashion before guests and parents.",
  },
  {
    src: "/assets/img/z1.JPG",
    title: "Leavers' Party",
    subtitle: "Primary 7 Graduation",
    category: "Events",
    role: "Graduation",
    description: "Our P.7 pupils marked their academic milestone in style and joy.",
  },
];


  const categories = ["All", "Classes", "Teachers", "Management", "Events"];

  useEffect(() => {
    if (activeFilter === "All") {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.category === activeFilter));
    }
  }, [activeFilter]);

  useEffect(() => {
    setFilteredItems(portfolioItems);
  }, []);

  const openModal = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = 'unset'; // Restore scrolling
  };

  // Close modal on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isModalOpen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Explore our vibrant school community through photos of our students, teachers, classes, and special events.
            </p>
          </div>
          <nav className="text-blue-200 mt-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">•</span>
            <span>Gallery</span>
          </nav>
        </div>
      </div>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setActiveFilter(category)}
                className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                  activeFilter === category
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white text-slate-600 hover:bg-blue-50 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group cursor-pointer transform hover:-translate-y-2"
                onClick={() => openModal(item)}
              >
                <div className="relative overflow-hidden">
                  {item.src === "icon-person" ? (
                    <div className="flex items-center justify-center w-full h-64 bg-slate-100">
                      <i className="bi bi-person-circle text-7xl text-slate-400"></i>
                    </div>
                  ) : (
                    <img 
                      src={item.src} 
                      alt={item.title}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <i className="bi bi-zoom-in text-3xl mb-2"></i>
                      <p className="text-sm font-medium">View Details</p>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {item.category}
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-slate-800 mb-2 text-lg">{item.title}</h4>
                  <p className="text-slate-600 text-sm mb-2">{item.subtitle}</p>
                  {item.role && (
                    <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                      {item.role}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeModal}
          ></div>
          
          {/* Modal Content */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110"
            >
              <i className="bi bi-x text-2xl text-slate-600"></i>
            </button>

            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Section */}
              <div className="relative">
                <img 
                  src={selectedItem.src} 
                  alt={selectedItem.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {selectedItem.category}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold text-slate-800 mb-2">
                    {selectedItem.title}
                  </h2>
                  <h3 className="text-xl text-blue-600 font-semibold mb-2">
                    {selectedItem.subtitle}
                  </h3>
                  <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium mr-2">
                    {selectedItem.role}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.category}
                  </span>
                </div>

                <div className="space-y-6">
                  {/* Description */}
                  <div>
                    <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                      <i className="bi bi-info-circle text-blue-600 mr-2"></i>
                      About
                    </h4>
                    <p className="text-slate-600 leading-relaxed">
                      {selectedItem.description}
                    </p>
                  </div>

                  {/* Dynamic Content Based on Category */}
                  {selectedItem.category === "Teachers" && (
                    <>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-mortarboard text-blue-600 mr-2"></i>
                          Qualifications
                        </h4>
                        <p className="text-slate-600">{selectedItem.qualifications}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-clock-history text-blue-600 mr-2"></i>
                          Experience
                        </h4>
                        <p className="text-slate-600">{selectedItem.experience}</p>
                      </div>
                    </>
                  )}

                  {selectedItem.category === "Classes" && (
                    <>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-book text-blue-600 mr-2"></i>
                          Curriculum
                        </h4>
                        <p className="text-slate-600">{selectedItem.curriculum}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-people text-blue-600 mr-2"></i>
                          Class Size
                        </h4>
                        <p className="text-slate-600">{selectedItem.classSize}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-building text-blue-600 mr-2"></i>
                          Facilities
                        </h4>
                        <p className="text-slate-600">{selectedItem.facilities}</p>
                      </div>
                    </>
                  )}

                  {selectedItem.category === "Events" && (
                    <>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-star text-blue-600 mr-2"></i>
                          Highlights
                        </h4>
                        <p className="text-slate-600">{selectedItem.highlights}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-people-fill text-blue-600 mr-2"></i>
                          Attendance
                        </h4>
                        <p className="text-slate-600">{selectedItem.attendance}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-3 flex items-center">
                          <i className="bi bi-heart text-blue-600 mr-2"></i>
                          Impact
                        </h4>
                        <p className="text-slate-600">{selectedItem.impact}</p>
                      </div>
                    </>
                  )}
                </div>

                {/* Action Button */}
                <div className="mt-8 pt-6 border-t border-slate-200">
                  <a 
                    href="/contact" 
                    className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                  >
                    <i className="bi bi-envelope mr-2"></i>
                    Get More Information
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};