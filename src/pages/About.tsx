export const About = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Us</h1>
          <nav className="text-slate-300">
            <span>Learn more about Brain Trust School Nansana</span>
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-bold mb-6 text-slate-800">Our Mission</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              At Brain Trust School Nansana, we are committed to providing quality education that nurtures young minds 
              and prepares them for a bright future. Our comprehensive approach combines academic excellence with 
              character development.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              We offer a safe, supportive, and stimulating environment where children can grow, learn, and develop 
              into confident, well-rounded individuals ready to take on the challenges of tomorrow.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Vision</h3>
              <p className="text-slate-600">
                To be the leading educational institution that shapes future leaders through innovative teaching 
                methods and holistic development programs.
              </p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-2xl font-bold mb-4 text-slate-800">Our Values</h3>
              <ul className="space-y-2 text-slate-600">
                <li>• Excellence in Education</li>
                <li>• Character Development</li>
                <li>• Innovation and Creativity</li>
                <li>• Community Engagement</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};