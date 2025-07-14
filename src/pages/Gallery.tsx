import React, { useState, useEffect } from 'react';

// Import all images
import t1 from '../assets/img/t1.jpg';
import t2 from '../assets/img/t2.jpg';
import t3 from '../assets/img/t3.jpg';
import t4 from '../assets/img/t4.jpg';
import t5 from '../assets/img/t5.jpg';
import t6 from '../assets/img/t6.jpg';
import t7 from '../assets/img/t7.jpg';
import t8 from '../assets/img/t8.jpg';
import t9 from '../assets/img/t9.jpg';
import t10 from '../assets/img/t10.jpg';
import t11 from '../assets/img/t11.jpg';
import t12 from '../assets/img/t12.jpg';
import t13 from '../assets/img/t13.jpg';
import t14 from '../assets/img/t14.jpg';
import t15 from '../assets/img/t15.jpg';
import t16 from '../assets/img/t16.jpg';
import t17 from '../assets/img/t17.jpg';
import t18 from '../assets/img/t18.jpg';
import t19 from '../assets/img/t19.jpg';
import t20 from '../assets/img/t20.jpg';
import c1 from '../assets/img/c1.jpg';
import c2 from '../assets/img/c2.jpg';
import c3 from '../assets/img/c3.jpg';
import p1 from '../assets/img/p1.jpg';
import p2 from '../assets/img/p2.jpg';
import p3 from '../assets/img/p3.jpg';
import p4 from '../assets/img/p4.jpg';
import p5 from '../assets/img/p5.jpg';
import p6 from '../assets/img/p6.jpg';
import p7 from '../assets/img/p7.jpg';
import event1 from '../assets/img/2L4A7403.jpg';
import event2 from '../assets/img/2L4A7437.jpg';
import img2 from '../assets/img/2.jpg';
import img3 from '../assets/img/3.jpg';
import img4 from '../assets/img/4.jpg';
import img5 from '../assets/img/5.jpg';
import imgC from '../assets/img/c.jpg';
import imgD from '../assets/img/d.jpg';
import imgE from '../assets/img/e.jpg';
import imgF from '../assets/img/f.jpg';
import imgG1 from '../assets/img/g1.jpg';
import imgG2 from '../assets/img/g2.jpg';
import imgM from '../assets/img/m.jpg';
import imgO from '../assets/img/o.jpg';
import imgOO from '../assets/img/oo.jpg';
import imgR from '../assets/img/r.jpg';
import schoolImg from '../assets/img/school.jpg';

export const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

const portfolioItems = [
  // ---------------------- TEACHERS ----------------------
  {
    src: t20,
    title: "Class Teacher K.1",
    subtitle: "Katumba Elinah",
    category: "Teachers",
    role: "Kindergarten Teacher",
    description: "Ms. Katumba Elinah is our dedicated Kindergarten 1 teacher with over 5 years of experience in early childhood education.",
  },
  {
    src: t3,
    title: "Bursar",
    subtitle: "Kyagulanya Augustine",
    category: "Teachers",
    role: "Administration",
    description: "Mr. Kyagulanya Augustine ensures financial accountability and resource planning for the school.",
  },
  {
    src: t10,
    title: "Class Teacher P.3",
    subtitle: "Mudebo Norah",
    category: "Teachers",
    role: "Primary Teacher",
    description: "Ms. Mudebo Norah guides Primary 3 pupils with excellence and care.",
  },
  {
    src: t6,
    title: "Teacher",
    subtitle: "Asiimwe Dahpine",
    category: "Teachers",
    role: "Support Teacher",
    description: "Ms. Asiimwe Dahpine is a dedicated support teacher with a passion for child development.",
  },
  {
    src: t17,
    title: "Teacher",
    subtitle: "Ojoro Emmanuel",
    category: "Teachers",
    role: "Subject Specialist",
    description: "Mr. Ojoro Emmanuel brings subject expertise and classroom experience to our learners.",
  },
  {
    src: t1,
    title: "Head Teacher",
    subtitle: "Nassolo Saphinah",
    category: "Teachers",
    role: "School Leadership",
    description: "Mrs. Nassolo Saphinah leads Brain Trust School with passion and purpose.",
  },
  {
    src: t2,
    title: "D.O.S (Director of Studies)",
    subtitle: "Luyimbazi Hanington",
    category: "Teachers",
    role: "Academic Leadership",
    description: "Mr. Luyimbazi ensures academic excellence across all classes.",
  },
  {
    src: t4,
    title: "Secretary",
    subtitle: "Namutebi Joan Kirabo",
    category: "Teachers",
    role: "Administration",
    description: "Joan is the welcoming face of the school and assists in communication and records.",
  },
  {
    src: t18,
    title: "Co-Teacher P.7",
    subtitle: "Gabale Geofrey",
    category: "Teachers",
    role: "Upper Primary",
    description: "Mr. Gabale supports P.7 academic and revision efforts.",
  },
  {
    src: t13,
    title: "Class Teacher P.6",
    subtitle: "Abaa Daniel",
    category: "Teachers",
    role: "Upper Primary",
    description: "Mr. Abaa prepares students for PLE success in P.6.",
  },
  {
    src: t14,
    title: "Class Teacher P.5",
    subtitle: "Eyadu Benard",
    category: "Teachers",
    role: "Primary Teacher",
    description: "Mr. Eyadu builds confidence and skills in Primary 5 learners.",
  },
  {
    src: t11,
    title: "Class Teacher P.4",
    subtitle: "Ndagijiman Bosco",
    category: "Teachers",
    role: "Primary Teacher",
    description: "Mr. Bosco focuses on academic performance and discipline in P.4.",
  },
  {
    src: t5,
    title: "Class Teacher P.2 / Head of Lower",
    subtitle: "Nakandha Marion",
    category: "Teachers",
    role: "Lower Primary Head",
    description: "Madam Marion leads P.2 and oversees lower primary instruction.",
  },
  {
    src: t16,
    title: "Class Teacher P.1",
    subtitle: "Nanuumba Mariam",
    category: "Teachers",
    role: "Primary Teacher",
    description: "Madam Mariam warmly welcomes children into formal learning.",
  },
  {
    src: t12,
    title: "Teacher",
    subtitle: "Anam Bibian",
    category: "Teachers",
    role: "Support Staff",
    description: "Ms. Bibian supports early childhood education with care.",
  },
  {
    src: t7,
    title: "Teacher",
    subtitle: "Katono Noeline",
    category: "Teachers",
    role: "Subject Teacher",
    description: "Ms. Noeline teaches specialized subjects across classes.",
  },
  {
    src: t9,
    title: "Teacher",
    subtitle: "Nalweyiso Annet",
    category: "Teachers",
    role: "Support Teacher",
    description: "Annet supports learners in foundational and remedial education.",
  },
  {
    src: t15,
    title: "Class Teacher K.2",
    subtitle: "Nambuya Viol",
    category: "Teachers",
    role: "Kindergarten Teacher",
    description: "Ms. Viol prepares K.2 learners for the Pre-primary transition.",
  },
  {
    src: t19,
    title: "Sheikh",
    subtitle: "Ddumba Umar",
    category: "Teachers",
    role: "Religious Leader",
    description: "Sheikh Umar offers spiritual guidance and Islamic studies.",
  },
  {
    src: t8,
    title: "Music Teacher",
    subtitle: "Nambozo Grace",
    category: "Teachers",
    role: "Creative Arts",
    description: "Ms. Grace leads our music and creative arts programs.",
  },

  // ---------------------- CLASSES ----------------------
  {
    src: c1,
    title: "Kinder 1",
    subtitle: "Madam Katumba Elinah",
    category: "Classes",
    role: "Nursery Class",
    description: "This is the starting point for young learners aged 3–4.",
  },
  {
    src: c2,
    title: "Kinder 2",
    subtitle: "Madam Nassali Sylvia",
    category: "Classes",
    role: "Nursery Class",
    description: "Preparing children aged 4–5 for Pre-primary activities.",
  },
  {
    src: c3,
    title: "Pre-Primary Active",
    subtitle: "Madam Nambuya Viola",
    category: "Classes",
    role: "Transition Class",
    description: "Readies learners aged 5–6 for Primary One.",
  },
  {
    src: p1,
    title: "Primary 1",
    subtitle: "Madam Nanuumba Mariam",
    category: "Classes",
    role: "Primary Class",
    description: "Focuses on core skills: literacy, numeracy, social studies.",
  },
  {
    src: p2,
    title: "Primary 2",
    subtitle: "Madam Nakandha Marion",
    category: "Classes",
    role: "Lower Primary",
    description: "Encourages independence and new knowledge application.",
  },
  {
    src: p3,
    title: "Primary 3",
    subtitle: "Madam Mudebo Norah",
    category: "Classes",
    role: "Lower Primary",
    description: "Focus on structured activities and confidence development.",
  },
  {
    src: p4,
    title: "Primary 4",
    subtitle: "Mr. Ndagijiman Bosco",
    category: "Classes",
    role: "Middle Primary",
    description: "New subjects and exam techniques introduced.",
  },
  {
    src: p5,
    title: "Primary 5",
    subtitle: "Mr. Eyadu Benard",
    category: "Classes",
    role: "Upper Primary",
    description: "Improves subject comprehension and revision routines.",
  },
  {
    src: p6,
    title: "Primary 6",
    subtitle: "Mr. Abaa Daniel",
    category: "Classes",
    role: "PLE Prep",
    description: "Reinforcement of learning with mock exams and discussions.",
  },
  {
    src: p7,
    title: "Primary 7",
    subtitle: "Mr. Gabale Geofrey",
    category: "Classes",
    role: "Final Year",
    description: "Prepares students for PLE and graduation.",
  },

  // ---------------------- EVENTS ----------------------
  {
    src: event1,
    title: "Cultural Day",
    subtitle: "8th October 2023",
    category: "Events",
    role: "Culture",
    description: "A celebration of Uganda's cultural diversity with music, food, and dance.",
  },
  {
    src: event2,
    title: "Kindergarten Fashion Party",
    subtitle: "25th May 2024",
    category: "Events",
    role: "Kids Show",
    description: "Kindergarten learners strutted in fashion before guests and parents.",
  },
  {
    src: imgG1,
    title: "Graduation Ceremony",
    subtitle: "Annual Celebration",
    category: "Events",
    role: "Graduation",
    description: "Celebrating our graduates and their achievements.",
  },
  {
    src: imgG2,
    title: "Sports Day",
    subtitle: "Athletic Competition",
    category: "Events",
    role: "Sports",
    description: "Annual sports day fostering teamwork and healthy competition.",
  },

  // ---------------------- SCHOOL FACILITIES & MORE ----------------------
  {
    src: schoolImg,
    title: "School Building",
    subtitle: "Main Campus",
    category: "Facilities",
    role: "Infrastructure",
    description: "Our modern school building provides a conducive learning environment.",
  },
  {
    src: img2,
    title: "Classroom Environment",
    subtitle: "Learning Spaces",
    category: "Facilities",
    role: "Classrooms",
    description: "Well-equipped classrooms designed for effective learning.",
  },
  {
    src: img3,
    title: "Library",
    subtitle: "Knowledge Center",
    category: "Facilities",
    role: "Library",
    description: "Our library stocks books and resources for all grade levels.",
  },
  {
    src: img4,
    title: "Computer Lab",
    subtitle: "Technology Center",
    category: "Facilities",
    role: "Technology",
    description: "Modern computer lab for digital literacy education.",
  },
  {
    src: img5,
    title: "Playground",
    subtitle: "Recreation Area",
    category: "Facilities",
    role: "Recreation",
    description: "Safe playground equipment for children's physical development.",
  },
  {
    src: imgC,
    title: "Cafeteria",
    subtitle: "Dining Hall",
    category: "Facilities",
    role: "Food Service",
    description: "Clean and healthy meal preparation area for students.",
  },
  {
    src: imgD,
    title: "Science Laboratory",
    subtitle: "Research Center",
    category: "Facilities",
    role: "Science",
    description: "Equipped laboratory for hands-on science experiments.",
  },
  {
    src: imgE,
    title: "Art Studio",
    subtitle: "Creative Space",
    category: "Facilities",
    role: "Arts",
    description: "Dedicated space for artistic expression and creativity.",
  },
  {
    src: imgF,
    title: "Music Room",
    subtitle: "Performance Hall",
    category: "Facilities",
    role: "Music",
    description: "Professional music room with instruments and sound system.",
  },
  {
    src: imgM,
    title: "Administrative Office",
    subtitle: "Main Office",
    category: "Facilities",
    role: "Administration",
    description: "Central administrative hub for school operations.",
  },
  {
    src: imgO,
    title: "Outdoor Learning Area",
    subtitle: "Nature Classroom",
    category: "Facilities",
    role: "Outdoor",
    description: "Natural environment for outdoor learning activities.",
  },
  {
    src: imgOO,
    title: "Assembly Hall",
    subtitle: "Gathering Space",
    category: "Facilities",
    role: "Events",
    description: "Large hall for assemblies, performances, and gatherings.",
  },
  {
    src: imgR,
    title: "Reading Corner",
    subtitle: "Quiet Study Area",
    category: "Facilities",
    role: "Study",
    description: "Comfortable reading spaces that encourage literacy.",
  },
];

  const categories = ["All", "Classes", "Teachers", "Events", "Facilities"];

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
                  <img 
                    src={item.src} 
                    alt={item.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
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
                  <span className="inline-block bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-sm font-medium">
                    {selectedItem.role}
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