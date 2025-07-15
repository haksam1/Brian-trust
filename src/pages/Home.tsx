export const Home = () => {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        
        {/* Background Video */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-50"
          >
            <source src="/assets/img/vi.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Dark Overlay to Boost Text Contrast */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* Foreground Content */}
        <div className="relative z-20 text-center px-6 py-16 max-w-4xl">
          <div className="mb-8 animate-fade-in">
            <img 
              src="/assets/img/badge_prev_ui.png" 
              alt="School Logo" 
              className="w-28 h-28 md:w-36 md:h-36 mx-auto rounded-full shadow-xl border-4 border-white/30"
            />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight text-shadow-xl">
            Brain Trust School Nansana
          </h1>

          <div className="text-lg md:text-xl lg:text-2xl mb-8 font-light text-blue-100 max-w-3xl mx-auto">
            <p className="mb-3">Mixed Day and Boarding / Day Care, Kindergarten and Primary School</p>
            <p className="text-base md:text-lg text-slate-300 italic">
              Where learning is an adventure, and every student is valued.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
