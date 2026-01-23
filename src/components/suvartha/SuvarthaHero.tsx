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
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white min-h-screen flex flex-col justify-between">
        
        {/* Top section - Logo and main heading centered */}
        <div className="text-center pt-8 sm:pt-12 lg:pt-16">
          {/* Logo */}
          <div className="mb-6 sm:mb-8">
            <SuvarthaLogo size="xl" variant="light" showText={false} className="justify-center" />
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white drop-shadow-lg">
            He Replenishes<br />
            <span className="text-yellow-200 drop-shadow-lg">
              Every Sorrowful Soul
            </span>
          </h1>
        </div>

        {/* Middle section - Scripture verse on the far right */}
        <div className="flex-1 flex items-center justify-end pr-4 lg:pr-12 xl:pr-20 2xl:pr-24">
          <div className="hidden lg:block max-w-sm xl:max-w-md ml-auto">
            {/* Scripture Reference */}
            <div className="mb-4 sm:mb-6 text-center">
              <div className="inline-block bg-white/25 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-lg">
                <p className="text-lg sm:text-xl font-bold text-yellow-200 drop-shadow">Galatians 2:20</p>
              </div>
            </div>
            
            {/* Scripture Quote */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/20 shadow-xl">
              <p className="text-sm sm:text-base leading-relaxed font-medium text-white drop-shadow italic text-center">
                &quot;I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.&quot;
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-12 h-1 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full shadow-lg"></div>
              </div>
              <p className="text-xs sm:text-sm text-yellow-200 mt-3 font-light text-center">
                Living by faith in Christ who lives within us - our hope and strength for 2026
              </p>
            </div>
          </div>
        </div>

        {/* Mobile verse - shown only on smaller screens */}
        <div className="lg:hidden mb-8">
          <div className="max-w-md mx-auto">
            {/* Scripture Reference */}
            <div className="mb-4 text-center">
              <div className="inline-block bg-white/25 backdrop-blur-md px-4 py-2 rounded-lg border border-white/20 shadow-lg">
                <p className="text-lg font-bold text-yellow-200 drop-shadow">Galatians 2:20</p>
              </div>
            </div>
            
            {/* Scripture Quote */}
            <div className="bg-white/20 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-xl">
              <p className="text-base leading-relaxed font-medium text-white drop-shadow italic text-center">
                &quot;I have been crucified with Christ and I no longer live, but Christ lives in me. The life I now live in the body, I live by faith in the Son of God, who loved me and gave himself for me.&quot;
              </p>
              <div className="mt-4 flex justify-center">
                <div className="w-16 h-1 bg-gradient-to-r from-yellow-300 to-amber-300 rounded-full shadow-lg"></div>
              </div>
              <p className="text-sm text-yellow-200 mt-4 font-light text-center">
                Living by faith in Christ who lives within us - our hope and strength for 2026
              </p>
            </div>
          </div>
        </div>

        {/* Bottom section - CTA Buttons and scroll indicator */}
        <div className="pb-6 sm:pb-8">
          {/* CTA Buttons - moved down more */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-12 sm:mb-16 px-4 pt-8 sm:pt-12">
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
          <div className="flex justify-center">
            <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center bg-white/10 backdrop-blur-sm">
              <div className="w-1 h-3 bg-white/80 rounded-full mt-2 animate-bounce shadow-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}