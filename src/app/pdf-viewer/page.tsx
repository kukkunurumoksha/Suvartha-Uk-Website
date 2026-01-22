"use client";

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

export default function PDFViewerPage() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file');

  useEffect(() => {
    // Silently disable all protection features
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Block all save, copy, screenshot, and developer shortcuts
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

    const handleDragStart = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleBeforePrint = (e: Event) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add all protection silently
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('selectstart', handleSelectStart, true);
    document.addEventListener('dragstart', handleDragStart, true);
    document.addEventListener('copy', handleCopy, true);
    document.addEventListener('cut', handleCut, true);
    window.addEventListener('beforeprint', handleBeforePrint, true);

    // Disable text selection
    document.body.style.userSelect = 'none';
    (document.body.style as any).webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('selectstart', handleSelectStart, true);
      document.removeEventListener('dragstart', handleDragStart, true);
      document.removeEventListener('copy', handleCopy, true);
      document.removeEventListener('cut', handleCut, true);
      window.removeEventListener('beforeprint', handleBeforePrint, true);
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
      {/* Simple header */}
      <div className="bg-emerald-600 text-white p-3 flex items-center justify-between">
        <button 
          onClick={() => window.location.href = '/policies'}
          className="bg-white text-emerald-600 px-3 py-1 rounded text-sm hover:bg-gray-100"
        >
          ← Back to Policies
        </button>
        <h1 className="text-lg font-semibold">Church Policy Document</h1>
        <div className="w-20"></div>
      </div>

      {/* PDF Viewer with hidden controls */}
      <div className="h-screen relative overflow-hidden">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-width`}
          className="w-full h-full border-0"
          title="Church Policy Document"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
          } as React.CSSProperties}
        />
        
        {/* Overlay to hide any PDF toolbar that might appear */}
        <div 
          className="absolute top-0 left-0 right-0 h-16 bg-white pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(255,255,255,1) 0%, rgba(255,255,255,0.8) 50%, transparent 100%)' 
          }}
        />
      </div>
    </div>
  );
}