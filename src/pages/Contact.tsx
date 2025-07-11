export const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Page Header */}
      <div className="bg-slate-900 text-white py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact</h1>
          <nav className="text-slate-300">
            <span>Home</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="bi bi-geo-alt text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Address</h3>
                  <p className="text-slate-600">Nansana Kabumbi<br />Mpanga RD, Uganda</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="bi bi-telephone text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Call Us</h3>
                  <p className="text-slate-600">0751604372</p>
                  <p className="text-slate-600">0392-080428</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <i className="bi bi-envelope text-blue-600 text-xl"></i>
                </div>
                <div>
                  <h3 className="font-bold text-slate-800 mb-1">Email Us</h3>
                  <p className="text-slate-600">briantrustschool@gmail.com</p>
                </div>
              </div>

              {/* Map */}
              <div className="mt-6">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d488.82568476979407!2d32.52760059145552!3d0.3710037671084282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjInMTYuNiJOIDMywrAzMSczOS42IkU!5e1!3m2!1sen!2sug!4v1727300790086!5m2!1sen!2sug"
                  className="w-full h-64 rounded-lg border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 text-slate-800">Send us a Message</h2>
              
              <form 
                action="https://api.web3forms.com/submit" 
                method="post" 
                className="space-y-6"
              >
                <input 
                  type="hidden" 
                  name="access_key" 
                  value="94133982-1ccf-4bfe-b7ac-7e3706cf6485" 
                />
                
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Your Name</label>
                    <input 
                      type="text" 
                      name="name"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-medium mb-2">Your Email</label>
                    <input 
                      type="email" 
                      name="email"
                      className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Subject</label>
                  <input 
                    type="text" 
                    name="subject"
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-medium mb-2">Message</label>
                  <textarea 
                    name="message"
                    rows={10}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>

                <div className="text-center">
                  <button 
                    type="submit"
                    className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg"
                  >
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