import SuvarthaLogo from '../suvartha/SuvarthaLogo';

export default function SuvarthaHero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image - Using your new hero-background.jpeg */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/hero-background.jpeg')",
        }}
      />
      
      {/* Gentle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Spiritual golden overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-yellow-600/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white min-h-screen flex flex-col justify-center items-center text-center">
        
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <SuvarthaLogo size="xl" variant="light" showText={false} className="justify-center" />
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-lg mb-8 sm:mb-12">
          He Replenishes<br />
          <span className="text-yellow-200 drop-shadow-lg">
            Every Sorrowful Soul
          </span>
        </h1>

        {/* Scripture verse - centered */}
        <div className="max-w-2xl mx-auto mb-12 sm:mb-16">
          {/* Scripture Reference */}
          <div className="mb-6 text-center">
            <div className="inline-block bg-white/30 backdrop-blur-md px-6 py-3 rounded-xl border border-white/30 shadow-xl">
              <p className="text-xl sm:text-2xl font-bold text-yellow-200 drop-shadow-lg">Galatians 2:20</p>
            </div>
          </div>
          
          {/* Scripture Quote */}
          <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/30 shadow-2xl">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium text-white drop-shadow-lg italic text-center">
              &quot;I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.&quot;
            </p>
            <div className="mt-6 flex justify-center">
              <div className="w-20 h-1 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full shadow-lg"></div>
            </div>
            <p className="text-sm sm:text-base text-yellow-200 mt-4 font-light text-center drop-shadow">
              Living by faith in Christ who lives within us - our hope and strength for 2026
            </p>
          </div>
        </div>

        {/* CTA Buttons - centered */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-16 sm:mb-20">
          <button 
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-white/90 text-amber-800 px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center space-x-2 w-full sm:w-auto justify-center backdrop-blur-sm"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Join Our Prayer</span>
          </button>
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white text-white px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-amber-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:w-auto justify-center backdrop-blur-md"
          >
            Find Hope Here
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}