"use client";

import { useEffect, useState } from 'react';
import SuvarthaHeader from '../../components/suvartha/SuvarthaHeader';
import SuvarthaFooter from '../../components/suvartha/SuvarthaFooter';

export default function PoliciesPage() {
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfFiles, setPdfFiles] = useState({
    'data-protection': true,
    'risk-management': true,
    'safeguarding': true
  });

  useEffect(() => {
    // Since we know the files exist, we'll set them as available
    setPdfFiles({
      'data-protection': true,
      'risk-management': true,
      'safeguarding': true
    });

    // Copy protection when PDF is displayed (less aggressive to allow Chrome PDF controls)
    if (selectedPdf) {
      const handleContextMenu = (e: MouseEvent) => {
        // Only block right-click on the document content, not PDF controls
        const target = e.target as HTMLElement;
        if (target && !target.closest('iframe')) {
          e.preventDefault();
          return false;
        }
      };

      const handleKeyDown = (e: KeyboardEvent) => {
        // Block only the most critical shortcuts, allow PDF navigation
        if (
          (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
          (e.ctrlKey && (e.key === 'a' || e.key === 'A')) ||
          (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
          e.key === 'PrintScreen'
        ) {
          e.preventDefault();
          return false;
        }
      };

      document.addEventListener('contextmenu', handleContextMenu);
      document.addEventListener('keydown', handleKeyDown);

      return () => {
        document.removeEventListener('contextmenu', handleContextMenu);
        document.removeEventListener('keydown', handleKeyDown);
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

        {/* Full-screen PDF viewer with Chrome's native controls */}
        <div className="relative" style={{ height: 'calc(100vh - 60px)' }}>
          <iframe
            src={pdfUrl}
            className="w-full h-full border-0"
            title="Church Policy Document"
            allow="fullscreen"
            style={{
              userSelect: 'none',
              WebkitUserSelect: 'none',
              MozUserSelect: 'none',
              msUserSelect: 'none',
            } as React.CSSProperties}
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