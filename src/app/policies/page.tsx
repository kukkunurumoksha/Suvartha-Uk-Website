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
    'risk-management': false,
    'safeguarding': false
  });

  useEffect(() => {
    // Check if a specific policy is requested via URL parameter
    const policyParam = searchParams.get('policy');
    const pdfParam = searchParams.get('pdf'); // Keep backward compatibility
    
    if (policyParam) {
      setSelectedPolicy(policyParam);
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

    // Load policy images
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
        '/policy-images/risk-management/page-1.png',
        '/policy-images/risk-management/page-2.png',
        // Add more pages as needed when uploaded
      ],
      'safeguarding': [
        '/policy-images/safeguarding/page-1.png',
        '/policy-images/safeguarding/page-2.png',
        // Add more pages as needed when uploaded
      ]
    });

    // Set policy availability - only data-protection has images uploaded
    setPolicyFiles({
      'data-protection': true,
      'risk-management': false, // Will be enabled when images are uploaded
      'safeguarding': false     // Will be enabled when images are uploaded
    });

    // Maximum security protection when policy is displayed
    if (selectedPolicy) {
      // Disable right-click completely
      const handleContextMenu = (e: MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Block ALL keyboard shortcuts and function keys
      const handleKeyDown = (e: KeyboardEvent) => {
        // Block ALL function keys
        if (e.key.startsWith('F') && e.key.length <= 3) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // Block ALL Ctrl combinations
        if (e.ctrlKey) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // Block ALL Alt combinations
        if (e.altKey) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
        
        // Block specific dangerous keys
        if (
          e.key === 'PrintScreen' ||
          e.key === 'Insert' ||
          e.key === 'Delete' ||
          (e.shiftKey && e.key === 'Insert') ||
          e.key === 'Meta' // Windows key
        ) {
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };

      // Prevent text selection completely
      const handleSelectStart = (e: Event) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Block clipboard operations
      const handleClipboard = (e: ClipboardEvent) => {
        e.preventDefault();
        e.stopPropagation();
        e.clipboardData?.setData('text/plain', '');
        return false;
      };

      // Prevent drag operations
      const handleDragStart = (e: DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        return false;
      };

      // Block mouse selection
      const handleMouseDown = (e: MouseEvent) => {
        if (e.detail > 1) { // Prevent double/triple click selection
          e.preventDefault();
          e.stopPropagation();
          return false;
        }
      };

      // Prevent focus on iframe (blocks some shortcuts)
      const handleFocus = (e: FocusEvent) => {
        const target = e.target as HTMLElement;
        if (target.tagName === 'IFRAME') {
          target.blur();
        }
      };

      // Add all event listeners with capture phase
      document.addEventListener('contextmenu', handleContextMenu, true);
      document.addEventListener('keydown', handleKeyDown, true);
      document.addEventListener('keyup', handleKeyDown, true);
      document.addEventListener('selectstart', handleSelectStart, true);
      document.addEventListener('copy', handleClipboard, true);
      document.addEventListener('cut', handleClipboard, true);
      document.addEventListener('paste', handleClipboard, true);
      document.addEventListener('dragstart', handleDragStart, true);
      document.addEventListener('mousedown', handleMouseDown, true);
      document.addEventListener('focus', handleFocus, true);

      // Disable text selection globally
      document.body.style.userSelect = 'none';
      (document.body.style as any).webkitUserSelect = 'none';
      (document.body.style as any).mozUserSelect = 'none';
      (document.body.style as any).msUserSelect = 'none';
      (document.body.style as any).webkitTouchCallout = 'none';

      // Clear selection periodically (no clipboard access needed)
      const clearSelection = setInterval(() => {
        if (window.getSelection) {
          window.getSelection()?.removeAllRanges();
        }
      }, 500); // Every 500ms

      // Add comprehensive CSS protection
      const style = document.createElement('style');
      style.textContent = `
        /* Enhanced protection styles */
        *, *::before, *::after {
          user-select: none !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          -webkit-touch-callout: none !important;
          -webkit-tap-highlight-color: transparent !important;
        }
        
        /* Disable drag and drop */
        * {
          -webkit-user-drag: none !important;
          -khtml-user-drag: none !important;
          -moz-user-drag: none !important;
          -o-user-drag: none !important;
          user-drag: none !important;
        }
        
        /* Prevent highlighting */
        ::selection {
          background: transparent !important;
        }
        ::-moz-selection {
          background: transparent !important;
        }
        
        /* Hide content during print */
        @media print {
          * {
            display: none !important;
          }
          body::after {
            content: "This document cannot be printed. Contact church administration for authorized copies." !important;
            display: block !important;
            font-size: 24px !important;
            text-align: center !important;
            margin-top: 200px !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Enhanced screenshot protection with blur
      const preventScreenshot = () => {
        // Immediately blur content when Print Screen is detected
        const policyContent = document.querySelector('.policy-content') as HTMLElement;
        if (policyContent) {
          policyContent.style.filter = 'blur(20px)';
          policyContent.style.transition = 'filter 0.1s ease';
          setTimeout(() => {
            policyContent.style.filter = 'none';
          }, 1000); // Keep blurred for 1 second
        }
      };

      // Detect Print Screen key and other screenshot methods
      const handleKeyUp = (e: KeyboardEvent) => {
        if (e.key === 'PrintScreen' || e.key === 'F12') {
          preventScreenshot();
        }
      };

      const handleScreenshotKeyDown = (e: KeyboardEvent) => {
        // Also detect on keydown for faster response
        if (e.key === 'PrintScreen') {
          preventScreenshot();
        }
      };

      // Blur when window loses focus (potential screenshot app)
      let blurTimeout: NodeJS.Timeout;
      const handleVisibilityChange = () => {
        const policyContent = document.querySelector('.policy-content') as HTMLElement;
        if (document.hidden && policyContent) {
          // Immediately blur when window loses focus
          policyContent.style.filter = 'blur(15px)';
          policyContent.style.transition = 'filter 0.1s ease';
        } else if (policyContent) {
          // Clear blur when window regains focus
          clearTimeout(blurTimeout);
          blurTimeout = setTimeout(() => {
            policyContent.style.filter = 'none';
          }, 500); // Small delay to ensure user is back
        }
      };

      // Detect window resize (potential screenshot tool)
      const handleResize = () => {
        const policyContent = document.querySelector('.policy-content') as HTMLElement;
        if (policyContent) {
          policyContent.style.filter = 'blur(10px)';
          setTimeout(() => {
            policyContent.style.filter = 'none';
          }, 500);
        }
      };

      // Add all screenshot protection listeners
      document.addEventListener('keyup', handleKeyUp, true);
      document.addEventListener('keydown', handleScreenshotKeyDown, true);
      document.addEventListener('visibilitychange', handleVisibilityChange, true);
      window.addEventListener('resize', handleResize, true);

      // Cleanup function
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu, true);
        document.removeEventListener('keydown', handleKeyDown, true);
        document.removeEventListener('keyup', handleKeyDown, true);
        document.removeEventListener('keydown', handleScreenshotKeyDown, true);
        document.removeEventListener('keyup', handleKeyUp, true);
        document.removeEventListener('visibilitychange', handleVisibilityChange, true);
        window.removeEventListener('resize', handleResize, true);
        document.removeEventListener('selectstart', handleSelectStart, true);
        document.removeEventListener('copy', handleClipboard, true);
        document.removeEventListener('cut', handleClipboard, true);
        document.removeEventListener('paste', handleClipboard, true);
        document.removeEventListener('dragstart', handleDragStart, true);
        document.removeEventListener('mousedown', handleMouseDown, true);
        document.removeEventListener('focus', handleFocus, true);
        
        clearInterval(clearSelection);
        if (blurTimeout) clearTimeout(blurTimeout);
        
        if (style.parentNode) {
          document.head.removeChild(style);
        }
        
        // Reset body styles
        document.body.style.userSelect = '';
        document.body.style.visibility = '';
        (document.body.style as any).webkitUserSelect = '';
        (document.body.style as any).mozUserSelect = '';
        (document.body.style as any).msUserSelect = '';
        (document.body.style as any).webkitTouchCallout = '';
        
        // Reset policy content styles
        const policyContent = document.querySelector('.policy-content') as HTMLElement;
        if (policyContent) {
          policyContent.style.filter = '';
          policyContent.style.visibility = '';
          policyContent.style.transition = '';
        }
      };
    }
  }, [selectedPolicy]);

  const openPolicy = (policyKey: string) => {
    setSelectedPolicy(policyKey);
    setCurrentImageIndex(0);
  };

  const closePolicy = () => {
    setSelectedPolicy(null);
    setCurrentImageIndex(0);
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
            Back to Policies
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
              
              {/* Responsive watermark overlay */}
              <div 
                className="absolute inset-0 pointer-events-none rounded-sm"
                style={{
                  background: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 60px,
                    rgba(255, 193, 7, 0.02) 60px,
                    rgba(255, 193, 7, 0.02) 120px
                  )`
                }}
              >
                {/* Responsive watermark text */}
                <div className="absolute bottom-2 right-2 text-xs sm:text-sm font-light opacity-5 text-amber-600 whitespace-nowrap">
                  © 2026 Suvartha Ministries UK
                </div>
              </div>
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
            {/* Watermark */}
            <div 
              style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%) rotate(-45deg)',
                fontSize: '48px',
                color: 'rgba(0, 0, 0, 0.05)',
                pointerEvents: 'none',
                zIndex: 1,
                whiteSpace: 'nowrap'
              }}
            >
              CONFIDENTIAL - SUVARTHA MINISTRIES UK
            </div>
            
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
                
                {/* PDF Viewer for this policy */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Official Document
                  </h3>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      📄 <strong>Data Protection Policy and Procedure.pdf</strong>
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
                
                {/* PDF Viewer for this policy */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Official Document
                  </h3>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      📄 <strong>Internal risk management policy and procedures.pdf</strong>
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
                      {policyFiles['risk-management'] ? 'View Policy Document' : 'Coming Soon - Upload in Progress'}
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
                
                {/* PDF Viewer for this policy */}
                <div className="mt-6 bg-gray-50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <svg className="w-5 h-5 text-red-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                    </svg>
                    Official Document
                  </h3>
                  <div className="bg-white rounded border-2 border-dashed border-gray-300 p-6 text-center">
                    <p className="text-gray-600 mb-4">
                      📄 <strong>Safeguarding Policy and Procedures.pdf</strong>
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
                      {policyFiles['safeguarding'] ? 'View Policy Document' : 'Coming Soon - Upload in Progress'}
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