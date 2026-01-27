"use client";

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import SuvarthaHeader from '../../components/suvartha/SuvarthaHeader';
import SuvarthaFooter from '../../components/suvartha/SuvarthaFooter';

function PoliciesContent() {
  const searchParams = useSearchParams();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfFiles, setPdfFiles] = useState({
    'data-protection': true,
    'risk-management': true,
    'safeguarding': true
  });

  useEffect(() => {
    // Check if a specific PDF is requested via URL parameter
    const pdfParam = searchParams.get('pdf');
    if (pdfParam) {
      setSelectedPdf(pdfParam);
    }

    // Since we know the files exist, we'll set them as available
    setPdfFiles({
      'data-protection': true,
      'risk-management': true,
      'safeguarding': true
    });

    // Maximum security protection when PDF is displayed
    if (selectedPdf) {
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

      // Aggressive clipboard clearing
      const clearClipboard = setInterval(() => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText('').catch(() => {});
        }
        // Also try to clear selection
        if (window.getSelection) {
          window.getSelection()?.removeAllRanges();
        }
      }, 100); // Every 100ms

      // Add comprehensive CSS protection
      const style = document.createElement('style');
      style.textContent = `
        /* Disable all selection and interaction */
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
        
        /* Hide scrollbars to prevent interaction */
        iframe::-webkit-scrollbar {
          display: none !important;
        }
        
        /* Disable pointer events on certain elements */
        iframe {
          pointer-events: auto !important;
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          user-select: none !important;
        }
        
        /* Prevent highlighting */
        ::selection {
          background: transparent !important;
        }
        ::-moz-selection {
          background: transparent !important;
        }
        
        /* Disable print styles */
        @media print {
          * {
            display: none !important;
          }
        }
      `;
      document.head.appendChild(style);

      // Disable developer tools detection (basic)
      const detectDevTools = () => {
        const threshold = 160;
        if (window.outerHeight - window.innerHeight > threshold || 
            window.outerWidth - window.innerWidth > threshold) {
          document.body.innerHTML = '<div style="display:flex;justify-content:center;align-items:center;height:100vh;font-size:24px;color:red;">Access Denied</div>';
        }
      };
      
      const devToolsInterval = setInterval(detectDevTools, 1000);

      // Cleanup function
      return () => {
        document.removeEventListener('contextmenu', handleContextMenu, true);
        document.removeEventListener('keydown', handleKeyDown, true);
        document.removeEventListener('keyup', handleKeyDown, true);
        document.removeEventListener('selectstart', handleSelectStart, true);
        document.removeEventListener('copy', handleClipboard, true);
        document.removeEventListener('cut', handleClipboard, true);
        document.removeEventListener('paste', handleClipboard, true);
        document.removeEventListener('dragstart', handleDragStart, true);
        document.removeEventListener('mousedown', handleMouseDown, true);
        document.removeEventListener('focus', handleFocus, true);
        
        clearInterval(clearClipboard);
        clearInterval(devToolsInterval);
        
        if (style.parentNode) {
          document.head.removeChild(style);
        }
        
        // Reset body styles
        document.body.style.userSelect = '';
        (document.body.style as any).webkitUserSelect = '';
        (document.body.style as any).mozUserSelect = '';
        (document.body.style as any).msUserSelect = '';
        (document.body.style as any).webkitTouchCallout = '';
      };
    }
  }, [selectedPdf]);

  const openPdf = (filename: string) => {
    setSelectedPdf(filename);
  };

  const closePdf = () => {
    setSelectedPdf(null);
  };

  // If PDF is selected, show PDF viewer
  if (selectedPdf) {
    const pdfUrl = `/api/policies/${encodeURIComponent(selectedPdf)}`;
    
    return (
      <div className="min-h-screen bg-white">
        {/* Minimal header bar */}
        <div className="bg-amber-600 text-white p-3 flex items-center justify-between">
          <button
            onClick={closePdf}
            className="flex items-center text-white hover:text-amber-200 font-medium"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Policies
          </button>
          
          <h2 className="text-lg font-bold">Church Policy Document</h2>
          
          <button
            onClick={closePdf}
            className="text-white hover:text-amber-200 font-bold text-xl w-8 h-8 flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        {/* Protected PDF viewer */}
        <div 
          className="w-full" 
          style={{ 
            height: 'calc(100vh - 60px)',
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            WebkitTouchCallout: 'none',
          } as React.CSSProperties}
        >
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title="Church Policy Document"
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
              WebkitTouchCallout: 'none',
              pointerEvents: 'auto',
            } as React.CSSProperties}
            onLoad={() => {
              // Additional protection when iframe loads
              const iframe = document.querySelector('iframe');
              if (iframe) {
                try {
                  const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
                  if (iframeDoc) {
                    iframeDoc.addEventListener('contextmenu', (e) => e.preventDefault());
                    iframeDoc.addEventListener('selectstart', (e) => e.preventDefault());
                    iframeDoc.addEventListener('copy', (e) => e.preventDefault());
                  }
                } catch (e) {
                  // Cross-origin restrictions - expected
                }
              }
            }}
          />
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
                      onClick={() => openPdf('Data Protection Policy and Procedure.pdf')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        pdfFiles['data-protection'] 
                          ? 'bg-amber-600 text-white hover:bg-amber-700' 
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!pdfFiles['data-protection']}
                    >
                      {pdfFiles['data-protection'] ? 'View PDF Document' : 'PDF Not Available'}
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
                      onClick={() => openPdf('Internal risk management policy and procedures.pdf')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        pdfFiles['risk-management'] 
                          ? 'bg-amber-600 text-white hover:bg-amber-700' 
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!pdfFiles['risk-management']}
                    >
                      {pdfFiles['risk-management'] ? 'View PDF Document' : 'PDF Not Available'}
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
                      onClick={() => openPdf('Safeguarding Policy and Procedures.pdf')}
                      className={`px-4 py-2 rounded-lg transition-colors ${
                        pdfFiles['safeguarding'] 
                          ? 'bg-amber-600 text-white hover:bg-amber-700' 
                          : 'bg-gray-400 text-white cursor-not-allowed'
                      }`}
                      disabled={!pdfFiles['safeguarding']}
                    >
                      {pdfFiles['safeguarding'] ? 'View PDF Document' : 'PDF Not Available'}
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