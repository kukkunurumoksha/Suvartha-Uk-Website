import Image from 'next/image';

export default function SuvarthaServices() {
  const mainServices = [
    {
      title: "Sunday Fellowship",
      subtitle: "Malayalam/English Service",
      location: "Pegasus House, 17 Burleys Way, Leicester, LE1 3BH",
      time: "10:00 AM - 1:00 PM (GMT)",
      zoom: "Also available on Zoom: 3563832030",
      icon: "church",
      iconBg: "bg-gradient-to-br from-blue-500 to-blue-600",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
    },
    {
      title: "Tuesday Service",
      subtitle: "Mid-week Fellowship",
      location: "United Kingdom (GMT)",
      time: "7:00 PM - 8:30 PM (GMT)",
      zoom: "Zoom ID: 3563832030",
      icon: "calendar",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-orange-50 to-red-50",
      borderColor: "border-orange-200",
    },
  ];

  const childrenServices = [
    {
      title: "Saturday Kids Church",
      timezone: "Time zone- United Kingdom (GMT)",
      time: "Time- 3:30PM to 5:00PM",
      icon: "heart",
      iconBg: "bg-gradient-to-br from-pink-500 to-rose-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-pink-50 to-rose-50",
      borderColor: "border-pink-200",
    },
    {
      title: "Sunday Kids Bible School",
      timezone: "Time zone- United Kingdom (GMT)",
      time: "Time- 9:00AM to 10:00PM",
      icon: "book",
      iconBg: "bg-gradient-to-br from-purple-500 to-indigo-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-purple-50 to-indigo-50",
      borderColor: "border-purple-200",
    },
    {
      title: "Join Us ",
      subtitle: "Services available on Zoom",
      zoom: "ID: 3563832030",
      icon: "people",
      iconBg: "bg-gradient-to-br from-green-500 to-emerald-500",
      iconColor: "text-white",
      cardBg: "bg-gradient-to-br from-green-50 to-emerald-50",
      borderColor: "border-green-200",
    },
  ];

  return (
    <section id="services" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-gradient-to-br from-amber-50 via-white to-yellow-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-yellow-500 mx-auto mb-6 rounded-full shadow-lg"></div>
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-4">
              Join with us to experience the God&apos;s presence & to taste the
              living manna.
            </p>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-12 sm:mb-16 md:mb-20">
          {mainServices.map((service, index) => (
            <div
              key={index}
              className={`${service.cardBg} rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor} hover:scale-105 transform`}
            >
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                {/* Icon */}
                <div
                  className={`${service.iconBg} p-4 rounded-2xl flex-shrink-0 mx-auto sm:mx-0 shadow-lg`}
                >
                  {service.icon === "church" && (
                    <Image
                      width={32}
                      height={32}
                      alt="christian-prayer"
                      className="w-8 h-8"
                      src="https://img.icons8.com/ios-filled/50/ffffff/christian-prayer.png"
                      unoptimized
                    />
                  )}
                  {service.icon === "calendar" && (
                    <Image
                      width={32}
                      height={32}
                      alt="prayer"
                      className="w-8 h-8"
                      src="https://img.icons8.com/ios-filled/50/ffffff/prayer.png"
                      unoptimized
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-700 mb-3 text-base font-medium">
                    {service.subtitle}
                  </p>

                  {/* Location */}
                  <div className="flex items-center justify-center sm:justify-start text-gray-700 mb-2">
                    <Image
                      width={16}
                      height={16}
                      src="https://img.icons8.com/ios/50/marker--v1.png"
                      alt="marker--v1"
                      className="w-4 h-4 mr-2 flex-shrink-0 self-start mt-0.5"
                    />
                    <span className="text-sm leading-4 text-center sm:text-left">
                      {service.location}
                    </span>
                  </div>

                  {/* Time */}
                  <div className="flex items-center justify-center sm:justify-start text-gray-700 mb-4">
                    <Image
                      width={16}
                      height={16}
                      src="https://img.icons8.com/ios/50/timer.png"
                      alt="timer"
                      className="w-4 h-4 mr-2 flex-shrink-0 self-start mt-0.5"
                    />
                    <span className="text-sm font-semibold leading-4 text-center sm:text-left">
                      {service.time}
                    </span>
                  </div>

                  {/* Join Online Button */}
                  <div className="mt-4 flex justify-center sm:justify-start">
                    <button
                      onClick={() =>
                        window.open("https://zoom.us/j/3563832030", "_blank")
                      }
                      className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                      <span>Join Online</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Children's Ministry Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-amber-100 to-yellow-100 text-amber-800 px-8 py-4 rounded-full shadow-lg border-2 border-amber-200">
            <svg
              className="w-6 h-6 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
            <span className="font-bold text-xl">Children&apos;s Ministry</span>
          </div>
        </div>

        {/* Children's Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {childrenServices.map((service, index) => (
            <div
              key={index}
              className={`${service.cardBg} rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${service.borderColor} hover:scale-105 transform`}
            >
              <div className="text-center">
                {/* Icon */}
                <div
                  className={`${
                    service.iconBg
                  } w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg ${
                    service.icon === "people" ? "border-2 border-white" : ""
                  }`}
                >
                  {service.icon === "heart" && (
                    <Image
                      width={32}
                      height={32}
                      alt="children--v2"
                      className="w-8 h-8 filter brightness-0 invert"
                      src="https://img.icons8.com/ios/50/children--v2.png"
                      unoptimized
                    />
                  )}
                  {service.icon === "book" && (
                    <Image
                      width={32}
                      height={32}
                      alt="holy-bible"
                      className="w-8 h-8"
                      src="https://img.icons8.com/comic/100/ffffff/holy-bible.png"
                      unoptimized
                    />
                  )}
                  {service.icon === "people" && (
                    <Image
                      width={32}
                      height={32}
                      src="https://img.icons8.com/color/48/zoom.png"
                      alt="zoom"
                      className="w-8 h-8"
                      unoptimized
                    />
                  )}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {service.title}
                </h3>
                {service.subtitle && (
                  <p className="text-gray-600 mb-2">{service.subtitle}</p>
                )}

                {service.timezone && (
                  <div className="mb-2">
                    <div className="flex items-center justify-center text-gray-700 mb-1">
                      <Image
                        width={16}
                        height={16}
                        src="https://img.icons8.com/ios/50/marker--v1.png"
                        alt="marker--v1"
                        className="w-4 h-4 mr-2"
                      />
                      <span className="font-medium text-base">
                        United Kingdom (GMT)
                      </span>
                    </div>
                    <div className="flex items-center justify-center text-gray-700">
                      <Image
                        width={16}
                        height={16}
                        src="https://img.icons8.com/ios/50/timer.png"
                        alt="timer"
                        className="w-4 h-4 mr-2"
                      />
                      <span className="font-medium text-base">
                        {service.time.replace("Time- ", "")}
                      </span>
                    </div>
                  </div>
                )}

                {service.zoom && (
                  <button
                    onClick={() =>
                      window.open("https://zoom.us/j/3563832030", "_blank")
                    }
                    className="bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    <span>Join Online</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
