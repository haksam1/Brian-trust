export const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-12 mt-auto">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* School Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img 
                src="/assets/img/badge_prev_ui.png" 
                alt="School Logo" 
                className="w-12 h-12 rounded-full"
              />
              <h3 className="text-xl font-bold">Brain Trust School Nansana</h3>
            </div>
            <p className="text-blue-200 mb-4 max-w-md">
              Where learning is an adventure, and every student is valued. We provide quality education 
              with a focus on holistic development since 2014.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="bi bi-facebook text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="bi bi-twitter-x text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="bi bi-instagram text-xl"></i>
              </a>
              <a href="#" className="text-blue-300 hover:text-white transition-colors">
                <i className="bi bi-tiktok text-xl"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="/services" className="text-blue-200 hover:text-white transition-colors">Our Services</a></li>
              <li><a href="/gallery" className="text-blue-200 hover:text-white transition-colors">Gallery</a></li>
              <li><a href="/contact" className="text-blue-200 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-3 text-blue-200">
              <div className="flex items-start space-x-2">
                <i className="bi bi-geo-alt mt-1"></i>
                <span className="text-sm">Nansana Kabumbi, Mpanga RD, Uganda</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="bi bi-telephone"></i>
                <span className="text-sm">+256 751 604 372</span>
              </div>
              <div className="flex items-center space-x-2">
                <i className="bi bi-envelope"></i>
                <span className="text-sm">briantrustschool@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 text-center">
          <p className="text-blue-200 mb-2">&copy; 2025 Brain Trust School Nansana. All Rights Reserved.</p>
          <div className="text-sm text-blue-300">
            Registration: PPS/B/313 | UNEB No: 538549
          </div>
        </div>
      </div>
    </footer>
  );
};