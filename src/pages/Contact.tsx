export const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Get in touch with us to learn more about our programs, schedule a visit, or ask any questions you may have.
            </p>
          </div>
          <nav className="text-blue-200 mt-8 text-center">
            <a href="/" className="hover:text-white transition-colors">Home</a>
            <span className="mx-2">•</span>
            <span>Contact</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-5 gap-16">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl p-8 space-y-8">
              <div className="text-center mb-8">
                <h2 className="text-2xl font-bold text-slate-800 mb-4">Get In Touch</h2>
                <p className="text-slate-600">We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-blue-50">
                <div className="bg-blue-600 p-3 rounded-full shadow-lg">
                  <i className="bi bi-geo-alt text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">Address</h3>
                  <p className="text-slate-600 leading-relaxed">
                    Nansana Kabumbi<br />
                    Mpanga Road<br />
                    Uganda
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-green-50">
                <div className="bg-green-600 p-3 rounded-full shadow-lg">
                  <i className="bi bi-telephone text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">Call Us</h3>
                  <p className="text-slate-600 mb-1">+256 751 604 372</p>
                  <p className="text-slate-600">+256 392 080 428</p>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-4 rounded-xl bg-purple-50">
                <div className="bg-purple-600 p-3 rounded-full shadow-lg">
                  <i className="bi bi-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">Email Us</h3>
                  <p className="text-slate-600">briantrustschool@gmail.com</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 p-4 rounded-xl bg-orange-50">
                <div className="bg-orange-600 p-3 rounded-full shadow-lg">
                  <i className="bi bi-clock text-white text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-2 text-lg">School Hours</h3>
                  <p className="text-slate-600 mb-1">Monday - Friday: 7:00 AM - 5:00 PM</p>
                  <p className="text-slate-600">Saturday: 8:00 AM - 12:00 PM</p>
                </div>
              </div>

                {/* Map */}
              <div className="mt-8">
                <h3 className="font-bold text-slate-800 mb-4 text-lg">Find Us</h3>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15961.008287174988!2d32.527667!3d0.371278!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMC4zNzEyNzgsIDMyLjUyNzY2Nw!5e0!3m2!1sen!2sug!4v1723567890000!5m2!1sen!2sug"
                  className="w-full h-64 rounded-xl border-0 shadow-lg"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4 text-slate-800">Send us a Message</h2>
                <p className="text-slate-600">Fill out the form below and we'll get back to you as soon as possible.</p>
              </div>
              
              <form 
                action="https://api.web3forms.com/submit" 
                method="post" 
                className="space-y-8"
              >
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="94133982-1ccf-4bfe-b7ac-7e3706cf6485" 
                />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Your Name *</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-3">Your Email *</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your email address"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Subject *</label>
                  <input 
                    type="text" 
                    name="subject"
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                    placeholder="What is this regarding?"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-3">Message *</label>
                  <textarea 
                    name="message"
                    rows={8}
                    className="w-full px-4 py-4 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us more about your inquiry..."
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-4 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold text-lg shadow-xl transform hover:scale-105"
                  >
                    <i className="bi bi-send mr-2"></i>
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};