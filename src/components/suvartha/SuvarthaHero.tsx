import SuvarthaLogo from '../suvartha/SuvarthaLogo';

export default function SuvarthaHero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen flex items-center">
      {/* Background Image - Put your image file in public/assets/img/hero-background.jpg */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/assets/img/hero-background.png')",
        }}
      />
      
      {/* Gentle overlay for text readability */}
      <div className="absolute inset-0 bg-black/30" />
      
      {/* Spiritual golden overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-amber-900/40 via-transparent to-yellow-600/20" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 w-full text-white">
        {/* Logo */}
        <div className="mb-6 sm:mb-8">
          <SuvarthaLogo size="xl" variant="light" showText={false} className="justify-center" />
        </div>

        {/* Top Badge */}
        <div className="inline-block bg-white/20 backdrop-blur-md rounded-full px-4 sm:px-6 py-2 sm:py-3 mb-6 sm:mb-8 border border-white/30 shadow-lg">
          <span className="text-xs sm:text-sm font-medium text-white">🙏 GOD HEARS YOUR PRAYERS 🙏</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight px-2 text-white drop-shadow-lg">
          He Replenishes<br />
          <span className="text-yellow-200 drop-shadow-lg">
            Every Sorrowful Soul
          </span>
        </h1>

        {/* Scripture Reference */}
        <div className="mb-4 sm:mb-6">
          <div className="inline-block bg-white/25 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-lg">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-200 drop-shadow">Jeremiah 31:25</p>
          </div>
        </div>
        
        {/* Scripture Quote */}
        <div className="mb-8 sm:mb-12">
          <div className="max-w-4xl mx-auto bg-white/20 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/20 shadow-xl">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed font-medium px-4 text-white drop-shadow italic">
              &quot;For I have satiated the weary soul, and I have replenished every sorrowful soul.&quot;
            </p>
            <div className="mt-4 flex justify-center">
              <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full shadow-lg"></div>
            </div>
            <p className="text-sm sm:text-base text-yellow-200 mt-4 font-light">
              When you cry out to God with tears of joy, He fills your heart with His love and peace
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4">
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
        <div className="mt-12">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto flex justify-center bg-white/10 backdrop-blur-sm">
            <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce shadow-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
}