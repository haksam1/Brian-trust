export const KindergartenService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-rose-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="bi bi-heart-fill text-4xl"></i>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Kindergarten Program</h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              A nurturing environment where young minds begin their educational journey through play-based learning.
            </p>
          </div>
          <nav className="text-pink-200 mt-8 text-center">
            <a href="/services" className="hover:text-white transition-colors">Services</a>
            <span className="mx-2">•</span>
            <span>Kindergarten</span>
          </nav>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
                <h2 className="text-3xl font-bold mb-6 text-slate-800">
                  Early Childhood Development at Its Best
                </h2>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  At Brain Trust School Nansana, our Kindergarten section is a nurturing environment designed for our youngest learners. 
                  With a focus on play-based learning, we introduce foundational skills in a fun and engaging way.
                </p>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Our dedicated teachers ensure that every child feels safe, happy, and excited to learn. We believe that early 
                  childhood education should be joyful, creative, and developmentally appropriate.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="bg-pink-50 p-6 rounded-xl">
                    <h4 className="font-bold text-slate-800 mb-3">Age Groups</h4>
                    <p className="text-slate-600">3-5 years old</p>
                  </div>
                  <div className="bg-rose-50 p-6 rounded-xl">
                    <h4 className="font-bold text-slate-800 mb-3">Class Size</h4>
                    <p className="text-slate-600">3 classes available</p>
                  </div>
                </div>
                
                <a 
                  href="/contact" 
                  className="inline-block bg-gradient-to-r from-pink-600 to-rose-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Enroll Your Child
                </a>
              </div>
              
              {/* Features */}
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold mb-6 text-slate-800">What We Offer</h3>
                <div className="space-y-4">
                  {[
                    { icon: "bi-palette", title: "Creative Arts", desc: "Drawing, painting, and craft activities" },
                    { icon: "bi-music-note", title: "Music & Movement", desc: "Songs, dance, and rhythm activities" },
                    { icon: "bi-book", title: "Early Literacy", desc: "Storytelling and pre-reading skills" },
                    { icon: "bi-calculator", title: "Basic Numeracy", desc: "Numbers, counting, and simple math" },
                    { icon: "bi-people", title: "Social Skills", desc: "Sharing, cooperation, and friendship" },
                    { icon: "bi-heart", title: "Emotional Development", desc: "Self-expression and confidence building" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-pink-50 transition-colors">
                      <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <i className={`bi ${feature.icon} text-pink-600 text-xl`}></i>
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">{feature.title}</h4>
                        <p className="text-slate-600 text-sm">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="order-1 lg:order-2">
              <img 
                src="/assets/img/c1.jpg" 
                alt="Kindergarten" 
                className="w-full rounded-2xl shadow-2xl mb-8"
              />
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-pink-600 mb-2">3</div>
                  <div className="text-slate-600">Classes</div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                  <div className="text-3xl font-bold text-rose-600 mb-2">15</div>
                  <div className="text-slate-600">Max per Class</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Daily Schedule */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-800">A Day in Kindergarten</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Our structured yet flexible daily routine ensures a perfect balance of learning and play.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                { time: "8:00 AM", activity: "Arrival & Free Play", desc: "Welcome activities and social interaction" },
                { time: "8:30 AM", activity: "Circle Time", desc: "Morning songs, calendar, and sharing" },
                { time: "9:00 AM", activity: "Learning Centers", desc: "Literacy, math, and science activities" },
                { time: "10:00 AM", activity: "Snack Time", desc: "Healthy snacks and social skills" },
                { time: "10:30 AM", activity: "Outdoor Play", desc: "Physical development and fresh air" },
                { time: "11:30 AM", activity: "Creative Arts", desc: "Art, music, and creative expression" },
                { time: "12:00 PM", activity: "Lunch", desc: "Nutritious meals and table manners" },
                { time: "1:00 PM", activity: "Rest Time", desc: "Quiet activities and relaxation" },
                { time: "2:00 PM", activity: "Story Time", desc: "Reading and language development" },
                { time: "2:30 PM", activity: "Closing Circle", desc: "Review of the day and preparation for home" }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-6 p-6 bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl">
                  <div className="bg-pink-600 text-white px-4 py-2 rounded-lg font-bold min-w-[100px] text-center">
                    {item.time}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-slate-800 mb-1">{item.activity}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};