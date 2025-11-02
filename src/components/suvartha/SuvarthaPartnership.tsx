"use client";

import { useState } from 'react';

export default function SuvarthaPartnership() {
  const [showDonationModal, setShowDonationModal] = useState(false);



  const handlePayPalDonate = () => {
    window.open('https://www.paypal.com/donate/?hosted_button_id=3E288HDKQF5ZN', '_blank');
  };

  return (
    <>
      <section id="partnership" className="pt-24 pb-12 sm:pt-28 sm:pb-16 md:pt-32 md:pb-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4 sm:mb-6">
              Partner With Us
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-emerald-600 mx-auto mb-4 sm:mb-6"></div>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              Your generous support helps us continue our ministry work and reach more lives with God's love
            </p>
          </div>

          {/* Main Donation Card */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl sm:rounded-3xl p-8 sm:p-12 shadow-xl text-center border-2 border-black">
              {/* Professional Logo */}
              <div className="mb-8">
                <div className="w-20 h-20 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <img 
                    width="40" 
                    height="40" 
                    src="https://img.icons8.com/ios/50/donate.png" 
                    alt="donate"
                    className="w-10 h-10 filter brightness-0 invert"
                  />
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
                  Donate to Suvartha Ministries
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed max-w-lg mx-auto">
                  Your generous donation helps us continue our ministry work and outreach programs.
                </p>
              </div>

              {/* Donate Button */}
              <button
                onClick={() => setShowDonationModal(true)}
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-10 sm:px-12 py-4 sm:py-5 rounded-full font-bold text-lg sm:text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Donate Now
              </button>
            </div>
          </div>


        </div>
      </section>

      {/* Donation Modal */}
      {showDonationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 relative border-2 border-black">
            {/* Close Button */}
            <button
              onClick={() => setShowDonationModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Modal Content */}
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">Donate to Suvartha Ministries</h3>
              <p className="text-gray-600 leading-relaxed">
                Your generous donation helps us continue our ministry work and outreach programs.
              </p>
            </div>

            {/* PayPal Section */}
            <div className="bg-gray-50 rounded-xl p-6 mb-6">
              <h4 className="text-xl font-bold text-gray-800 mb-2">Donate via PayPal</h4>
              <p className="text-gray-600 mb-4">Make a secure donation through PayPal</p>
              <button
                onClick={handlePayPalDonate}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg font-bold text-lg transition-colors"
              >
                Donate with PayPal
              </button>
            </div>

            {/* Bank Transfer Section */}
            <div className="bg-gray-50 rounded-xl p-6">
              <h4 className="text-xl font-bold text-gray-800 mb-4">Bank Transfer</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Account Name:</span>
                  <span className="text-gray-800">Suvartha Ministries UK</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Bank:</span>
                  <span className="text-gray-800">Metro Bank</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Account Number:</span>
                  <span className="text-gray-800">44736004</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Sort Code:</span>
                  <span className="text-gray-800">23-05-80</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-600">Reference:</span>
                  <span className="text-gray-800">Donation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}