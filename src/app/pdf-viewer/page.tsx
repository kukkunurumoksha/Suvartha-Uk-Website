"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PDFViewerContent() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file');

  useEffect(() => {
    // Copy protection system
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block copy, save, print, and developer shortcuts
      if (
        e.key === 'F12' ||
        e.key === 'PrintScreen' ||
        e.key === 'F5' ||
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) ||
        (e.ctrlKey && (e.key === 'a' || e.key === 'A')) ||
        (e.ctrlKey && (e.key === 'c' || e.key === 'C')) ||
        (e.ctrlKey && (e.key === 'v' || e.key === 'V')) ||
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) ||
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) ||
        (e.ctrlKey && (e.key === 'x' || e.key === 'X')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) ||
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) ||
        (e.altKey && e.key === 'F4')
      ) {
        e.preventDefault();
        e.stopPropagation();
        return false;
      }
    };

    const handleSelectStart = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add protection
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('selectstart', handleSelectStart, true);
    document.addEventListener('copy', handleCopy, true);

    // Disable text selection
    document.body.style.userSelect = 'none';
    (document.body.style as any).webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    // Clear clipboard periodically
    const clearClipboard = setInterval(() => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('').catch(() => {});
      }
    }, 1000);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('selectstart', handleSelectStart, true);
      document.removeEventListener('copy', handleCopy, true);
      clearInterval(clearClipboard);
    };
  }, []);

  if (!file) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">No PDF Selected</h1>
          <button 
            onClick={() => window.location.href = '/policies'}
            className="bg-emerald-600 text-white px-4 py-2 rounded hover:bg-emerald-700"
          >
            Back to Policies
          </button>
        </div>
      </div>
    );
  }

  const pdfUrl = `/api/policies/${encodeURIComponent(file)}`;

  return (
    <div 
      className="min-h-screen bg-white"
      style={{
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
      } as React.CSSProperties}
    >
      {/* Compact header for smaller window */}
      <div className="bg-emerald-600 text-white p-2 flex items-center justify-between">
        <button 
          onClick={() => window.close()}
          className="bg-white text-emerald-600 px-2 py-1 rounded text-xs hover:bg-gray-100"
        >
          ✕ Close
        </button>
        <h1 className="text-sm font-semibold">Church Policy Document</h1>
        <div className="w-12"></div>
      </div>

      {/* PDF Viewer */}
      <div className="h-screen relative overflow-hidden">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-fit`}
          className="w-full h-full border-0"
          title="Church Policy Document"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          } as React.CSSProperties}
        />
        
        {/* Overlay to hide PDF toolbar */}
        <div 
          className="absolute top-0 left-0 right-0 h-12 bg-white pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.7) 70%, transparent 100%)' 
          }}
        />
      </div>
    </div>
  );
}

export default function PDFViewerPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-emerald-600 mx-auto mb-4"></div>
          <p>Loading PDF viewer...</p>
        </div>
      </div>
    }>
      <PDFViewerContent />
    </Suspense>
  );
}