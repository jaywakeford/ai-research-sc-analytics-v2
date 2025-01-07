'use client';

import React, { useState, useEffect, useCallback, memo } from 'react';
import dynamic from 'next/dynamic';
import { getPdfPath } from '@/utils/paths';

// Dynamically import PDF components with loading fallback
const Document = dynamic(
  () => import('react-pdf').then(mod => mod.Document),
  {
    ssr: false,
    loading: () => <div className="loading-indicator">Loading PDF viewer...</div>
  }
);

const Page = dynamic(
  () => import('react-pdf').then(mod => mod.Page),
  {
    ssr: false,
    loading: () => <div className="loading-indicator">Loading page...</div>
  }
);

interface PdfViewerProps {
  pdfUrl: string;
}

const PdfViewer: React.FC<PdfViewerProps> = memo(({ pdfUrl }) => {
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [workerInitialized, setWorkerInitialized] = useState<boolean>(false);
  const fullPath = getPdfPath(pdfUrl);

  // Initialize PDF.js worker
  useEffect(() => {
    let mounted = true;
    const initWorker = async () => {
      try {
        const pdfjs = await import('react-pdf');
        if (!mounted) return;
        pdfjs.pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.pdfjs.version}/pdf.worker.min.js`;
        setWorkerInitialized(true);
      } catch (err) {
        console.error('Error initializing PDF worker:', err);
        if (mounted) {
          setError('Failed to initialize PDF viewer');
        }
      }
    };

    initWorker();
    return () => {
      mounted = false;
    };
  }, []);

  const onDocumentLoadSuccess = useCallback(({ numPages }: { numPages: number }): void => {
    setNumPages(numPages);
    setLoading(false);
    setError(null);
  }, []);

  const onDocumentLoadError = useCallback((err: Error): void => {
    console.error('Error loading PDF:', err);
    setError(err.message || 'Failed to load PDF');
    setLoading(false);
  }, []);

  const handlePageChange = useCallback((newPage: number) => {
    setPageNumber(prevPage => {
      const validatedPage = Math.max(1, Math.min(newPage, numPages));
      return validatedPage !== prevPage ? validatedPage : prevPage;
    });
  }, [numPages]);

  if (!workerInitialized) {
    return <div className="loading-indicator">Initializing PDF viewer...</div>;
  }

  return (
    <div className="pdf-viewer">
      <div className="pdf-content">
        {loading && <div className="loading-indicator">Loading PDF...</div>}
        {error && (
          <div className="error-container">
            <div className="error-message">Error loading PDF: {error}</div>
            <div className="error-details">File: {fullPath}</div>
            <button 
              onClick={() => window.location.reload()}
              className="retry-button"
            >
              Retry
            </button>
          </div>
        )}
        
        {!error && (
          <Document
            file={fullPath}
            onLoadSuccess={onDocumentLoadSuccess}
            onLoadError={onDocumentLoadError}
            loading={<div className="loading-indicator">Loading PDF...</div>}
            error={<div>Failed to load PDF. Please try again.</div>}
          >
            <Page 
              key={`page_${pageNumber}`}
              pageNumber={pageNumber} 
              loading={<div className="loading-indicator">Loading page...</div>}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              error={<div>Error loading page {pageNumber}</div>}
              className="pdf-page"
            />
          </Document>
        )}
      </div>

      {!loading && !error && numPages > 0 && (
        <div className="pdf-controls">
          <button
            onClick={() => handlePageChange(pageNumber - 1)}
            disabled={pageNumber <= 1}
            aria-label="Previous page"
            className="control-button"
          >
            Previous
          </button>
          <span className="page-indicator">
            Page {pageNumber} of {numPages}
          </span>
          <button
            onClick={() => handlePageChange(pageNumber + 1)}
            disabled={pageNumber >= numPages}
            aria-label="Next page"
            className="control-button"
          >
            Next
          </button>
        </div>
      )}

      <style jsx>{`
        .pdf-viewer {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 1rem;
          min-height: 500px;
          position: relative;
          height: 100%;
          width: 100%;
        }
        .pdf-content {
          flex: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          padding-bottom: 80px;
        }
        .loading-indicator {
          padding: 2rem;
          text-align: center;
          color: #666;
        }
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          padding: 2rem;
          text-align: center;
        }
        .error-message {
          color: #dc2626;
          font-weight: bold;
        }
        .error-details {
          font-size: 0.875rem;
          color: #666;
        }
        .retry-button {
          padding: 0.5rem 1rem;
          background: #dc2626;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }
        .pdf-controls {
          display: flex;
          gap: 1rem;
          align-items: center;
          padding: 1rem;
          background: rgba(0, 0, 0, 0.8);
          border-radius: 8px;
          position: fixed;
          bottom: 2rem;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .control-button {
          padding: 0.5rem 1rem;
          background: #0070f3;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .control-button:hover:not(:disabled) {
          background: #0051a8;
        }
        .control-button:disabled {
          background: #ccc;
          cursor: not-allowed;
        }
        .page-indicator {
          color: white;
          font-weight: 500;
        }
        .pdf-page {
          max-width: 100%;
          height: auto;
        }
      `}</style>
    </div>
  );
});

PdfViewer.displayName = 'PdfViewer';

export default PdfViewer; 