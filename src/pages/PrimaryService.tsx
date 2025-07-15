export const PrimaryService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-book-fill text-4xl"></i>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Primary Education</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Building strong academic foundations while fostering creativity, critical thinking, and character development.
            </p>
          </div>
          <nav className="text-blue-200 mt-8 text-center">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span className="mx-2">•</span>
            <span>Primary</span>
          </nav>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div>
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">
                  Comprehensive Primary Education
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  In the Primary Section, we provide a strong academic foundation while encouraging creativity, critical thinking, and teamwork. 
                  Our tailored curriculum supports students' personal growth, ensuring they're prepared for the next stage of their educational journey.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  We focus on developing well-rounded individuals who excel academically while maintaining strong moral values and social skills.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-blue-50 p-6 rounded-xl">
                    <h4 className="font-bold text-slate-800 mb-3">Grade Levels</h4>
                    <p className="text-slate-600">Primary 1 - Primary 7</p>
                  </div>
                  <div className="bg-indigo-50 p-6 rounded-xl">
                    <h4 className="font-bold text-slate-800 mb-3">Total Classes</h4>
                    <p className="text-slate-600">7 classes available</p>
                  </div>
                </div>
                
                <a 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Enroll Your Child
                </a>
              </div>
              
              {/* Curriculum Highlights */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">Curriculum Highlights</h3>
                <div className="space-y-4">
                  {[
                    { icon: "bi-book", title: "English Language", desc: "Reading, writing, and communication skills" },
                    { icon: "bi-calculator", title: "Mathematics", desc: "Problem-solving and logical thinking" },
                    { icon: "bi-globe", title: "Science", desc: "Exploration and scientific inquiry" },
                    { icon: "bi-map", title: "Social Studies", desc: "History, geography, and civic education" },
                    { icon: "bi-translate", title: "Local Languages", desc: "Cultural heritage and communication" },
                    { icon: "bi-laptop", title: "Computer Studies", desc: "Digital literacy and technology skills" }
                  ].map((subject, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-blue-50 transition-colors">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`bi ${subject.icon} text-blue-600 text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{subject.title}</h4>
                        <p className="text-slate-600 text-sm">{subject.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div>
              <img 
                src="/assets/img/p3.jpg" 
                alt="Primary" 
                className="w-full rounded-2xl shadow-2xl mb-8"
              />
              
              {/* Grade Levels */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">P1-P3</div>
                  <div className="text-slate-600">Lower Primary</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-indigo-600 mb-2">P4-P7</div>
                  <div className="text-slate-600">Upper Primary</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Learning Approach */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">Our Learning Approach</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We employ modern teaching methods that make learning engaging, interactive, and meaningful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="text-center p-8 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-lightbulb text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Interactive Learning</h3>
              <p className="text-slate-600">
                Hands-on activities and group work that encourage active participation and collaboration among students.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-person-check text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Individual Attention</h3>
              <p className="text-slate-600">
                Small class sizes ensure that each student receives personalized attention and support from our dedicated teachers.
              </p>
            </div>
            
            <div className="text-center p-8 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <i className="bi bi-trophy text-white text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">Excellence Focus</h3>
              <p className="text-slate-600">
                We strive for academic excellence while nurturing creativity, critical thinking, and problem-solving skills.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Assessment & Progress */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-600 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Assessment & Progress Tracking</h2>
            <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
              We use comprehensive assessment methods to track student progress and ensure continuous improvement.
            </p>
            
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { icon: "bi-clipboard-check", title: "Continuous Assessment", desc: "Regular evaluation of student progress" },
                { icon: "bi-graph-up", title: "Progress Reports", desc: "Detailed feedback to parents" },
                { icon: "bi-award", title: "Recognition", desc: "Celebrating student achievements" },
                { icon: "bi-people", title: "Parent Meetings", desc: "Regular communication with families" }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`bi ${item.icon} text-2xl`}></i>
                  </div>
                  <h4 className="font-bold mb-2">{item.title}</h4>
                  <p className="text-blue-100 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};