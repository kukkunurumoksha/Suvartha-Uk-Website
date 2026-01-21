import SuvarthaLogo from '../suvartha/SuvarthaLogo';

export default function SuvarthaHero() {
  return (
    <section id="home" className="bg-gradient-to-br from-emerald-700 to-emerald-900 text-white py-16 sm:py-20 md:py-24 relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-4 sm:left-10 w-16 sm:w-32 h-16 sm:h-32 border border-white/20 rounded-full"></div>
        <div className="absolute top-32 right-4 sm:right-20 w-12 sm:w-24 h-12 sm:h-24 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-8 sm:w-16 h-8 sm:h-16 border border-white/20 rounded-full"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <SuvarthaLogo size="xl" variant="light" showText={false} className="justify-center" />
        </div>

        {/* Top Badge */}
        <div className="inline-block bg-emerald-600/30 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-emerald-400/50">
          <span className="text-xs sm:text-sm font-medium">2025 - YEAR OF REPLENISHMENT</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2">
          Welcome to<br />
          <span className="text-emerald-200">
            Suvartha Ministries UK
          </span>
        </h1>

        {/* Scripture Reference */}
        <p className="text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6 font-medium opacity-90">Jeremiah 31:25</p>
        
        {/* Scripture Quote */}
        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed font-light px-4">
          &quot;For I have satiated the weary soul, and I have replenished every sorrowful soul.&quot;
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white text-emerald-800 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-emerald-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 w-full sm:w-auto justify-center"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Join Our Services</span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-emerald-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center"
          >
            Contact Us
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-12">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
}