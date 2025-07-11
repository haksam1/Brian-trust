export const Home = () => {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-white overflow-hidden">
        {/* Background Video */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline 
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/src/assets/img/vi.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-slate-900/40 z-10"></div>
        
        {/* Content */}
        <div className="relative z-20 text-center max-w-4xl px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg">
            Brain Trust School Nansana
          </h1>
          <div className="text-xl md:text-2xl mb-8 font-light">
            <span className="typed-text">Mixed Day And Boarding/Day Care, Kindergarten And Primary School.</span>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
          <i className="bi bi-chevron-down text-3xl"></i>
        </div>
      </section>
    </main>
  );
};