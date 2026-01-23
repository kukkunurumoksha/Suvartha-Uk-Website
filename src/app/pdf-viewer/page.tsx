"use client";

import { useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function PDFViewerContent() {
  const searchParams = useSearchParams();
  const file = searchParams.get('file');

  useEffect(() => {
    // Advanced copy protection system
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
        e.key === 'F11' || // Fullscreen
        (e.ctrlKey && (e.key === 's' || e.key === 'S')) || // Save
        (e.ctrlKey && (e.key === 'a' || e.key === 'A')) || // Select All
        (e.ctrlKey && (e.key === 'c' || e.key === 'C')) || // Copy
        (e.ctrlKey && (e.key === 'v' || e.key === 'V')) || // Paste
        (e.ctrlKey && (e.key === 'p' || e.key === 'P')) || // Print
        (e.ctrlKey && (e.key === 'u' || e.key === 'U')) || // View Source
        (e.ctrlKey && (e.key === 'x' || e.key === 'X')) || // Cut
        (e.ctrlKey && (e.key === 'z' || e.key === 'Z')) || // Undo
        (e.ctrlKey && (e.key === 'y' || e.key === 'Y')) || // Redo
        (e.ctrlKey && (e.key === 'f' || e.key === 'F')) || // Find
        (e.ctrlKey && (e.key === 'h' || e.key === 'H')) || // History
        (e.ctrlKey && (e.key === 'j' || e.key === 'J')) || // Downloads
        (e.ctrlKey && (e.key === 'k' || e.key === 'K')) || // Search
        (e.ctrlKey && (e.key === 'l' || e.key === 'L')) || // Address bar
        (e.ctrlKey && (e.key === 'n' || e.key === 'N')) || // New window
        (e.ctrlKey && (e.key === 'r' || e.key === 'R')) || // Refresh
        (e.ctrlKey && (e.key === 't' || e.key === 'T')) || // New tab
        (e.ctrlKey && (e.key === 'w' || e.key === 'W')) || // Close tab
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) || // Dev Tools
        (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) || // Console
        (e.ctrlKey && e.shiftKey && (e.key === 'C' || e.key === 'c')) || // Inspect
        (e.ctrlKey && e.shiftKey && (e.key === 'K' || e.key === 'k')) || // Console
        (e.ctrlKey && e.shiftKey && (e.key === 'R' || e.key === 'r')) || // Hard refresh
        (e.ctrlKey && e.shiftKey && (e.key === 'Delete')) || // Clear data
        (e.altKey && e.key === 'F4') || // Close window
        (e.altKey && (e.key === 'Tab')) || // Alt+Tab
        (e.key === 'Meta') // Windows/Cmd key
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
      e.clipboardData?.clearData();
      return false;
    };

    const handleCut = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      e.clipboardData?.clearData();
      return false;
    };

    const handlePaste = (e: ClipboardEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Disable screenshot on focus loss (when user tries to take screenshot)
    const handleVisibilityChange = () => {
      if (document.hidden) {
        // Clear clipboard when window loses focus
        if (navigator.clipboard) {
          navigator.clipboard.writeText('').catch(() => {});
        }
      }
    };

    const handleBlur = () => {
      // Clear clipboard when window loses focus
      if (navigator.clipboard) {
        navigator.clipboard.writeText('').catch(() => {});
      }
    };

    // Prevent drag and drop of the entire page
    const handleDrop = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    const handleDragOver = (e: DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    // Add all protection silently with capture phase
    document.addEventListener('contextmenu', handleContextMenu, true);
    document.addEventListener('keydown', handleKeyDown, true);
    document.addEventListener('selectstart', handleSelectStart, true);
    document.addEventListener('dragstart', handleDragStart, true);
    document.addEventListener('copy', handleCopy, true);
    document.addEventListener('cut', handleCut, true);
    document.addEventListener('paste', handlePaste, true);
    document.addEventListener('drop', handleDrop, true);
    document.addEventListener('dragover', handleDragOver, true);
    document.addEventListener('visibilitychange', handleVisibilityChange);
    window.addEventListener('beforeprint', handleBeforePrint, true);
    window.addEventListener('blur', handleBlur);

    // Disable text selection completely
    document.body.style.userSelect = 'none';
    (document.body.style as any).webkitUserSelect = 'none';
    (document.body.style as any).mozUserSelect = 'none';
    (document.body.style as any).msUserSelect = 'none';
    (document.body.style as any).webkitTouchCallout = 'none';
    (document.body.style as any).webkitTapHighlightColor = 'transparent';

    // Disable pointer events on selection
    document.body.style.pointerEvents = 'auto';

    // Clear clipboard periodically and monitor for copy attempts
    const clearClipboard = setInterval(() => {
      if (navigator.clipboard) {
        navigator.clipboard.writeText('').catch(() => {});
      }
      // Also try to clear selection
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
        }
      }
    }, 500); // More frequent clearing

    // Monitor for any text selection and clear it immediately
    const clearSelection = setInterval(() => {
      if (document.getSelection) {
        const selection = document.getSelection();
        if (selection && selection.rangeCount > 0) {
          selection.removeAllRanges();
        }
      }
      if (window.getSelection) {
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          selection.removeAllRanges();
        }
      }
    }, 100); // Very frequent selection clearing

    // Override clipboard API completely
    if (navigator.clipboard) {
      const originalWriteText = navigator.clipboard.writeText;
      navigator.clipboard.writeText = () => Promise.resolve();
      
      const originalWrite = navigator.clipboard.write;
      navigator.clipboard.write = () => Promise.resolve();
      
      const originalReadText = navigator.clipboard.readText;
      navigator.clipboard.readText = () => Promise.resolve('');
      
      const originalRead = navigator.clipboard.read;
      navigator.clipboard.read = () => Promise.resolve([]);
    }

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, true);
      document.removeEventListener('keydown', handleKeyDown, true);
      document.removeEventListener('selectstart', handleSelectStart, true);
      document.removeEventListener('dragstart', handleDragStart, true);
      document.removeEventListener('copy', handleCopy, true);
      document.removeEventListener('cut', handleCut, true);
      document.removeEventListener('paste', handlePaste, true);
      document.removeEventListener('drop', handleDrop, true);
      document.removeEventListener('dragover', handleDragOver, true);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      window.removeEventListener('beforeprint', handleBeforePrint, true);
      window.removeEventListener('blur', handleBlur);
      clearInterval(clearClipboard);
      clearInterval(clearSelection);
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
      {/* Add CSS to hide PDF controls */}
      <style jsx>{`
        iframe {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
        }
        
        /* Hide any PDF viewer controls */
        iframe::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          pointer-events: none;
          z-index: 999;
        }
        
        /* Disable text selection in PDF */
        iframe * {
          -webkit-user-select: none !important;
          -moz-user-select: none !important;
          -ms-user-select: none !important;
          user-select: none !important;
          -webkit-touch-callout: none !important;
        }
      `}</style>
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

      {/* PDF Viewer with hidden controls - optimized for smaller window */}
      <div className="h-screen relative overflow-hidden">
        <iframe
          src={`${pdfUrl}#toolbar=0&navpanes=0&scrollbar=1&view=FitH&zoom=page-fit&statusbar=0&messages=0&printable=0&copy=0&select=0&search=0`}
          className="w-full h-full border-0"
          title="Church Policy Document"
          sandbox="allow-same-origin allow-scripts"
          style={{
            userSelect: 'none',
            WebkitUserSelect: 'none',
            MozUserSelect: 'none',
            msUserSelect: 'none',
            pointerEvents: 'auto',
          } as React.CSSProperties}
        />
        
        {/* Overlay to hide any PDF toolbar that might appear */}
        <div 
          className="absolute top-0 left-0 right-0 h-16 bg-white pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 70%, transparent 100%)' 
          }}
        />
        
        {/* Bottom overlay to hide any PDF controls */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-16 bg-white pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(to top, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 70%, transparent 100%)' 
          }}
        />
        
        {/* Left overlay to hide any side controls */}
        <div 
          className="absolute top-0 bottom-0 left-0 w-8 bg-white pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 70%, transparent 100%)' 
          }}
        />
        
        {/* Right overlay to hide any side controls */}
        <div 
          className="absolute top-0 bottom-0 right-0 w-8 bg-white pointer-events-none z-10"
          style={{ 
            background: 'linear-gradient(to left, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.9) 70%, transparent 100%)' 
          }}
        />
        
        {/* Invisible overlay to capture and block any clicks on PDF controls */}
        <div 
          className="absolute inset-0 z-5"
          style={{
            pointerEvents: 'none',
          }}
          onContextMenu={(e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
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