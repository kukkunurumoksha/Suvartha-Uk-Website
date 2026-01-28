export default function SuvarthaContact() {
  const contactMethods = [
    {
      title: "Give Us A Call",
      subtitle: "+44 7427527524",
      description: "Call us for prayer requests or general inquiries",
      color: "bg-white border-black",
    },
    {
      title: "Send Us A Mail",
      subtitle: "suvarthaministriesuk@gmail.com",
      description: "Email us your questions or prayer requests",
      color: "bg-white border-black",
    },
    {
      title: "Come Visit Us",
      subtitle: "Pegasus House, 17 Burleys Way\nLeicester, LE1 3BH, UK",
      description: "Join us for worship every Sunday at 10:00 AM",
      color: "bg-white border-black",
    },
  ];

  return (
    <section id="contact" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
            Contact Us
          </h2>
          <div className="w-24 h-1 bg-emerald-600 mx-auto mb-6"></div>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            We&apos;d love to hear from you. Get in touch with us for any questions
            or prayer requests.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-12 sm:mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className={`text-center p-6 sm:p-8 rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${method.color} min-h-[280px] flex flex-col justify-between`}
            >
              <div>
                <div
                  className={`w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center ${
                    index === 0
                      ? "bg-blue-100"
                      : index === 1
                      ? "bg-green-100"
                      : "bg-purple-100"
                  }`}
                >
                  {index === 0 && (
                    <svg
                      className="w-8 h-8 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg
                      className="w-8 h-8 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg
                      className="w-8 h-8 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">
                  {method.title}
                </h3>
                <div className="mb-4">
                  {index === 1 ? (
                    <p className="text-emerald-600 font-bold text-sm sm:text-base break-all">
                      {method.subtitle}
                    </p>
                  ) : index === 2 ? (
                    <div className="text-emerald-600 font-bold text-base">
                      <p>Pegasus House, 17 Burleys Way</p>
                      <p>Leicester, LE1 3BH, UK</p>
                    </div>
                  ) : (
                    <p className="text-emerald-600 font-bold text-lg">
                      {method.subtitle}
                    </p>
                  )}
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base mt-auto">
                {method.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
