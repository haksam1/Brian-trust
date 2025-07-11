export const KindergartenService = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Service Details</h1>
          <nav className="text-slate-300">
            <a href="/services" className="hover:text-white">Back</a>
          </nav>
        </div>
      </div>

      {/* Service Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Title */}
            <div className="flex items-center justify-center lg:justify-start">
              <h1 className="text-6xl font-bold text-slate-800">Kindergarten</h1>
            </div>

            {/* Content */}
            <div>
              <img 
                src="/src/assets/img/c1.jpg" 
                alt="Kindergarten" 
                className="w-full rounded-lg shadow-lg mb-6"
              />
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h4 className="text-xl font-bold mb-4 text-slate-800">
                  At Brain Trust School Nansana, our Kindergarten section is a nurturing environment designed for our youngest learners.
                </h4>
                <p className="text-slate-600 mb-4">
                  With a focus on play-based learning, we introduce foundational skills in a fun and engaging way. Our dedicated teachers ensure that every child feels safe, happy, and excited to learn.
                </p>
                <span className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-lg font-medium">
                  3 classes
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};