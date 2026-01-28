"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import SuvarthaHeader from '../../components/suvartha/SuvarthaHeader';
import SuvarthaFooter from '../../components/suvartha/SuvarthaFooter';

function PoliciesContent() {
  const searchParams = useSearchParams();
  const [selectedPolicy, setSelectedPolicy] = useState<string | null>(null);
  const [policyImages, setPolicyImages] = useState<{[key: string]: string[]}>({});
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [policyFiles, setPolicyFiles] = useState({
    'data-protection': true,
    'risk-management': true,
    'safeguarding': true
  });

  useEffect(() => {
    // Check if a specific policy is requested via URL parameter
    const policyParam = searchParams.get('policy');
    const pdfParam = searchParams.get('pdf'); // Keep backward compatibility
    const directParam = searchParams.get('direct'); // Check if direct access is requested
    
    if (policyParam) {
      if (directParam === 'true') {
        // Direct access - immediately open the policy viewer
        setSelectedPolicy(policyParam);
      } else {
        // Regular access - just set the policy but don't open viewer
        // This allows the overview page to show first
      }
    } else if (pdfParam) {
      // Map PDF names to policy keys for backward compatibility
      if (pdfParam.includes('Data Protection')) {
        setSelectedPolicy('data-protection');
      } else if (pdfParam.includes('risk management')) {
        setSelectedPolicy('risk-management');
      } else if (pdfParam.includes('Safeguarding')) {
        setSelectedPolicy('safeguarding');
      }
    }

    // Load policy images with correct file paths
    setPolicyImages({
      'data-protection': [
        '/policy-images/Data protection/page-1.jpg',
        '/policy-images/Data protection/page-2.jpg',
        '/policy-images/Data protection/page-3.jpg',
        '/policy-images/Data protection/page-4.jpg',
        '/policy-images/Data protection/page-5.jpg',
        '/policy-images/Data protection/page-6.jpg',
        '/policy-images/Data protection/page-7.jpg',
        '/policy-images/Data protection/page-8.jpg',
        '/policy-images/Data protection/page-9.jpg',
        '/policy-images/Data protection/page-10.jpg',
        '/policy-images/Data protection/page-11.jpg',
        '/policy-images/Data protection/page-12.jpg'
      ],
      'risk-management': [
        '/policy-images/Internal risk management/Internal risk management policy and procedures_page-0001.jpg',
        '/policy-images/Internal risk management/Internal risk management policy and procedures_page-0002.jpg',
        '/policy-images/Internal risk management/Internal risk management policy and procedures_page-0003.jpg',
        '/policy-images/Internal risk management/Internal risk management policy and procedures_page-0004.jpg',
        '/policy-images/Internal risk management/Internal risk management policy and procedures_page-0005.jpg',
        '/policy-images/Internal risk management/Internal risk management policy and procedures_page-0006.jpg'
      ],
      'safeguarding': [
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0001.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0002.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0003.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0004.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0005.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0006.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0007.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0008.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0009.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0010.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0011.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0012.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0013.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0014.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0015.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0016.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0017.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0018.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0019.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0020.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0021.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0022.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0023.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0024.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0025.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0026.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0027.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0028.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0029.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0030.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0031.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0032.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0033.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0034.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0035.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0036.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0037.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0038.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0039.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0040.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0041.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0042.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0043.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0044.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0045.jpg',
        '/policy-images/safeguarding/Safeguarding Policy and Procedures_page-0046.jpg'
      ]
    });

    // Set policy availability - all policies now have images uploaded
    setPolicyFiles({
      'data-protection': true,  // 12 pages
      'risk-management': true,  // 6 pages  
      'safeguarding': true      // 46 pages
    });

    // COMPREHENSIVE mobile screenshot protection
    if (selectedPolicy) {
      let isProtectionActive = false;
      let touchStartTime = 0;
      let volumeKeyPressed = false;
      let powerKeyPressed = false;
      let lastVisibilityChange = 0;
      let screenshotAttemptCount = 0;

      const addWatermarkProtection = () => {
        setTimeout(() => {
          const policyContent = document.querySelector('.policy-content') as HTMLElement;
          if (policyContent && !policyContent.querySelector('.screenshot-protection')) {
            const watermarkOverlay = document.createElement('div');
            watermarkOverlay.className = 'screenshot-protection';
            watermarkOverlay.style.cssText = `
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              pointer-events: none;
              z-index: 1000;
              background: repeating-linear-gradient(
                45deg,
                transparent,
                transparent 60px,
                rgba(255, 193, 7, 0.3) 60px,
                rgba(255, 193, 7, 0.3) 120px
              ), repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 60px,
                rgba(255, 193, 7, 0.25) 60px,
                rgba(255, 193, 7, 0.25) 120px
              );
            `;
            
            // Add multiple watermark texts that make screenshots useless
            const watermarkTexts = [
              { text: 'SUVARTHA MINISTRIES UK', top: '10%', left: '5%', size: '28px', opacity: '0.5' },
              { text: 'CONFIDENTIAL DOCUMENT', top: '25%', left: '55%', size: '32px', opacity: '0.6' },
              { text: 'AUTHORIZED USE ONLY', top: '40%', left: '15%', size: '26px', opacity: '0.5' },
              { text: '© 2026 SUVARTHA UK', top: '55%', left: '65%', size: '22px', opacity: '0.4' },
              { text: 'PROTECTED CONTENT', top: '70%', left: '25%', size: '28px', opacity: '0.5' },
              { text: 'CHURCH POLICY', top: '85%', left: '5%', size: '24px', opacity: '0.45' },
              { text: 'NOT FOR DISTRIBUTION', top: '15%', left: '75%', size: '24px', opacity: '0.4' },
              { text: 'CONFIDENTIAL', top: '60%', left: '5%', size: '22px', opacity: '0.4' },
              { text: 'SCREENSHOT PROTECTED', top: '30%', left: '25%', size: '26px', opacity: '0.5' },
              { text: 'AUTHORIZED VIEWING ONLY', top: '75%', left: '45%', size: '24px', opacity: '0.45' }
            ];
            
            watermarkTexts.forEach((item) => {
              const textElement = document.createElement('div');
              textElement.textContent = item.text;
              textElement.style.cssText = `
                position: absolute;
                font-size: ${item.size};
                font-weight: bold;
                color: rgba(255, 193, 7, ${item.opacity});
                transform: rotate(45deg);
                white-space: nowrap;
                top: ${item.top};
                left: ${item.left};
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                font-family: Arial, sans-serif;
              `;
              watermarkOverlay.appendChild(textElement);
            });
            
            policyContent.appendChild(watermarkOverlay);
          }
        }, 300);
      };

      const blurContent = (duration = 5000) => {
        const policyContent = document.querySelector('.policy-content') as HTMLElement;
        if (policyContent && !isProtectionActive) {
          isProtectionActive = true;
          policyContent.style.filter = 'blur(50px)';
          policyContent.style.transition = 'filter 0.1s ease-out';
          
          setTimeout(() => {
            if (policyContent) {
              policyContent.style.filter = 'none';
              policyContent.style.transition = 'filter 0.5s ease-in';
            }
            isProtectionActive = false;
          }, duration);
        }
      };

      // Enhanced keyboard detection
      const handleKeyDown = (e: KeyboardEvent) => {
        // Volume keys detection (some browsers support this)
        if (e.code === 'VolumeUp' || e.code === 'VolumeDown' || e.key === 'VolumeUp' || e.key === 'VolumeDown') {
          volumeKeyPressed = true;
          setTimeout(() => { volumeKeyPressed = false; }, 2000);
        }
        
        // Power button detection (limited support)
        if (e.code === 'Power' || e.key === 'Power') {
          powerKeyPressed = true;
          setTimeout(() => { powerKeyPressed = false; }, 2000);
        }

        // Traditional screenshot keys
        if (e.key === 'PrintScreen' || e.key === 'F12' || 
            (e.ctrlKey && e.shiftKey && e.key === 'I') ||
            (e.ctrlKey && e.shiftKey && e.key === 'C') ||
            (e.ctrlKey && e.key === 'u')) {
          e.preventDefault();
          blurContent(4000);
          return false;
        }

        // Check for simultaneous volume + power
        if (volumeKeyPressed && powerKeyPressed) {
          e.preventDefault();
          blurContent(6000);
          screenshotAttemptCount++;
          return false;
        }
      };

      // Enhanced visibility change detection for mobile screenshots
      const handleVisibilityChange = () => {
        const now = Date.now();
        const timeSinceLastChange = now - lastVisibilityChange;
        lastVisibilityChange = now;

        // Mobile screenshot often causes brief visibility changes
        if (document.hidden) {
          // Page became hidden - possible screenshot
          setTimeout(() => {
            if (!document.hidden && timeSinceLastChange < 1000) {
              // Page became visible again quickly - likely screenshot
              blurContent(4000);
              screenshotAttemptCount++;
            }
          }, 100);
        }
      };

      // Touch pattern detection for mobile screenshot gestures
      const handleTouchStart = (e: TouchEvent) => {
        touchStartTime = Date.now();
        
        // Three finger touch detection (some screenshot methods)
        if (e.touches.length >= 3) {
          e.preventDefault();
          blurContent(3000);
          return false;
        }

        // Edge swipe detection (some phones use this for screenshots)
        if (e.touches.length === 1) {
          const touch = e.touches[0];
          const screenWidth = window.innerWidth;
          const screenHeight = window.innerHeight;
          
          // Check if touch starts from screen edges
          if (touch.clientX < 20 || touch.clientX > screenWidth - 20 ||
              touch.clientY < 20 || touch.clientY > screenHeight - 20) {
            // Potential edge gesture
            setTimeout(() => {
              const touchDuration = Date.now() - touchStartTime;
              if (touchDuration < 500) {
                // Quick edge gesture - possible screenshot
                blurContent(2000);
              }
            }, 500);
          }
        }
      };

      // Enhanced touch end detection
      const handleTouchEnd = (e: TouchEvent) => {
        const touchDuration = Date.now() - touchStartTime;
        
        // Very quick touch patterns might indicate screenshot attempts
        if (touchDuration < 200 && e.changedTouches.length > 0) {
          const touch = e.changedTouches[0];
          const screenWidth = window.innerWidth;
          
          // Quick touch near screen edges
          if (touch.clientX < 50 || touch.clientX > screenWidth - 50) {
            blurContent(2000);
          }
        }
      };

      // Page focus/blur detection
      const handleFocus = () => {
        // Page regained focus - check if it was a screenshot
        const now = Date.now();
        if (now - lastVisibilityChange < 2000) {
          blurContent(3000);
        }
      };

      // Context menu prevention
      const handleContextMenu = (e: Event) => {
        e.preventDefault();
        blurContent(1000);
        return false;
      };

      // Selection prevention
      const handleSelectStart = (e: Event) => {
        e.preventDefault();
        return false;
      };

      // Drag prevention
      const handleDragStart = (e: Event) => {
        e.preventDefault();
        return false;
      };

      // Device orientation change detection (some screenshot methods trigger this)
      const handleOrientationChange = () => {
        // Brief blur on orientation change as precaution
        setTimeout(() => {
          blurContent(1000);
        }, 100);
      };

      // Page state change detection
      const handlePageShow = () => {
        // Page became visible - possible screenshot return
        blurContent(2000);
      };

      addWatermarkProtection();

      // Add all event listeners with capture phase for better detection
      document.addEventListener('keydown', handleKeyDown, true);
      document.addEventListener('visibilitychange', handleVisibilityChange, true);
      document.addEventListener('touchstart', handleTouchStart, { passive: false, capture: true });
      document.addEventListener('touchend', handleTouchEnd, { passive: false, capture: true });
      document.addEventListener('focus', handleFocus, true);
      document.addEventListener('contextmenu', handleContextMenu, true);
      document.addEventListener('selectstart', handleSelectStart, true);
      document.addEventListener('dragstart', handleDragStart, true);
      document.addEventListener('orientationchange', handleOrientationChange, true);
      document.addEventListener('pageshow', handlePageShow, true);

      // Additional mobile-specific protections
      window.addEventListener('blur', () => {
        // Window lost focus - possible screenshot
        setTimeout(() => {
          if (document.hasFocus()) {
            blurContent(2000);
          }
        }, 100);
      }, true);

      // Prevent common screenshot shortcuts
      const preventShortcuts = (e: KeyboardEvent) => {
        // Prevent various screenshot and developer shortcuts
        if (
          (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
          (e.ctrlKey && e.key === 'u') ||
          (e.key === 'F12') ||
          (e.key === 'PrintScreen') ||
          (e.ctrlKey && e.key === 's') ||
          (e.ctrlKey && e.key === 'a') ||
          (e.ctrlKey && e.key === 'c') ||
          (e.ctrlKey && e.key === 'v') ||
          (e.ctrlKey && e.key === 'x')
        ) {
          e.preventDefault();
          e.stopPropagation();
          blurContent(3000);
          return false;
        }
      };

      document.addEventListener('keydown', preventShortcuts, true);

      // Cleanup function
      return () => {
        document.removeEventListener('keydown', handleKeyDown, true);
        document.removeEventListener('visibilitychange', handleVisibilityChange, true);
        document.removeEventListener('touchstart', handleTouchStart, true);
        document.removeEventListener('touchend', handleTouchEnd, true);
        document.removeEventListener('focus', handleFocus, true);
        document.removeEventListener('contextmenu', handleContextMenu, true);
        document.removeEventListener('selectstart', handleSelectStart, true);
        document.removeEventListener('dragstart', handleDragStart, true);
        document.removeEventListener('orientationchange', handleOrientationChange, true);
        document.removeEventListener('pageshow', handlePageShow, true);
        document.removeEventListener('keydown', preventShortcuts, true);
        
        window.removeEventListener('blur', () => {}, true);
      };
    }
  }, [selectedPolicy, searchParams]);

  const openPolicy = (policyKey: string) => {
    setSelectedPolicy(policyKey);
    setCurrentImageIndex(0);
  };

  const closePolicy = () => {
    setSelectedPolicy(null);
    setCurrentImageIndex(0);
    // Go back to the previous page (where user came from)
    window.history.back();
  };

  const nextImage = () => {
    if (selectedPolicy && policyImages[selectedPolicy]) {
      setCurrentImageIndex((prev) => 
        prev < policyImages[selectedPolicy].length - 1 ? prev + 1 : prev
      );
    }
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => prev > 0 ? prev - 1 : 0);
  };

  // If policy is selected, show image viewer
  if (selectedPolicy && policyImages[selectedPolicy]) {
    const images = policyImages[selectedPolicy];
    const currentImage = images[currentImageIndex];
    
    return (
      <div className="min-h-screen bg-white">
        {/* Responsive header bar */}
        <div className="bg-amber-600 text-white p-3 flex items-center justify-between flex-wrap gap-2">
          <button
            onClick={closePolicy}
            className="flex items-center text-white hover:text-amber-200 font-medium text-sm sm:text-base"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back
          </button>
          
          <div className="flex items-center space-x-2 sm:space-x-4 flex-wrap">
            <h2 className="text-sm sm:text-lg font-bold hidden sm:block">Church Policy Document</h2>
            <h2 className="text-sm font-bold sm:hidden">Policy Document</h2>
            
            <div className="flex items-center space-x-1 sm:space-x-2">
              <button
                onClick={prevImage}
                disabled={currentImageIndex === 0}
                className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm ${
                  currentImageIndex === 0 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-amber-700 hover:bg-amber-800'
                } text-white`}
              >
                Prev
              </button>
              <span className="text-xs sm:text-sm px-1">
                {currentImageIndex + 1}/{images.length}
              </span>
              <button
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
                className={`px-2 py-1 sm:px-3 sm:py-1 rounded text-xs sm:text-sm ${
                  currentImageIndex === images.length - 1 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-amber-700 hover:bg-amber-800'
                } text-white`}
              >
                Next
              </button>
            </div>
          </div>
          
          <div className="flex items-center space-x-2 sm:space-x-3">
            <span className="text-xs bg-amber-700 px-2 py-1 rounded hidden sm:inline">
              🔒 Protected Document
            </span>
            <span className="text-xs bg-amber-700 px-1 py-1 rounded sm:hidden">
              🔒
            </span>
            <button
              onClick={closePolicy}
              className="text-white hover:text-amber-200 font-bold text-lg sm:text-xl w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Protected image viewer with responsive sizing */}
        <div 
          className="w-full bg-white overflow-auto" 
          style={{ 
            height: 'calc(100vh - 60px)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
          } as React.CSSProperties}
        >
          {/* Policy image with responsive sizing */}
          <div className="relative flex justify-center py-4 px-4 policy-content">
            <div className="relative w-full max-w-4xl">
              {/* Document image - responsive */}
              <Image
                src={currentImage}
                alt={`Policy document page ${currentImageIndex + 1}`}
                width={794}
                height={1123}
                className="w-full h-auto shadow-lg border border-gray-200 rounded-sm"
                style={{
                  userSelect: 'none',
                  WebkitUserSelect: 'none',
                  MozUserSelect: 'none',
                  msUserSelect: 'none',
                  WebkitTouchCallout: 'none',
                  pointerEvents: 'none',
                  maxWidth: '100%',
                  height: 'auto',
                } as React.CSSProperties}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <SuvarthaHeader />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
              Church Policies
            </h1>
            <div className="w-24 h-1 bg-amber-600 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our church policies and guidelines for members and visitors. Updated January 2026.
            </p>
          </div>

          {/* Policies Content */}
          <div 
            className="bg-white rounded-lg shadow-lg p-8"
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              WebkitTouchCallout: 'none',
              WebkitTapHighlightColor: 'transparent',
              position: 'relative'
            } as React.CSSProperties}
          >
            {/* Policy 1 - Data Protection */}
            <section className="mb-8 relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">1</span>
                Data Protection Policy and Procedure
              </h2>
              <div className="pl-11 text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our church is committed to protecting the personal data of all members, visitors, and staff in accordance with UK data protection laws. This policy outlines:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>How we collect, store, and process personal information</li>
                  <li>Your rights regarding your personal data</li>
                  <li>Security measures to protect your information</li>
                  <li>Procedures for data access and correction requests</li>
                </ul>
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Official Document
                  </h3>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      📄 <strong>Data Protection Policy and Procedure</strong>
                    </p>
                    <button 
                      onClick={() => openPolicy('data-protection')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        policyFiles['data-protection'] 
                          ? 'bg-amber-600 text-white hover:bg-amber-700' 
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!policyFiles['data-protection']}
                    >
                      {policyFiles['data-protection'] ? 'View Policy Document (12 pages)' : 'Document Not Available'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy 2 - Risk Management */}
            <section className="mb-8 relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">2</span>
                Internal Risk Management Policy and Procedures
              </h2>
              <div className="pl-11 text-gray-700 leading-relaxed">
                <p className="mb-4">
                  Our comprehensive risk management framework ensures the safety and security of all church activities and operations. This policy covers:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Risk assessment procedures for all church activities</li>
                  <li>Health and safety protocols for events and gatherings</li>
                  <li>Emergency response and incident management</li>
                  <li>Regular review and updating of risk management practices</li>
                </ul>
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Official Document
                  </h3>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      📄 <strong>Internal risk management policy and procedures</strong>
                    </p>
                    <button 
                      onClick={() => openPolicy('risk-management')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        policyFiles['risk-management'] 
                          ? 'bg-amber-600 text-white hover:bg-amber-700' 
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!policyFiles['risk-management']}
                    >
                      {policyFiles['risk-management'] ? 'View Policy Document (6 pages)' : 'Document Not Available'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Policy 3 - Safeguarding */}
            <section className="mb-8 relative z-10">
              <h2 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <span className="bg-amber-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm mr-3">3</span>
                Safeguarding Policy and Procedures
              </h2>
              <div className="pl-11 text-gray-700 leading-relaxed">
                <p className="mb-4">
                  The safety and protection of all individuals, especially children and vulnerable adults, is our highest priority. Our safeguarding policy includes:
                </p>
                <ul className="list-disc list-inside space-y-2 mb-4">
                  <li>Child protection procedures and guidelines</li>
                  <li>Vulnerable adult safeguarding measures</li>
                  <li>Staff and volunteer screening processes</li>
                  <li>Reporting procedures for safeguarding concerns</li>
                </ul>
                
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Official Document
                  </h3>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      📄 <strong>Safeguarding Policy and Procedures</strong>
                    </p>
                    <button 
                      onClick={() => openPolicy('safeguarding')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        policyFiles['safeguarding'] 
                          ? 'bg-amber-600 text-white hover:bg-amber-700' 
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!policyFiles['safeguarding']}
                    >
                      {policyFiles['safeguarding'] ? 'View Policy Document (46 pages)' : 'Document Not Available'}
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Footer Notice */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              These policies are subject to change. For questions, please contact church leadership.
            </p>
            <p className="text-xs text-gray-400 mt-2">
              © 2026 Suvartha Ministries UK. All rights reserved. Content protected and confidential.
            </p>
          </div>
        </div>
      </main>

      <SuvarthaFooter />
    </div>
  );
}

export default function PoliciesPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-amber-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading policies...</p>
        </div>
      </div>
    }>
      <PoliciesContent />
    </Suspense>
  );
}